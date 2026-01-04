import { useCallback, useState } from "react";
import type { IsNotSameCurrencyParams } from "../../../types";
import { toast } from "react-toastify";

const useFormHome = () => {
  const [fromCurrency, setFromCurrency] = useState<string>("USD");
  const [toCurrency, setToCurrency] = useState<string>("EUR");
  const [amount, setAmount] = useState<string>("1");
  const [isSwapping, setIsSwapping] = useState<boolean>(false);

  const isNotSameCurency = ({
    valueCurrencySelected,
    currentValueUsed,
  }: IsNotSameCurrencyParams): boolean => {
    if (valueCurrencySelected === currentValueUsed) {
      toast.dismiss();
      toast.info("No se puede seleccionar la misma moneda", {
        position: "top-right",
        autoClose: 5000,
        theme: "light",
      });
    }

    return valueCurrencySelected !== currentValueUsed;
  };

  const onChangeFromCurrency = useCallback(
    (valueCurrency: string) => {
      if (
        isNotSameCurency({
          valueCurrencySelected: valueCurrency,
          currentValueUsed: toCurrency,
        })
      ) {
        setFromCurrency(valueCurrency);
      }
    },
    [toCurrency]
  );

  const onChangeToCurrency = useCallback(
    (valueCurrency: string) => {
      if (
        isNotSameCurency({
          valueCurrencySelected: valueCurrency,
          currentValueUsed: fromCurrency,
        })
      ) {
        setToCurrency(valueCurrency);
      }
    },
    [fromCurrency]
  );

  const onChangeAmount = useCallback((amount: string) => {
    const MAX_LENGTH_INPUT = 21;
    if (!/^\d*\.?\d*$/.test(amount)) return;
    if (amount.length >= MAX_LENGTH_INPUT) {
      return;
    }
    if (amount === "") {
      setAmount("");
      return;
    }

    setAmount(amount);
  }, []);

  const handleSwap = useCallback(() => {
    setIsSwapping(true);
    setTimeout(() => {
      setFromCurrency(toCurrency);
      setToCurrency(fromCurrency);
      setIsSwapping(false);
    }, 150);
  }, [fromCurrency, toCurrency]);

  return {
    onChangeFromCurrency,
    onChangeToCurrency,
    onChangeAmount,
    handleSwap,
    amount,
    fromCurrency,
    toCurrency,
    isSwapping,
  };
};

export default useFormHome;
