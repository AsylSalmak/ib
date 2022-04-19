import React from "react";
import NumberFormat from "react-number-format";
import "../components/Transfers.css";

const CardOfAnyBank = (props) => {
  return (
    <div className="CardOfAnyBank">
      <label>Введите номер карты</label>
      <NumberFormat
        value={props.transferTo}
        style={{ width: "100%" }}
        placeholder="**** **** **** ****"
        className="CardOfAnyBankInput"
        onValueChange={(val) => {
          props.setTransferTo(val.value);
        }}
        format="#### #### #### ####"
      />
    </div>
  );
};
export default CardOfAnyBank;
