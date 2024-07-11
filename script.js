
function addTask() {
  let entrada = document.getElementById('entradaTarefa');
  let novaTarefa = entrada.value;

  if (novaTarefa !== '') {
      let lista = document.createElement('li');
      lista.textContent = novaTarefa;

      let botaoDeletar = document.createElement('button');
      botaoDeletar.textContent = 'Deletar';

      botaoDeletar.onclick = function() {
          lista.parentNode.removeChild(lista);
          saveTasks();
      };

      lista.appendChild(botaoDeletar);

      document.getElementById('listaTarefas').appendChild(lista);
      saveTasks();

      entrada.value = '';
  } else {
      alert('Por favor, digite o nome da tarefa.')
  }
}

// Função que salva as tarefas no localStorage
function saveTasks() {
  let tarefas = [];
  let items = document.querySelectorAll('#listaTarefas li');
  items.forEach(function(item) {
      tarefas.push(item.childNodes[0].textContent);
  });
  localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

// Função que carrega as tarefas do localStorage
function loadTasks() {
  let tarefas = JSON.parse(localStorage.getItem('tarefas'));
  if (tarefas) {
      tarefas.forEach(function(tarefa) {
          let lista = document.createElement('li');
          lista.textContent = tarefa;

          let botaoDeletar = document.createElement('button');
          botaoDeletar.textContent = 'Delete';
          botaoDeletar.onclick = function() {
              lista.parentNode.removeChild(lista);
              saveTasks();
          };

          lista.appendChild(botaoDeletar);
          document.getElementById('listaTarefas').appendChild(lista);
      });
  }
}

// Carrega as tarefas quando a página é carregada
window.onload = loadTasks;