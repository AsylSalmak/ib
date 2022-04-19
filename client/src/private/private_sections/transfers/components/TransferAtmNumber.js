import React from "react";
import { Input } from "semantic-ui-react";
import NumberFormat from "react-number-format";
const TransferAtmNumber = (props) => {
  return (
    <div className="TransferAtmNumber">
      <label>Телефон получателя</label>
      <NumberFormat
      style={{width:'100%'}}
        placeholder="+7 (7__) ___ __ __"
        customInput={Input}
        onValueChange={(val) => {
          props.setTransferTo(val.value);
        }}
        value={props.transferTo}
        format="+7 (7##) ### ## ##"
      />

    </div>
  );
};
export default TransferAtmNumber;
