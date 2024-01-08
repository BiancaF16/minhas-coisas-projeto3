import React, {useState} from 'react';
import Input from '../Input/Input';
import Select from '../Select/Select';
import styles from './CdtProduto.module.css';
import { FaCamera } from "react-icons/fa";
import { SlArrowLeft } from "react-icons/sl";
import { Link } from 'react-router-dom';
import Nav from '../NavBarCliente/NavBarCliente';
import Footer from '../Footer/Footer';
import Botao from "../botao/Botao";
import cdtProduto from '../../services/cdtProduto';

function CdtProduto () {


    const [name, setName] = useState('')
    const [size, setSize] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [subcategory, setSubcategory] = useState('')
    const [price, setPrice] = useState('')
    const [images, setImages] = useState('')

    const create = async () =>{   
        await cdtProduto(name, size, description, category, subcategory, price, images)
   }

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

                        <Input 
                        label="Produto" 
                        type="text"
                        OnChange={(e) =>{setName(e.target.value)}}
                        />

                        <Select 
                        label="Tamanho" 
                        options={size}
                        OnChange={(e) =>{setSize(e.target.value)}}
                        />

                        <Input 
                        label="Descrição" 
                        type="text"
                        OnChange={(e) =>{setDescription(e.target.value)}}
                        />

                        <Select 
                        label="Categoria" 
                        options={category}
                        OnChange={(e) =>{setCategory(e.target.value)}}
                        />                        


                        <Select 
                        label="Subcategoria" 
                        options={subcategory}
                        OnChange={(e) =>{setSubcategory(e.target.value)}}
                        />

                    </div>

                    <div>

                        <Input 
                        label="Preço" 
                        type="number"
                        OnChange={(e) =>{setPrice(e.target.value)}}
                        />

                        <label 
                        className={styles.imagens}
                        OnChange={(e) =>{setImages(e.target.value)}}
                        >
                            <h1>Imagens</h1>
                            <p>Adicione até 3 imagens</p></label>
        
                        <input className={styles.image} type="file" id='inputArea' />
                    <div className={styles.inputArea} id='inputArea'>
                        <div className={styles.quad}><label htmlFor="inputArea"><FaCamera /></label></div>
                    </div>
                    </div>

                    <div>
                        <Botao 
                        className={styles.botao} 
                        label="Postar"
                        type="button"
                        value={CdtProduto}
                        onClick={() => create()}
                        />
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