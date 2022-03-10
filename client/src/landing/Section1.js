import React from "react";
import { Button, Container } from "semantic-ui-react";
const Section1 = () => {
  return (
    <section className="section1">
      <Container>
        <h3>А ЭТО ТОЧНО МОЙ РАЗМЕР?<br/>ОБРАТНАЯ ДОСТАВКА ЗА НАШ<br/> СЧЕТ*</h3>
        <p>
          Если вы передумали и хотите вернуть свой заказ или попробовать товар в <br/>
          другом цвете или размере, просто отправьте его обратно — мы поможем<br/>
          вам вернуть расходы на обратную доставку*.
        </p>

        <Button content="Activate The Service" color="blue"/>
      </Container>
    </section>
  );
};
export default Section1;
