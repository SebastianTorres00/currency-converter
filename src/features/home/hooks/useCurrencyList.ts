import { useEffect, useState } from "react";
import type { Currency } from "../../../types";
import axios from "axios";

export const useCurrencyList = () => {
  const [listCurrencies, setListCurrencies] = useState<Currency[]>([]);
  const [isLoadingCurrencies, setIsLoadingCurrencies] = useState(false);

  useEffect(() => {
    const fetchCurrencies = async () => {
      setIsLoadingCurrencies(true);
      try {
        const response = await axios.get(
          "https://api.vatcomply.com/currencies"
        );
        const getValues: Currency[] = Object.values(response.data);
        setListCurrencies(getValues);
      } catch (error) {
        console.error("fetchCurrencies error", error);
      } finally {
        setIsLoadingCurrencies(false);
      }
    };
    fetchCurrencies();
  }, []);

  return { listCurrencies, isLoadingCurrencies };
};
export default useCurrencyList;
