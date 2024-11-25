document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtenha os valores dos campos
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Aqui você pode definir as credenciais corretas
    const validUsername = 'usuarioExemplo'; // Substitua pelo nome de usuário correto
    const validPassword = 'senhaExemplo'; // Substitua pela senha correta

    // Verifica se as credenciais estão corretas
    if (username === validUsername && password === validPassword) {
        // Redirecionar ou fazer algo após o login bem-sucedido
        alert('Login bem-sucedido!');
        // window.location.href = 'pagina_secreta.html'; // Exemplo de redirecionamento
    } else {
        // Exibir mensagem de erro
        const errorMessage = document.getElementById('error-message');
        errorMessage.style.display = 'block';
    }
});