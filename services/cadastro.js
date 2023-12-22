import api from "./api";

async function cadastro (name, email, password) {
    console.log(name, email, password)
    try{
        const resoponseCadastro = await api.post ('/user',{
            name: name,
            email: email,
            password: password
        });
        console.log (resoponseCadastro) ;

        const responseGetAll = await api.get('/all');
        console.log(responseGetAll)
    } catch(error) {
        console.error(error);
    }

}

    export default cadastro;