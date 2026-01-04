import type { Currency } from "../types";

interface SelectCurrencyProps {
  listToMap: Currency[];
  valueSelected: string;
  onChangeSelected: (value: string) => void;
}

const SelectCurrency = ({
  listToMap,
  valueSelected,
  onChangeSelected,
}: SelectCurrencyProps) => {
  return (
    <select
      value={valueSelected}
      onChange={(e) => onChangeSelected(e.target.value)}
      className="w-full h-12 px-3 rounded-md border border-input bg-white text-black focus:outline-none focus:principalColor-2 focus:principalColor-primary/50 cursor-pointer"
    >
      {listToMap.map((currency) => (
        <option key={currency.symbol} value={currency.symbol}>
          {currency.symbol} - {currency.name}
        </option>
      ))}
    </select>
  );
};

export default SelectCurrency;
