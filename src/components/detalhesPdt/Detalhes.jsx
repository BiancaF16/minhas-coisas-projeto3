import style from "./Detalhes.module.css";
import NovoComentario from "../Classificação/Class";
import react, { useState } from "react";
import Anuncio from "../../assets/image/Anuncio.png"
import Regata from '../../assets/image/regata.jpg' 
import Nav from "../NavBarCliente/NavBarCliente";
import Footer from "../Footer/Footer";
import { IoMdStar } from "react-icons/io"; //estrela preenchida
import { IoMdHeartEmpty } from "react-icons/io"; //coração
import { IoMdHeart } from "react-icons/io"; //coração preenchido

function Detalhes() {
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
        return <IoMdHeartEmpty />;
      case "mdheart":
        return <IoMdHeart />;
      case "thumbs-up":
        return <IoMdHeart />;
      default:
        return null;
    }
  };


  return (
    <>
      <Nav />
      <div className={style.Anuncio}><img src={Anuncio}></img></div>
      <div className={style.Container}>
        <div className={style.modal}>
          <div className={style.Fundo}>
            <div className={style.Detalhe1}>
              <img src={Regata} className={style.img1} />
              <div className={style.teste}>
                <img src={Regata} className={style.img2} />
                <img src={Regata} className={style.img3} />
              </div>
            </div>
            <div className={style.Detalhe2}>
              <div className={style.Texts}>
                <h1>3 Blusas</h1>
                <span className={style.tags}>
                  <button>Tags</button>
                  <button>Tags</button>
                </span>
                <h2>R$ 55,99</h2>
                <h3>
                  Detalhes: Tamanho único
                </h3>
                <div className={style.icon}>
                  <IoMdStar/>
                  <IoMdStar/>
                  <IoMdStar/>
                  <IoMdStar/>
                  <IoMdStar/>
                  {/* {[1, 2, 3, 4, 5].map((starValue) => (
                    <div
                      key={starValue}
                      onClick={() => handleClickStar(starValue)}
                    >
                      {renderSelectedStar(starValue)}
                    </div>
                  ))} */}
                </div>
                <div className={style.botoes}>
                  <button className={style.addCarrinho}>Adicionar ao Carrinho</button>
                  <div className={style.coracao} onClick={handleClick}>
                    {renderSelectedIcon()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NovoComentario/>
      <Footer />
    </>
  );
}

export default Detalhes;