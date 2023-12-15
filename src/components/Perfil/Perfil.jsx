/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import style from './Perfil.module.css'
import { BsPersonCheckFill } from "react-icons/bs";
import { Link} from "react-router-dom";
import { useState } from 'react';
import { ImExit } from "react-icons/im";

function Perfil ({togglePerfil}) {

    return(
        <>
        <div className={style.SubMeuWrap}>
            <div className={style.Submenu}>
                <div className={style.Infor}>
                    <icon className={style.Icon}> <BsPersonCheckFill/> </icon>
                    <h2>Meu Perfil</h2>
                </div>
                <hr></hr>
                <div className={style.Link}>
                <ul>
                    <li><Link to="/curtidas">Meus Curtidos</Link></li>
                    <li><Link to="">Meus Pedidos</Link></li>
                    <li><Link to=""><ImExit/></Link></li>
                    <li><a onClick={togglePerfil}>Voltar</a></li>
                </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default Perfil