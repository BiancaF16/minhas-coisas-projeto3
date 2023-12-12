/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import style from "./Class.module.css";
import Regata from '../../assets/image/regata.jpg'
import { IoMdStar } from "react-icons/io"; //estrela preenchida
import { IoIosStarOutline } from "react-icons/io"; //estrela 
import react, { useState } from "react";
import { IoClose } from "react-icons/io5"; //X
import { IoTrashBin } from "react-icons/io5"; //lixeira
import { HiOutlinePencilAlt } from "react-icons/hi"; //editar
import { RiSendPlaneFill } from "react-icons/ri"; //enviar
import { TextArea } from "../TextArea/TextArea";

function NovoComentario(){
  const [avaliacaoVisivel, setAvaliacaoVisivel] = useState(false);

  const [selectedStar, setSelectedStar] = useState(0);

  const handleClickStar = (starValue) => {
    // Se a estrela clicada for a mesma que já está selecionada, desselecione-a
    if (selectedStar === starValue) {
      setSelectedStar(0);
    } else {
      setSelectedStar(starValue);
    }
  };

  const renderSelectedStar = (starValue) => {
    return selectedStar >= starValue ? <IoMdStar /> : <IoIosStarOutline />;
  };

  return (
    <>
      <div className={style.Container}>

        <div className={style.titulo}>
          <h1>Comentários</h1>
        </div>

        <div className={style.avaliacoes}>

          <div className={style.comentario}>

            <img className={style.produto} src={Regata}></img>

            <div className={style.avaliar}>

               <div className={style.estrelaPront}>
                 <h4>{<IoMdStar/>}</h4>
                 <h4>{<IoMdStar/>}</h4>
                 <h4>{<IoMdStar/>}</h4>
                 <h4>{<IoMdStar/>}</h4>
                 <h4>{<IoMdStar/>}</h4>
               </div>

              <div>
              <TextArea value="Anonimo: Adorei " className={style.textArea} />
              </div>

            </div>

            

          </div>

          { avaliacaoVisivel && 
          <>
            <div className={style.comente}>
              <img className={style.imgComent} src={Regata}></img>
              <div className={style.starComent}>
                <div className={style.estrela}>
                  {[1, 2, 3, 4, 5].map((starValue) => (
                    <div key={starValue} onClick={() => handleClickStar(starValue)}>
                      {renderSelectedStar(starValue)}
                    </div>
                  ))}
                </div>
                  <div className={style.icones}>
                    <icon className={style.Editar}><HiOutlinePencilAlt/></icon>
                    <icon className={style.Lixeira}><IoTrashBin/></icon>
                    <icon className={style.Enviar}><RiSendPlaneFill/></icon>
                    <icon onClick={()=> setAvaliacaoVisivel(false)}className={style.fechar}><IoClose/></icon>
                  </div>
                
  
                <div className={style.comentario}>
                  <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
              </div>

            </div>
          </> }

        </div>
              <div className={style.enviarResp}>
                <button className={style.bntAvaliar} onClick={()=> setAvaliacaoVisivel(true)}>Avaliar</button>
              </div>
      </div>
    </>
  );
}


export default NovoComentario;