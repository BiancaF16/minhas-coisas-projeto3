/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Nav from "../NavBar/Nav";
import style from "./Curtidas.module.css";
import Curtido from "../../img/curtido.png";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoIosHeart } from "react-icons/io";

function Curtidas() {
  return (
    <>
      <Nav />
      <div className={style.Container}>
        <div>
          <div className={style.texts}>
            <h1>Itens</h1>
            <h1>Avaliar</h1>
          </div>
          <div className={style.estilo}>
            <div className={style.cards}>
              <img src={Curtido}></img>
              <h2>R$ 40,00</h2>
              <h1><IoBagHandleOutline/></h1>
              <h3><IoIosHeart/></h3>
            </div>

            <div className={style.cards}>
              <img src={Curtido}></img>
              <h2>R$ 40,00</h2>
              <h1><IoBagHandleOutline/></h1>
              <h3><IoIosHeart/></h3>
            </div>

            <div className={style.cards}>
              <img src={Curtido}></img>
              <h2>R$ 40,00</h2>
              <h1><IoBagHandleOutline/></h1>
              <h3><IoIosHeart/></h3>
            </div>

            <div className={style.cards}>
              <img src={Curtido}></img>
              <h2>R$ 40,00</h2>
              <h1><IoBagHandleOutline/></h1>
              <h3><IoIosHeart/></h3>
            </div>

            <div className={style.cards}>
              <img src={Curtido}></img>
              <h2>R$ 40,00</h2>
              <h1><IoBagHandleOutline/></h1>
              <h3><IoIosHeart/></h3>
            </div>

            <div className={style.cards}>
              <img src={Curtido}></img>
              <h2>R$ 40,00</h2>
              <h1><IoBagHandleOutline/></h1>
              <h3><IoIosHeart/></h3>
            </div>

            <div className={style.cards}>
              <img src={Curtido}></img>
              <h2>R$ 40,00</h2>
              <h1><IoBagHandleOutline/></h1>
              <h3><IoIosHeart/></h3>
            </div>

            <div className={style.cards}>
              <img src={Curtido}></img>
              <h2>R$ 40,00</h2>
              <h1><IoBagHandleOutline/></h1>
              <h3><IoIosHeart/></h3>
            </div>

            <div className={style.cards}>
              <img src={Curtido}></img>
              <h2>R$ 40,00</h2>
              <h1><IoBagHandleOutline/></h1>
              <h3><IoIosHeart/></h3>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Curtidas;