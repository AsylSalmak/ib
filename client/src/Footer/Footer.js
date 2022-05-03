import React from "react";
import { Container, Icon } from "semantic-ui-react";
import "../Footer/index.css";
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footerBox1">
          <div className="footerList">
            <div>
              <a href="">Контакт-Центр</a>
              <a href="">Карьера в банке</a>
              <a href="">Пресс-служба</a>
            </div>
            <div>
              <a href="">Залоговое имущество</a>
              <a href="">Тендерный комитет</a>
            </div>
            <div>
              <a href="">Комплаенс-контроль</a>
              <a href="">Обратная связь</a>
              <a href="">Сообщить об уязвимости в безопасности</a>
            </div>
          </div>
          <div className="footerBox1-Nav">
            <p>Мобильное приложение нашего Банка</p>
            <div className="footerBox1-Icon">
              <div className="Icon_App">
                <a href="">
                  <Icon name="app store" />
                  <p>App Store</p>
                </a>
              </div>
              <div className="Icon_Google">
                <a href="">
                  <Icon name="google play" />
                  <p>Google Play</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footerBox2">
          <div className="footerBox2-Content">
            <div className="footerBox2-txt">
              <p>
                Свяжитесь с нами <br /> <span> 2051</span> <br /> с мобильного
                бесплатно
              </p>
            </div>
            <div className="footerBox2-txt">
              <p>
                Свяжитесь с нами <br /> <span> +7 771 936 11 11</span> <br />
                WhatsApp канал
              </p>
            </div>
            <div className="footerBox2-List">
              <a href="">Отделения</a>
              <a href="">Банкоматы и терминалы</a>
              <a href="">Курс валют</a>
            </div>
          </div>
          <div className="footerBox2-Icon">
            <p>
              Банк в соц. сетях
            </p>
            <div>
              <a href="">
                <Icon name="instagram" />
              </a>
              <a href="">
                <Icon name="facebook" />
              </a>
              <a href="">
                <Icon name="youtube" />
              </a>
            </div>
          </div>
        </div>
        <p className="footer-txt">© 2001–2022, АО ДБ «Альфа-Банк», лицензия АРРФР № 1.2.61/237 от 03.02.2020. Мы используем cookie. Можете отменить их сохранение в настройках браузера.</p>
      </Container>
    </footer>
  );
};
export default Footer;
