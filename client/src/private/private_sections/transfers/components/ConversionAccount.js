import React from "react";
import { Input } from "semantic-ui-react";

const ConversionAccount = () => {
  return (
    <div className="ConversionAccount">
      <div className="ConversionAccountBox">
        <div>
          <label>Со счета</label>
        </div>
    
        <div>
          <label>Сумма списания</label>
          <Input style={{ width: "100%" }} />
        </div>
      </div>
      <div className="ConversionAccountBox">
          <div>
        <label>На счет</label></div>
     
        <div>
        <label>Сумма к зачислению</label>
        <Input style={{ width: "100%" }} /></div>
      </div>
    </div>
  );
};
export default ConversionAccount;
