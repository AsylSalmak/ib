import React, { useState } from "react";
import { Input, Button } from "semantic-ui-react";
import NumberFormat from "react-number-format";

const TransferCardForm = (props) => {
  const [name, setName] = useState("");
  const [surName, setSurname] = useState("");
  return (
    <div className="TransferCardForm">
      <label>Номер карты</label>
      <NumberFormat
        value={props.transferTo}
        style={{ width: "90%" }}
        customInput={Input}
        placeholder="**** **** **** ****"
        onValueChange={(val) => {
          props.setTransferTo(val.value);
        }}
        format="#### #### #### ####"
      />

      <div className="TransferCardFormInputBox">
        <label>Имя и Фамилия(на латинице)</label>
        <div className="TransferCardFormInput">
          <Input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Имя"
            style={{ width: "40%" }}
          />
          <Input
            value={surName}
            onChange={(e) => {
              setSurname(e.target.value);
            }}
            placeholder="Фамилия"
            style={{ width: "40%" }}
          />
          <Button disabled={!(name, surName)} color="blue">Далее</Button>
        </div>
      </div>
    </div>
  );
};
export default TransferCardForm;
