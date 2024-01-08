import api from "./api";

async function login(email, password) {
    console.log(email, password)

const response = await api.post ('/login', {
    email: email,
    password: password
})

console.log ('deu bom', response)

}

export default login;