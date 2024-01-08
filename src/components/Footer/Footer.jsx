import style from './Footer.module.css';
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";


function Footer() {
    return(
        <>
            <div className={style.container}>
                <div className={style.redesSociais}>
                <a className={style.link} href='https://web.whatsapp.com/' target="blank" ><FaWhatsapp size={30} className={style.whatspp} /></a>
                <a className={style.link} href='https://www.instagram.com/' target="blank" ><FaInstagram size={30} className={style.isntagram}/></a>
                <a className={style.link} href='https://twitter.com/login?lang=pt' target="blank" ><FaTwitter size={30} className={style.isntagram}/></a>
                </div>
                <div className={style.Suporte}>
                    <h3>Suporte</h3>
                    <ul>
                        <li>Ajuda</li>
                        <li>Avisos</li>
                        <li>Contato</li>
                    </ul>
                </div>
                <div className={style.Empresa}>
                    <h3>Empresa</h3>
                    <ul>
                        <li>Sobre nós</li>
                        <li>Filiais</li>
                        <li>Modelos</li>
                    </ul>
                </div>
                <div className={style.termos}>
                    <h3>Termos</h3>
                    <ul>
                        <li>Termos de uso</li>
                        <li>Código de conduta</li>
                        <li>Privacidade</li>
                    </ul>
                </div>
                <div className={style.email}>
                <input type="email" id="email"></input>
                    <button>
                            <FaEnvelope/>
                    </button>
                    <p>SAC : (85) 93089 - 5634</p>
                </div>
            </div>
        </>
        
    )
}

export default Footer