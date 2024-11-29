// Aguarda o carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os botões com a classe "btn-proximo"
    const botoes = document.querySelectorAll('.btn-proximo');

    // Adiciona um evento de clique a cada botão
    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
            // Pega o ID do próximo passo
            const proximoPassoId = botao.getAttribute('data-proximo');

            // Esconde o passo atual
            const passoAtual = botao.closest('.passo');
            passoAtual.classList.remove('ativo');

            // Mostra o próximo passo
            const proximoPasso = document.getElementById(`passo-${proximoPassoId}`);
            if (proximoPasso) {
                proximoPasso.classList.add('ativo');
            }
        });
    });
});
