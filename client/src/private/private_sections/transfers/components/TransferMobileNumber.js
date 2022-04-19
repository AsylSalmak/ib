import React, { useState } from "react";
import NumberFormat from "react-number-format";
import { Input, Button } from "semantic-ui-react";
const TransferMobileNumber = (props) => {
  const [message, setMessage] = useState("");
  return (
    <div className="TransferMobileNumber">
      <label>Телефон получателя</label>
      <NumberFormat
        style={{ width: "100%" }}
        placeholder="+7 (7__) ___ __ __"
        customInput={Input}
        onValueChange={(val) => {
          props.setTransferTo(val.value);
        }}
        value={props.transferTo}
        format="+7 (7##) ### ## ##"
      />
      <label>Сообщение</label>
      <Input
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        value={message}
        style={{ width: "100%" }}
      />
      <div className="TransferMobileNumberButtonBox">
        <Button
          onClick={() => {
            setMessage("Рахмет");
          }}
          content="Рахмет"
          style={{ width: "30%" }}
        />
        <Button
          onClick={() => {
            setMessage("За обед");
          }}
          content="За обед"
          style={{ width: "30%" }}
        />
        <Button
          onClick={() => {
            setMessage("Возвращаю");
          }}
          content="Возвращаю"
          style={{ width: "30%" }}
        />
      </div>
    </div>
  );
};
export default TransferMobileNumber;
