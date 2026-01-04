export interface Currency {
  name: string;
  symbol: string;
}

export interface Rates {
  [currencyCode: string]: number;
}

export interface IsNotSameCurrencyParams {
  valueCurrencySelected: string;
  currentValueUsed: string;
}

export interface UseHomeReturn {
  listCurrencies: Currency[];
  ratesValues: Rates | null;
  ratesDateUpdate: string;
  fromCurrency: string;
  toCurrency: string;
  handleSwap: () => void;
  isSwapping: boolean;
  onChangeFromCurrency: (valueCurrency: string) => void;
  onChangeToCurrency: (valueCurrency: string) => void;
  onChangeAmount: (amount: string) => void;
  amount: string;
  fromCurrencyData: Currency;
  toCurrencyData: Currency;
  convertedAmount: number;
  inverseRate: number;
  numericAmount: number;
  isLoadingRates: boolean;
}

export interface CurrencyConverterProps {
  listCurrencies: Currency[];
  ratesDateUpdate: string;
  fromCurrency: string;
  toCurrency: string;
  handleSwap: () => void;
  isSwapping: boolean;
  onChangeFromCurrency: (valueCurrency: string) => void;
  onChangeToCurrency: (valueCurrency: string) => void;
  onChangeAmount: (amount: string) => void;
  amount: string;
  fromCurrencyData: Currency;
  toCurrencyData: Currency;
  convertedAmount: number;
  inverseRate: number;
  numericAmount: number;
  isLoadingRates: boolean;
}
