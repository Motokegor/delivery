import React from "react";
import "./Main.scss";
import chickenImg from "../img/chicken.png";
import ColdSnacks from "../Components/ColdSnacks/ColdSnacks.jsx"

export default function Main() {
  return (
    <div>
        <main>
      <div className="img-chicken">
        <div className="title">
          <p className="top">ДОСТАВКА ВКУСНЕЙШИХ БЛЮД ЗА 60 МИНУТ</p>
          <button>
            <a href="">ЕЩЁ НЕ ПРОБОВАЛ?</a>
          </button>
        </div>
      </div>
      <div className="navigation">
        <a href="">Холодные закуски</a>
        <a href="">Горячие закуски</a>
        <a href="">Мясные блюда</a>
        <a href="">Супы</a>
        <a href="">Рыбные блюда</a>
        <a href="">Гриль меню</a>
        <a href="">Фирменные блюда</a>
        <a href="">Напитки</a>
      </div>
      <hr/>
    </main>
    <ColdSnacks/>
    </div>
  );
}
