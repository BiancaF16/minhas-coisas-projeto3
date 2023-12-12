import style from "./Nav.module.css"
import { Link } from 'react-router-dom';
import logo from '../../assets/image/logo.png';
import { FaSearch } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5"
import { FaHeart } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";

function Nav(props) {

  return (
    <header className={style.header}> 
      <div className={style.navBar}>
        <div className={style.logo}>
          <img src={logo}></img>
        </div>
        <div className={style.navList}>
          <ul>
            <li className={style.item}><Link to={"/Pesquisar"}><a href="#"><FaSearch/></a></Link></li>
            <li className={style.item}><a href="#"><IoPersonCircleSharp /></a></li>
            <li className={style.item}><Link to={"/cadastroDeProduto"}><a><FaHeart/></a></Link></li>
            <li className={style.item} onClick={() => props.setAbrir(true)}><a href="#"><IoBagHandle/></a></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Nav


