import React from "react";
import "../components/Payments.css";

const Services = (props) => {

  return   props.services.map((service) => (
    <div
      key={service.id}
      className={service.id === props.serviceId ? 'activeService' : "PaymentBox"}
      onClick={() => {
        props.setServiceId(service.id);
      }}
    >
      <h5>{service.name}</h5>
    </div>
  ));
};
export default Services;
