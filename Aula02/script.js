function adicionarTarefa() {
    let mensagem = "Tarefa adicionada com sucesso!";
    // O código abaixo realiza o input
    
    let inputTarefa = document.getElementById("inputTarefa")
    //Pega o valor do input
    let tarefa = inputTarefa.value 
    //busca o elemento por id
    document.getElementById("mensagem").textContent = mensagem;

    let listaTarefas = document.getElementById("listaTarefas");
    //lista as tarefas
    let novaTarefa = document.createElement("li"); 
    //cria as listas
    novaTarefa.textContent = tarefa;

    listaTarefas.appendChild(novaTarefa); 
    // adiciona o elemento filho

    inputTarefa.value = ""
    // apaga as palavras após adicionadas
    
}