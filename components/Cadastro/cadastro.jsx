import styles from './cadastro.module.css';
import mulherNegra from '../../assets/image/azulanuncio.jpg';
import Input from '../Input/Input';
import { Link } from 'react-router-dom';

function Cadastro (){
    return(
        <div className={styles.body}>
            <div className={styles.container} >
                    <div className={styles.post}>
                        <img src={mulherNegra} className={styles.foto} />
                    </div>
                    <div className={styles.formulario}>
                        <h1>Cadastre-se</h1>
                        <div className={styles.form}>
                           <Input label="Usuário" type="text"/>
                           <Input label="Email" type="text"/>
                           <Input label="Senha" type="password"/>
                           <Input label="Confirmação de senha" type="password"/>
                        </div>
                        <Link to={"/Login"}><button className={styles.bntCadastrar}>Cadastrar</button></Link>
                        <p className={styles.backLogin}>Já tem uma conta? <Link to={"/Login"} className={styles.linkReg}>Login</Link></p>
                </div>
            </div>
        </div>
    );
};
export default Cadastro;