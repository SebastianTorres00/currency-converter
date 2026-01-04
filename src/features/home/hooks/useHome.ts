import { useMemo } from "react";
import type { UseHomeReturn } from "../../../types";
import useFormHome from "./useFormHome";
import { useCurrencyRates } from "./useCurrencyRates";
import useCurrencyList from "./useCurrencyList";

const useHome = (): UseHomeReturn => {
  const {
    onChangeFromCurrency,
    onChangeToCurrency,
    onChangeAmount,
    handleSwap,
    amount,
    fromCurrency,
    toCurrency,
    isSwapping,
  } = useFormHome();

  const { ratesValues, ratesDateUpdate, isLoadingRates } = useCurrencyRates(
    fromCurrency,
    toCurrency
  );
  const { listCurrencies } = useCurrencyList();

  const numericAmount = useMemo(() => parseFloat(amount) || 0, [amount]);

  const convertCurrency = useMemo(
    () =>
      (amount: number, from: string, to: string): number => {
        if (!ratesValues) return 0;

        const fromRate = ratesValues[from];
        const toRate = ratesValues[to];

        if (!fromRate || !toRate) return 0;

        return (amount / fromRate) * toRate;
      },
    [ratesValues]
  );

  const convertedAmount = useMemo(
    () => convertCurrency(numericAmount, fromCurrency, toCurrency),
    [convertCurrency, numericAmount, fromCurrency, toCurrency]
  );

  const inverseRate = useMemo(
    () => convertCurrency(1, toCurrency, fromCurrency),
    [convertCurrency, fromCurrency, toCurrency]
  );

  const fromCurrencyData = useMemo(
    () => listCurrencies.find((c) => c.symbol === fromCurrency),
    [listCurrencies, fromCurrency]
  );

  const toCurrencyData = useMemo(
    () => listCurrencies.find((c) => c.symbol === toCurrency),
    [listCurrencies, toCurrency]
  );

  return {
    listCurrencies,
    ratesValues,
    ratesDateUpdate,
    fromCurrency,
    toCurrency,
    handleSwap,
    isSwapping,
    onChangeFromCurrency,
    onChangeToCurrency,
    onChangeAmount,
    amount,
    fromCurrencyData,
    toCurrencyData,
    convertedAmount,
    inverseRate,
    numericAmount,
    isLoadingRates,
  };
};

export default useHome;
