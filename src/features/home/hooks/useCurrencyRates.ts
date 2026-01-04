import { useEffect, useState } from "react";
import axios from "axios";
import type { Rates } from "../../../types";

export const useCurrencyRates = (fromCurrency: string, toCurrency: string) => {
  const [ratesValues, setRatesValues] = useState<Rates | null>(null);
  const [ratesDateUpdate, setRateDateUpdate] = useState<string>("");
  const [isLoadingRates, setIsLoadingRates] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchRates = async () => {
      setIsLoadingRates(true);
      try {
        const response = await axios.get(
          `https://api.vatcomply.com/rates?symbols=${fromCurrency},${toCurrency}`,
          { signal: controller.signal }
        );
        setRatesValues(response.data.rates);
        setRateDateUpdate(response.data.date);
      } catch (error: any) {
        if (!axios.isCancel(error)) {
          console.error("Error fetching rates", error);
        }
      } finally {
        setIsLoadingRates(false);
      }
    };

    const timeoutId = setTimeout(fetchRates, 400);

    return () => {
      clearTimeout(timeoutId);
      controller.abort();
    };
  }, [fromCurrency, toCurrency]);

  return { ratesValues, ratesDateUpdate, isLoadingRates };
};
