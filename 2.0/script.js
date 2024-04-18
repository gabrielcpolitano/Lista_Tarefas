// script.js

// Função que adiciona uma tarefa à lista
function addTask() {
    // Acessa o elemento entrada pelo seu ID
    let entrada = document.getElementById('entradaTarefa');

    // Obtém o valor atual da entrada, que é a tarefa a ser adicionada
    let novaTarefa = entrada.value;

    // Verifica se a entrada não está vazia
    if (novaTarefa !== '') {
        // Cria um novo elemento 'li' para a lista
        let lista = document.createElement('li');

        // Define o texto do 'lista' para ser o texto da nova terefa
        lista.textContent = novaTarefa;

        // Cria um botão para deletar a tarefa
        let botaoDeletar = document.createElement('button');

        // Define o texto do botão como 'Deletar'
        botaoDeletar.textContent = 'Deletar';

        // Adicionar um evento de clique ao botão, definindo o que acontece quando clicado
        botaoDeletar.onclick = function() {
            // Remove o 'li' correspondente ao botão de deletar clicando
            lista.parentNode.removeChild(lista);
        };

        // Adiciona o botão de deletar ao item da lista
        lista.appendChild(botaoDeletar);

        // Adicionar o lista na lista de tarefas no HTML
        document.getElementById('listaTarefas').appendChild(lista);

        // Limpa o campo de entreda depois que a tarefa é adicionada
        entrada.value = '';
    } else {
        // Exibe um alerta se o campo de entrada estiver vazio
        alert('Por favor, digite o nome da tarefa.')
    }
}