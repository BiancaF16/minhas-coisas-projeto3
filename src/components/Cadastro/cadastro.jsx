import styles from './cadastro.module.css';
import React, {useState} from 'react';
import mulherNegra from '../../assets/image/azulanuncio.jpg';
import Input from '../Input/Input';
import { Link } from 'react-router-dom';
import cadastro from '../../services/cadastro';

function Cadastro (){

    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [cofirmSenha, setCofirmSenha] = useState('')

    const create = async () =>{   
         await cadastro(name, email, password, cofirmSenha)
    }

    return(
        <div className={styles.body}>
            <div className={styles.container} >
                    <div className={styles.post}>
                        <img src={mulherNegra} className={styles.foto} alt='imagem' />
                    </div>
                    <div className={styles.formulario}>
                        <h1>Cadastre-se</h1>
                        <div className={styles.form}>
                           <Input 
                           label="Usuário" 
                           type="text"
                        //    value={name}
                           onChange={(e) =>{setName(e.target.value)}}
                           />
                           
                           <Input 
                           label="Email" 
                           type="text"
                        //    value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           />
                           
                           <Input 
                           label="Senha" 
                           type="password"
                        //    value={password}
                           onChange={(e) => setPassword(e.target.value)}/>

                           <Input 
                           label="Confirmação de senha" 
                           type="password"
                        //    value={cofirmSenha}
                           onChange={(e) => setCofirmSenha(e.target.value)}/>

                        </div>

                        <Link to={"/Login"}>
                            <button
                            type="button"
                            value={cadastro}
                            onClick={() => create()}
                            className={styles.bntCadastrar}>Cadastrar</button>
                        </Link>
                        
                        <p className={styles.backLogin}>Já tem uma conta? <Link to={"/Login"} className={styles.linkReg}>Login</Link></p>
                </div>
            </div>
        </div>
    );
};
export default Cadastro;