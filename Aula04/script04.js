//Array
let tarefas = []

function adicionarTarefa() {
      
    //recebe valor do input do usuário
    const inputTarefa = document.getElementById("inputTarefa")
    let tarefa = inputTarefa.value.trim()

    const mensagem = document.getElementById("mensagem")

    // se o valor do input for vazio então mostre uma mensagem de erro para o usuário
    if (tarefa == "") {
        //mostre uma mensagem de erro
        let mensagemErro = "Digite uma tarefa para adicioná-la a sua lista!"
        mensagem.textContent = mensagemErro
    } else {
        //mensagem de tarefa adicionada com sucesso
        let mensagemSucesso = "Tarefa adicionada com sucesso!"
        mensagem.textContent = mensagemSucesso

        //array
        tarefas.push(tarefa)
        //chamando a função
        renderizarTarefas() 
    }

    //limpa o input do usuário
    inputTarefa.value = ""
}

function renderizarTarefas() {
    //cria novo item (li) e insere na (lista ul)
    const listaTarefas = document.getElementById("listaTarefas")
    listaTarefas.innerHTML = ""

    //for itens na lista
    // 1. item inicial (iterador)
    // 2. item final (condição0
    // 3. se vai de 1 em 1 elemento ou se pula

    //for (iterador, condição, fequencia)

    
    for(let i = 0; i < tarefas.length; i++) {
        let novaTarefa = document.createElement("li")
        novaTarefa.textContent = tarefas[i]

        let botaoRemover = document.createElement("button") //criando o botão
        botaoRemover.className = "remover" // criando classe
        botaoRemover.textContent = "Remover" //adicionando texto dentro do botão
        botaoRemover.onclick = () => removerTarefa(i)

        let botaoEditar = document.createElement("button")
        botaoEditar.className = "editar" // criando classe
        botaoEditar.textContent = "Editar" //adicionando texto dentro do botão
        botaoEditar.onclick = () => editarTarefa(i)


        novaTarefa.appendChild(botaoRemover)
        novaTarefa.appendChild(botaoEditar)
        listaTarefas.appendChild(novaTarefa)
    }
    
}

function removerTarefa(i) {
    tarefas.splice(i, 1)
    renderizarTarefas()
}

function editarTarefa(i) {
    let tarefaEditada = prompt("Edite a tarefa:")
    if (tarefaEditada.trim() !== "") {
        tarefas[i] = tarefaEditada
        renderizarTarefas()
    }
    
}

function limparLista() {
    tarefas.length = 0
    renderizarTarefas()
    mensagem.textContent = "Lista  de tarefas removida com sucesso"

}


//Aula 04 Arrays (lsitas), estruturas de repetição (for) e escopo
// Aula 054 Métodos de array(deletando e editando itens em lista)