/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useState } from "react";
import Nav from "../NavBarCliente/NavBarCliente";
import style from "./Curtidas.module.css";
import Regatac from "../../assets/image/regata.jpg";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io"; //coração
import { IoMdHeart } from "react-icons/io"; //coração preenchido
import Footer from "../Footer/Footer";

function Curtidas() {

  const [selectedIcon, setSelectedIcon] = useState("heart");

  const handleClick = () => {
    // Lógica para alternar entre ícones
    if (selectedIcon === "heart") {
      setSelectedIcon("mdheart");
    } else if (selectedIcon === "mdheart") {
      setSelectedIcon("thumbs-up");
    } else {
      setSelectedIcon("heart");
    }
  };

  // Mapeia o ícone selecionado para o componente correspondente
  const renderSelectedIcon = () => {
    switch (selectedIcon) {
      case "heart":
        return <IoMdHeart />;
      case "mdheart":
        return <IoMdHeartEmpty />;
      case "thumbs-up":
        return <IoMdHeartEmpty />;
      default:
        return null;
    }
  };

  return (
    <>
      <Nav />
      <div className={style.Container}>
        <div>
          <div className={style.texts}>
            <h1>Itens</h1>
          </div>
          <div className={style.estilo}>
            <div className={style.cards}>
              <img src={Regatac}></img>
              <h2>R$ 40,00</h2>
              <h1><IoBagHandleOutline/></h1>
              <h3 onClick={handleClick}> {renderSelectedIcon()}</h3>
            </div>

            <div className={style.cards}>
              <img src={Regatac}></img>
              <h2>R$ 40,00</h2>
              <h1><IoBagHandleOutline/></h1>
              <h3 onClick={handleClick}> {renderSelectedIcon()}</h3>
            </div>

            <div className={style.cards}>
              <img src={Regatac}></img>
              <h2>R$ 40,00</h2>
              <h1><IoBagHandleOutline/></h1>
              <h3 onClick={handleClick}> {renderSelectedIcon()}</h3>
            </div>

            <div className={style.cards}>
              <img src={Regatac}></img>
              <h2>R$ 40,00</h2>
              <h1><IoBagHandleOutline/></h1>
              <h3 onClick={handleClick}> {renderSelectedIcon()}</h3>
            </div>

            <div className={style.cards}>
              <img src={Regatac}></img>
              <h2>R$ 40,00</h2>
              <h1><IoBagHandleOutline/></h1>
              <h3 onClick={handleClick}> {renderSelectedIcon()}</h3>
            </div>

            <div className={style.cards}>
              <img src={Regatac}></img>
              <h2>R$ 40,00</h2>
              <h1><IoBagHandleOutline/></h1>
              <h3 onClick={handleClick}> {renderSelectedIcon()}</h3>
            </div>

            <div className={style.cards}>
              <img src={Regatac}></img>
              <h2>R$ 40,00</h2>
              <h1><IoBagHandleOutline/></h1>
              <h3 onClick={handleClick}> {renderSelectedIcon()}</h3>
            </div>

            <div className={style.cards}>
              <img src={Regatac}></img>
              <h2>R$ 40,00</h2>
              <h1><IoBagHandleOutline/></h1>
              <h3 onClick={handleClick}> {renderSelectedIcon()}</h3>
            </div>

            <div className={style.cards}>
              <img src={Regatac}></img>
              <h2>R$ 40,00</h2>
              <h1><IoBagHandleOutline/></h1>
              <h3 onClick={handleClick}> {renderSelectedIcon()}</h3>
            </div>
            
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Curtidas;