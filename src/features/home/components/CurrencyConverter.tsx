import { ToastContainer } from "react-toastify";
import type { CurrencyConverterProps } from "../../../types";
import { SelectCurrency } from "../../../components";
import { ArrowUpdate } from "../../../components/svg";
import { memo } from "react";

const CurrencyConverter = ({
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
}: CurrencyConverterProps) => {
  return (
    <div className="flex-1 bg-white">
      <header className="bg-header py-4 px-6 flex">
        <h1 className="text-white font-semibold text-lg">Currency Converter</h1>
      </header>

      <section className="bg-hero py-16 pb-28 px-4">
        <h2
          className="text-center
         text-white
          text-xl 
          md:text-3xl 
         font-semibold animate-fade-in"
        >
          {numericAmount} {fromCurrency} to {toCurrency} - Convert
          {fromCurrencyData?.name} to {toCurrencyData?.name}
        </h2>
      </section>

      <div className="flex justify-center px-4 -mt-20 relative z-10">
        <div className="w-full max-w-6xl bg-white rounded-xl shadow-2xl p-6 md:p-8 border border-border">
          <div className="grid grid-cols-1 md:grid-cols-[1fr,1fr,auto,1fr] gap-4 items-end">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-500">
                Amount
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                  $
                </span>
                <input
                  type="text"
                  inputMode="decimal"
                  value={amount}
                  onChange={(e) => onChangeAmount(e.target.value)}
                  className="w-full h-12 pl-8 pr-3 text-lg
                   rounded-md border border-input bg-white
                    focus:outline-none focus:principalColor-2 
                    focus:principalColor-primary/50"
                  min="0"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-500">From</label>
              <SelectCurrency
                listToMap={listCurrencies}
                valueSelected={fromCurrency}
                onChangeSelected={onChangeFromCurrency}
              />
            </div>

            <div className="flex justify-center pb-1">
              <button
                onClick={handleSwap}
                className={`
                  w-10 h-10 rounded-full border border-primary/30
                  flex items-center justify-center transition-transform duration-1
                  hover:bg-primary/20 hover:text-white
                  ${isSwapping ? "rotate-[360deg]" : "rotate-0"}
                `}
              >
                <ArrowUpdate />
              </button>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-500">To</label>
              <SelectCurrency
                listToMap={listCurrencies}
                valueSelected={toCurrency}
                onChangeSelected={onChangeToCurrency}
              />
            </div>
          </div>

          <div className="mt-8 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <p className="text-2xl md:text-3xl font-bold text-black">
                {numericAmount.toFixed(2)} {fromCurrencyData?.name} =
              </p>

              {isLoadingRates ? (
                <div
                  className="animate-fade-in"
                  style={{ animationDelay: "0.2s" }}
                >
                  <div className="flex items-baseline gap-2">
                    <div className="h-8 w-32 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-8 w-48 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </div>
              ) : (
                <p className="text-2xl md:text-3xl font-bold text-black">
                  {convertedAmount.toFixed(6)} {toCurrencyData?.name}
                </p>
              )}
              <p className="text-sm text-gray-500 mt-2">
                1 {toCurrency} = {inverseRate.toFixed(6)} {fromCurrency}
              </p>
            </div>

            <div className="bg-info rounded-lg p-4 max-w-lg ">
              <p className="text-sm text-black p-2">
                We use mid-markert rate for our Converter. This is for
                informational purposes only. You won't receive this rate when
                sending money.
              </p>
            </div>
          </div>

          <div className="mt-8  animate-fade-in flex justify-end">
            <p className="text-sm text-gray-500">
              <span className="text-link underline cursor-pointer hover:text-principalColor transition-colors">
                {fromCurrencyData?.name}
              </span>{" "}
              to{" "}
              <span className="text-link underline cursor-pointer hover:text-principalColor transition-colors">
                {toCurrencyData?.name}
              </span>{" "}
              conversion — Last updated {ratesDateUpdate}
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 bg-white" />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default memo(CurrencyConverter);
