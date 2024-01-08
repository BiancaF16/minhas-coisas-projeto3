/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import style from "./Filtro.module.css";
import Nav from "../NavBarCliente/NavBarCliente";
import Anuncio from "../../assets/image/Anuncio.png";
import Produto from "../Produtos/Produtos";

function Filtro() {
  return (

    <div>
      <Nav />
      
      <div className={style.Anuncio}><img src={Anuncio} alt="imagem"></img></div>
      
      <div className={style.containerPage}>

        <div className={style.Container}>
          
          <h1>Filtro</h1>

        <div className={style.subtitulo}>
        <h2>Categoria</h2>
        </div>

          <div className={style.categorias}>
            <div className={style.opcoes}>
              <input type="radio" id="Infantil"></input>
              <label for="Infantil">Infantil</label>
            </div>
            <div className={style.opcoes}>
              <input type='radio' id='Masculino'></input>
              <label for='Masculino'>Masculino</label>
              </div>
            <div className={style.opcoes}>
              <input type='radio' id='Feminino'></input>
              <label for='Feminino'>Feminino</label>
            </div>
            <div className={style.opcoes}>
              <input type='radio' id='PlusSize'></input>
              <label for='PlusSize'>PlusSize</label>
            </div>
            <div className={style.opcoes}>
              <input type='radio' id='Vintage'></input>
              <label for='Vintage'>vintage</label>
            </div>
            <div className={style.opcoes}>
              <input type='radio' id='Lingerie'></input>
              <label for='Lingerie'>Lingerie</label>
            </div>
            <div className={style.opcoes}>
              <input type='radio' id='Esportivo'></input>
              <label for='Esportivo'>Esportivo</label>
            </div>
            <div className={style.opcoes}>
              <input type='radio' id='Jeans'></input>
              <label for='Jeans'>Jeans</label>
            </div>
            <div className={style.opcoes}>
              <input type='radio' id='Casual'></input>
              <label for='Casual'>Casual</label>
            </div>
          </div>

      <div className={style.Tamanhos}>
        <div className={style.subtitulo}>
          <h2>Tamanho</h2>
        </div>
          <div className={style.filtros}>
            <div className={style.opcoes}>
            <input type='radio' id='PP'></input>
            <label for='PP'>PP</label></div>
            <div className={style.opcoes}>
            <input type='radio' id='P'></input>
            <label for='P'>P</label></div>
            <div className={style.opcoes}>
            <input type='radio' id='M'></input>
            <label for='M'>M</label></div>
            <div className={style.opcoes}>
            <input type='radio' id='G'></input>
            <label for='G'>G</label></div>
            <div className={style.opcoes}>
            <input type='radio' id='GG'></input>
            <label for='G'>G</label></div>
        
          </div>
      </div>
    

    <div className={style.Preco}>
      <div className={style.subtitulo}>
        <h2>Preço</h2>
      </div>
        <div className={style.filtros}>
          <button>R$ 0 á 20</button>
          <button>R$ 20 á 50</button>
          <button>R$ 50 á 80</button>
          <button> + R$ 80</button>
        </div>
    </div>
    
      </div>
      <Produto/>
    </div>
  </div>

  );
}

export default Filtro;