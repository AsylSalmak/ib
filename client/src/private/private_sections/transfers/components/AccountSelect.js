import React, { useEffect } from "react";
import { hideLetters } from "../../../../helpers/hideLetters";
import "../components/Transfers.css";
import { formatToCurrencyNumber } from "../../../../helpers/numbers";

const AccountSelect = ({
  options,
  selectedAccount,
  setSelectedAccount,
  label,
}) => {
  useEffect(() => {
    if (options.length) {
      setSelectedAccount(options[0].id);
    }
  }, [options.length]);

  return (
    <div className="Cardform">
      <label>{label}</label>
      <select
        onChange={(e) => {
          setSelectedAccount(e.target.value);
        }}
        value={selectedAccount}
        className="CardformSelect"
      >
        {options.map((el) => (
          <option key={el.id} value={el.id}>
            {el.alias} {"  "}
            {hideLetters(el.account)}
            {"   Balance: "}
            {formatToCurrencyNumber(el.balance)} {el.currencyCode}
          </option>
        ))}
      </select>
    </div>
  );
};
export default AccountSelect;
