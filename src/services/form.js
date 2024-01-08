var tabela = document.getElementById('tabela');
var tbody = document.querySelector('tbody');
var users = JSON.parse(localStorage.getItem('listaUser'));


tbody.innerHTML = '';

users.forEach((item, index) => {
    var tr = document.createElement('tr');

    // Utilize o índice do usuário no array como ID
    item.id = index + 1;
    
    tr.innerHTML = `<td>${item.id}</td>
                <td>${item.nomeCad}</td>
                <td>${item.emailCad}</td>
                <td>${item.ultimoAcesso ? item.ultimoAcesso : 'N/A'}</td> 
                <td>${item.status ? item.status : 'N/A'}</td>
                <td>
                <button id="removeBtn" onclick="removerUsuario(${index})" class="button-88" role="button">Remover</button>
                </td>`;

    tbody.appendChild(tr);
});

// Salva os usuários atualizados no localStorage
localStorage.setItem('listaUser', JSON.stringify(users));

// Função para remover um usuário
function removerUsuario(index) {
    var confirmar = confirm('Tem certeza de que deseja remover este usuário?');

    if (confirmar) {
        users.splice(index, 1);
        localStorage.setItem('listaUser', JSON.stringify(users));
        location.reload();
    }
}