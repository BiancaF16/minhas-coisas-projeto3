import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import login from '../../services/login';
import styles from './Login.module.css';
import homemNegro from '../../assets/image/pretoazul.jpg';
import Input from '../Input/Input';
import CheckBox from '../CheckBox/CheckBox';


function Login (){

    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const create = async () =>{   
        await login( email, password)
   }

    return(
        <div className={styles.container} >
                <div className={styles.post}>
                    <img src={homemNegro} className={styles.foto} />
                </div>
                <div className={styles.formulario}>
                    <h1>Login</h1>
                    <div className={styles.form} >

                        <Input 
                       label="Email" 
                       type="text"
                    //    value={senha}
                       onChange={(e) => setEmail(e.target.value)}
                       />

                       <Input 
                       label="Senha" 
                       type="password"
                    //    value={senha}
                       onChange={(e) => setPassword(e.target.value)}
                       />

                       <CheckBox label="Lembre-se de mim."/>
                       
                    </div>
                    <Link>
                        <button 
                        type="button" 
                        value={login}
                        onClick={() => create()}
                        className={styles.bntEntrar}>Entrar</button>
                    </Link>
                    <p className={styles.registro}>Não tem uma conta? <Link to={"/cadastro"} className={styles.linkReg}>Registre-se</Link></p>
            </div>
        </div>
    );
};
export default Login;