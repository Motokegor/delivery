import React from "react";
import "./Header.scss";
import myImage from "../img/Calling.png";

export default function Header() {
  return (
    <header>
      <a href="">LOGOS</a>
      <input type="text" placeholder="Введите адрес доставки" />

      <div className="contact">
        <div className="img-tel">
          <img src={myImage} alt="" />
        </div>
        <div>
          <p className="text">Контакты: </p>
          <p className="tel">+7 (917) 510-57-59</p>
        </div>
      </div>
      <button>Корзина</button>
    </header>
  );
}
