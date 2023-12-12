import style from './Footer.module.css';
import logo from "../../assets/image/logo.png"
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";


function Footer() {
    return(
        <div className={style.footer}>
        <div className={style.container}>
            <div className={style.list}>
                
                    <h3>Redes Sociais</h3>
                    <div className={style.redesSociais}>
                        <a className={style.link} href='https://web.whatsapp.com/' target="blank" ><FaWhatsapp size={30} className={style.whatspp} /></a>
                        <a className={style.link} href='https://www.instagram.com/' target="blank" ><FaInstagram size={30} className={style.isntagram}/></a>                    
                        
                        <a className={style.link} href='https://twitter.com/login?lang=pt' target="blank" ><FaTwitter size={30} className={style.isntagram}/></a>
                    </div>

            </div>

            <ul className={style.list}>
                <li>
                    <h3>Suporte</h3>
                </li>
                <li>
                    <a href="#" className={style.link} >Devolução</a>
                </li>
                <li>
                    <a href="#" className={style.link} >Como pedir</a>
                </li>
                <li>
                    <a href="#" className={style.link} >Guia de tamanhos</a>
                </li>
                <li>
                    <a href="#" className={style.link} >Política de frete</a>
                </li>
            </ul>

            <ul className={style.list}>
                <li>
                    <h3>Informações</h3>
                </li>
                <li>
                    <a href="#" className={style.link} >Sobre Closet Virtual</a>
                </li>
                <li>
                    <a href="#" className={style.link} >Locais</a>
                </li>
                <li>
                    <a href="#" className={style.link} >Social</a>
                </li>
                <li>    
                    <a href="#" className={style.link} >Carreiras</a>
                    </li>
                </ul>

            <div className={style.subscribe}>
                <h3>Contate-nos</h3>
                <p>
                    Mande seu e-mail para ver as novidades
                </p>
                <div className={style.inputGroup}>
                    <input type="email" id="email"></input>
                    <button>
                        <FaEnvelope/>
                    </button>
                </div>
                <p>SAC : (85) 93089 - 5634</p>
            </div>
        </div>

        <div className={style.copyright}>
            &copy;
            2023 all rights reserved
        </div>
        </div>
    )
}

export default Footer