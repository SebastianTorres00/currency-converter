import CurrencyConverter from "../components/CurrencyConverter";
import { useHome } from "../hooks";

const HomeScreen = () => {
  const {
    listCurrencies,
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
  } = useHome();

  return (
    <CurrencyConverter
      listCurrencies={listCurrencies}
      ratesDateUpdate={ratesDateUpdate}
      fromCurrency={fromCurrency}
      toCurrency={toCurrency}
      handleSwap={handleSwap}
      isSwapping={isSwapping}
      onChangeFromCurrency={onChangeFromCurrency}
      onChangeToCurrency={onChangeToCurrency}
      onChangeAmount={onChangeAmount}
      amount={amount}
      fromCurrencyData={fromCurrencyData}
      toCurrencyData={toCurrencyData}
      convertedAmount={convertedAmount}
      inverseRate={inverseRate}
      numericAmount={numericAmount}
      isLoadingRates={isLoadingRates}
    />
  );
};

export default HomeScreen;
