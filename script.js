document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Aqui você pode adicionar a lógica para autenticar o usuário
    console.log('Usuário:', username);
    console.log('Senha:', password);
    
    // Exemplo de redirecionamento após login bem-sucedido
    // window.location.href = 'pagina-principal.html';
});