import { Link } from 'react-router-dom';
import styles from './Login.module.css';
import homemNegro from '../../assets/image/pretoazul.jpg';
import Input from '../Input/Input';
import CheckBox from '../CheckBox/CheckBox';


function Login (){
    return(
        <div className={styles.container} >
                <div className={styles.post}>
                    <img src={homemNegro} className={styles.foto} />
                </div>
                <div className={styles.formulario}>
                    <h1>Login</h1>
                    <div className={styles.form}>
                       <Input label="Usuário" type="text" />
                       <Input label="Senha" type="password"/>
                       <CheckBox label="Lembre-se de mim."/>
                    </div>
                    <Link to={"/Home"}><button className={styles.bntEntrar}>Entrar</button></Link>
                    <p className={styles.registro}>Não tem uma conta? <Link to={"/cadastro"} className={styles.linkReg}>Registre-se</Link></p>
            </div>
        </div>
    );
};
export default Login;