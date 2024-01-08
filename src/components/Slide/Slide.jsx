import { Link } from 'react-router-dom';
import style from "./Slide.module.css"
import Regata from '../../assets/image/regata.jpg';
import baixe from '../../assets/image/baixa.png';
import Botao from "../botao/Botao";


function Slide () {
  return (
    <div className={style.catalogo}>

        <div className={style.categorias}>
 
            <button className={style.um}>Blusas</button>
            <button className={style.dois}>Calças</button>
            <button className={style.tres}>Calçados</button>
            <button className={style.quatro}>Infantil</button>
            <button className={style.cinco}>Vestidos</button>
            <button className={style.seis}>Jeans</button>
            <button className={style.sete}>Plus Size</button>
        </div>

        <div className={style.container}>

              
              <div className={style.cards}>
                <div className={style.divImage} ><Link to={"/Detalhes"}><img className={style.imagem} src={Regata} alt="imagem"/></Link></div>
                <div className={style.divTexto}>
                <h1 className={style.h1}>Cropped Vintage</h1>
                <h2 className={style.h2}>R$ 40,00</h2>
                <Link to={"/carrinho"} className={style.linkButton}>
                  <Botao className={style.botao} label="Adicionar carrinho"/>
                </Link>
                </div>
              </div>

              <div className={style.cards}>
                <div className={style.divImage} ><Link to={"/Detalhes"}><img className={style.imagem} src={Regata} alt="imagem"/></Link></div>
                <div className={style.divTexto}>
                <h1 className={style.h1}>Cropped Vintage</h1>
                <h2 className={style.h2}>R$ 40,00</h2>
                <Link to={"/carrinho"} className={style.linkButton}>
                  <Botao className={style.botao} label="Adicionar carrinho"/>
                </Link>
                </div>
              </div>

              <div className={style.cards}>
                <div className={style.divImage} ><Link to={"/Detalhes"}><img className={style.imagem} src={Regata} alt="imagem"/></Link></div>
                <div className={style.divTexto}>
                <h1 className={style.h1}>Cropped Vintage</h1>
                <h2 className={style.h2}>R$ 40,00</h2>
                <Link to={"/carrinho"} className={style.linkButton}>
                  <Botao className={style.botao} label="Adicionar carrinho"/>
                </Link>
                </div>
              </div>

              <div className={style.cards}>
                <div className={style.divImage} ><Link to={"/Detalhes"}><img className={style.imagem} src={Regata} alt="imagem"/></Link></div>
                <div className={style.divTexto}>
                <h1 className={style.h1}>Cropped Vintage</h1>
                <h2 className={style.h2}>R$ 40,00</h2>
                <Link to={"/carrinho"} className={style.linkButton}>
                  <Botao className={style.botao} label="Adicionar carrinho"/>
                </Link>
                </div>
              </div>

              <div className={style.cards}>
                <div className={style.divImage} ><Link to={"/Detalhes"}><img className={style.imagem} src={Regata} alt="imagem"/></Link></div>
                <div className={style.divTexto}>
                <h1 className={style.h1}>Cropped Vintage</h1>
                <h2 className={style.h2}>R$ 40,00</h2>
                <Link to={"/carrinho"} className={style.linkButton}>
                  <Botao className={style.botao} label="Adicionar carrinho"/>
                </Link>
                </div>
              </div>

              <div className={style.cards}>
                <div className={style.divImage} ><Link to={"/Detalhes"}><img className={style.imagem} src={Regata} alt="imagem"/></Link></div>
                <div className={style.divTexto}>
                <h1 className={style.h1}>Cropped Vintage</h1>
                <h2 className={style.h2}>R$ 40,00</h2>
                <Link to={"/carrinho"} className={style.linkButton}>
                  <Botao className={style.botao} label="Adicionar carrinho"/>
                </Link>
                </div>
              </div>

              <div className={style.cards}>
                <div className={style.divImage} ><Link to={"/Detalhes"}><img className={style.imagem} src={Regata} alt="imagem"/></Link></div>
                <div className={style.divTexto}>
                <h1 className={style.h1}>Cropped Vintage</h1>
                <h2 className={style.h2}>R$ 40,00</h2>
                <Link to={"/carrinho"} className={style.linkButton}>
                  <Botao className={style.botao} label="Adicionar carrinho"/>
                </Link>
                </div>
              </div>

              <div className={style.cards}>
                <div className={style.divImage} ><Link to={"/Detalhes"}><img className={style.imagem} src={Regata} alt="imagem"/></Link></div>
                <div className={style.divTexto}>
                <h1 className={style.h1}>Cropped Vintage</h1>
                <h2 className={style.h2}>R$ 40,00</h2>
                <Link to={"/carrinho"} className={style.linkButton}>
                  <Botao className={style.botao} label="Adicionar carrinho"/>
                </Link>
                </div>
              </div>

              <div className={style.cards}>
                <div className={style.divImage} ><Link to={"/Detalhes"}><img className={style.imagem} src={Regata} alt="imagem"/></Link></div>
                <div className={style.divTexto}>
                <h1 className={style.h1}>Cropped Vintage</h1>
                <h2 className={style.h2}>R$ 40,00</h2>
                <Link to={"/carrinho"} className={style.linkButton}>
                  <Botao className={style.botao} label="Adicionar carrinho"/>
                </Link>
                </div>
              </div>

              <div className={style.cards}>
                <div className={style.divImage} ><Link to={"/Detalhes"}><img className={style.imagem} src={Regata} alt="imagem"/></Link></div>
                <div className={style.divTexto}>
                <h1 className={style.h1}>Cropped Vintage</h1>
                <h2 className={style.h2}>R$ 40,00</h2>
                <Link to={"/carrinho"} className={style.linkButton}>
                  <Botao className={style.botao} label="Adicionar carrinho"/>
                </Link>
                </div>
              </div>

              <div className={style.cards}>
                <div className={style.divImage} ><Link to={"/Detalhes"}><img className={style.imagem} src={Regata} alt="imagem"/></Link></div>
                <div className={style.divTexto}>
                <h1 className={style.h1}>Cropped Vintage</h1>
                <h2 className={style.h2}>R$ 40,00</h2>
                <Link to={"/carrinho"} className={style.linkButton}>
                  <Botao className={style.botao} label="Adicionar carrinho"/>
                </Link>
                </div>
              </div>

              <div className={style.cards}>
                <div className={style.divImage} ><Link to={"/Detalhes"}><img className={style.imagem} src={Regata} alt="imagem"/></Link></div>
                <div className={style.divTexto}>
                <h1 className={style.h1}>Cropped Vintage</h1>
                <h2 className={style.h2}>R$ 40,00</h2>
                <Link to={"/carrinho"} className={style.linkButton}>
                  <Botao className={style.botao} label="Adicionar carrinho"/>
                </Link>
                </div>
              </div>

        </div>


        <div className={style.anuncio}>
          <div className={style.baixe}>
          <img src={baixe} alt="imagem"></img>
          </div>
        </div>
    </div>
  )
}

export default Slide;