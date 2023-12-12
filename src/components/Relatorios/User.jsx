import Style from './User.module.css';

function User () {
    return(
        <div>
            <table className={Style.formulario}>
                <thead>
                    <tr>
                        <th>Usuário</th>
                        <th>Email</th>
                        <th>Status da conta</th>
                        <th>Crompas</th>
                    </tr>
                </thead>
                <tbody>
                    <th>fulano</th>
                    <th>fulano@gmail.com</th>
                    <th>2 anos</th>
                    <th>1.000</th>
                </tbody>
            </table>
        </div>
    );
};

export default User;
