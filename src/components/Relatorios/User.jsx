import Style from './User.module.css';
import { Link } from 'react-router-dom';

function User () {
    return(
    <>

    <header className={Style.formCbç}>
        <h2>Lista de Usuários</h2>
        <Link to={"/Home"}><button className={Style.btnVoltar}>Voltar</button></Link>
    </header>

    <div className={Style.tabela}>
        <table className={Style.formulario}>
            <thead>
              <th>ID</th>
              <th>USUÁRIO</th>
              <th>EMAIL</th>
              <th>COMPRAS</th>
            </thead>
            <tbody>
            
            </tbody>
        </table>
          
    </div>
    </>

);
};

export default User;
