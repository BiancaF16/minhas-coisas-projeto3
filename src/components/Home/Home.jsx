import React, {useState} from "react";
import style from "./Home.module.css";
import Nav from "../NavBar/Nav";
import slogan from "../../assets/image/slogan.jpg"
import Footer from "../Footer/Footer";
import Slide from "../Slide/Slide";
import Carrinho from "../Carrinho/Carrinho";


const Home = () => {

  const [abrir, setAbrir] = useState (false);

  return (
    <div className={style.body}>
    <Nav setAbrir={setAbrir}/>
      <div className={style.marketing}>
          <img src={slogan}/>
      </div>
    <Slide/> 
    <Footer/>
    <Carrinho abrir={abrir} setAbrir={setAbrir}/>
    </div>
  )
}

export default Home