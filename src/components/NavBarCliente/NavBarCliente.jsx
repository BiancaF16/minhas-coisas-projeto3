/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import style from "./Nav.module.css";
import logo from "../../assets/image/logo.png";
import { FaSearch } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";
import { IoBagHandle } from "react-icons/io5";
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Carrinho from "../Carrinho/Carrinho";
import { BrowserRouter,Router,Route, useHistory } from "react-router-dom";
import { BsPersonCheckFill } from "react-icons/bs";
import Perfil from "../Perfil/Perfil";

function Nav(props) {
  //barra de pesquisa
  const location = useLocation();
  const [componenteVisivel, setComponenteVisivel] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const navigate = useNavigate();

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      setComponenteVisivel(true);
    }
  };

  const handleInnerKeyPress = (event) => {
    if (event.key === 'Enter') {
      navigate('/filtro')
    }
  };

  useEffect(() => {
    // Verifique se a localização atual é "/filtro"
    if (location.pathname === '/filtro') {
      setComponenteVisivel(true);
    } else {
      setComponenteVisivel(false);
    }
  }, [location.pathname]);

  const toggleSearchField = () => {
    setComponenteVisivel(!componenteVisivel);
  };

  //opções
  const [opçoes, setOpçoes] = useState(false);

  const toggleOptions = () => {
    setOpçoes(!opçoes);
  };

  const [abrir, setAbrir] = useState (false);

  const toggleAbrir = () => {
    setAbrir(!abrir);
  }

  const [perfil, setPerfil] = useState (false);

  const togglePerfil = () => {
    setPerfil(!perfil);
    setOpçoes(!opçoes)
  }


  return (
    <header className={style.header}>
      <div className={style.navBar}>
        <div className={style.logo}>
          <Link to={"/Home"}><img src={logo}></img></Link>
        </div>
        <div className={style.navList}>
          <ul>
            {componenteVisivel && (
              
              <div className={style.inputPesquisa}>
                 <Link to={"/"}><input 
                type="text"
                placeholder="Pesquisar produto"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleInnerKeyPress} /></Link>
              </div>
            )}

            {opçoes && (
              <div className={style.dropdown}>
                <div className={style.active}>
                  <ul>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/cadastro">Cadastro </Link></li>
                    <li><a onClick={togglePerfil}>Perfil</a></li>
                  </ul>
                </div>
              </div>
            )}

            {perfil && (
              <Perfil togglePerfil={togglePerfil} />
            )}
            

            <li className={style.item}>
              <a href="#" onClick={toggleSearchField}>
                <FaSearch />
              </a>
            </li>
            <li className={style.item}>
              <a href="#" onClick={toggleOptions}>
                <IoPersonCircleSharp />
              </a>
            </li>
            <li className={style.item}>
              <a href="#" onClick={toggleAbrir}>
                <IoBagHandle/></a>
              </li>
          </ul>
        </div>
      </div>
      <Carrinho abrir={abrir} setAbrir={setAbrir}/>
    </header>
  );
}

export default Nav;