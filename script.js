function addTask(sectionIndex) {
  let entrada = document.getElementById('entradaTarefa' + sectionIndex);
  let novaTarefa = entrada.value;

  if (novaTarefa !== '') {
      let lista = document.createElement('li');
      lista.textContent = novaTarefa;

      let botaoDeletar = document.createElement('button');
      botaoDeletar.textContent = 'Concluído';

      botaoDeletar.onclick = function() {
          lista.parentNode.removeChild(lista);
          saveTasks(sectionIndex);
      };

      lista.appendChild(botaoDeletar);

      document.getElementById('listaTarefas' + sectionIndex).appendChild(lista);
      saveTasks(sectionIndex);

      entrada.value = '';
  } else {
      alert('Por favor, digite o nome da tarefa.');
  }
}

// Função que salva as tarefas no localStorage
function saveTasks(sectionIndex) {
  let tarefas = [];
  let items = document.querySelectorAll('#listaTarefas' + sectionIndex + ' li');
  items.forEach(function(item) {
      tarefas.push(item.childNodes[0].textContent);
  });
  localStorage.setItem('tarefas' + sectionIndex, JSON.stringify(tarefas));
}

// Função que carrega as tarefas do localStorage
function loadTasks(sectionIndex) {
  let tarefas = JSON.parse(localStorage.getItem('tarefas' + sectionIndex));
  if (tarefas) {
      tarefas.forEach(function(tarefa) {
          let lista = document.createElement('li');
          lista.textContent = tarefa;

          let botaoDeletar = document.createElement('button');
          botaoDeletar.textContent = 'Deletar';
          botaoDeletar.onclick = function() {
              lista.parentNode.removeChild(lista);
              saveTasks(sectionIndex);
          };

          lista.appendChild(botaoDeletar);
          document.getElementById('listaTarefas' + sectionIndex).appendChild(lista);
      });
  }
}

// Carrega as tarefas quando a página é carregada
window.onload = function() {
  for (let i = 0; i < 3; i++) {
      loadTasks(i);
  }
};
