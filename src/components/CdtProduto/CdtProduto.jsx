import Input from '../Input/Input';
import Select from '../Select/Select';
import styles from './CdtProduto.module.css';
import { FaCamera } from "react-icons/fa";
import { SlArrowLeft } from "react-icons/sl";
import { Link } from 'react-router-dom';
import Nav from '../NavBar/Nav';
import Footer from '../Footer/Footer';


function CdtProduto () {

    const Tamanhos = [{id: 1, tamanho: "PP"},
    {id: 1, tamanho: 35}]

    return (
    <>
        <Nav />
        <div className={styles.pag}> 
            <div className={styles.frase}><h1>O que você está anunciando?</h1></div>
            <div className={styles.container}>
        
                <div className={styles.formulario}>
                    <div className={styles.button}>
                        <span><Link to={"/Home"} className={styles.voltar}><SlArrowLeft /></Link></span>
                    </div>
        
                <form>
                    <div>
                        <Input label="Produto" type="text"/>
                        <Select label="Tamanho" options={Tamanhos}/>
                        <Input label="Descrição" type="text"/>
                        <Input label="Categoria" type=""/>
                        <Input label="Subcategoria" type=""/>
                    </div>
                    <div>
                        <Input label="Preço" type="number"/>
                        <label className={styles.imagens}>
                            <h1>Imagens</h1>
                            <p>Adicione até 3 imagens</p></label>
        
                        <input className={styles.image} type="file" id='inputArea' />
                    <div className={styles.inputArea} id='inputArea'>
                        <div className={styles.quad}><label htmlFor="inputArea"><FaCamera /></label></div>
                    </div>
                    </div>
                </form>
                </div>
            </div>
    </div>
    <Footer/>
    </>
    );
};

export default CdtProduto;