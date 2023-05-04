const Modal = {
  open() {
    //abrir o modal informativo
    //adicionar a class active do modal informativo
    document.querySelector(".modal-overlay").classList.add("active");
  },
  close() {
    //fechar o modal informativo
    //Remover a class active do modal
    document.querySelector(".modal-overlay").classList.remove("active");
  },
};

const Divulgar = {
  open() {
    //abrir o modal de cadastro
    //adicionar a class active do modal de cadastro
    document.querySelector(".modal-cadastro").classList.add("active");
  },
  close() {
    //fechar o modal de cadastro
    //Remover a class active do modal de cadastro
    document.querySelector(".modal-cadastro").classList.remove("active");
  },
};

const Cadastro = {
  salvar() {
    const form =document.getElementById('form').value;
    const nome = document.getElementById("nome").value;

    const especies = document.getElementById ("especies").value;
    const gender = document.getElementById ("gender").value;
    const idades= document.getElementById("idades").value;
    const portes = document.getElementById("portes").value;

    const estado = document.getElementById("estado").value;
    const cidade = document.getElementById("cidade").value;
    const historia = document.getElementById("historia").value;
    const protetor = document.getElementById("protetor").value;
    const contato = document.getElementById("contato").value;

    
    console.log(nome)

    console.log(especies)
    console.log(gender)
    console.log(idades)
    console.log(portes)

    console.log(estado)
    console.log(cidade)
    console.log(historia)
    console.log(protetor)
    console.log(contato)

    NewCard.new(nome, especies, cidade, estado, historia)

  },

};

const NewCard = {
  new(paramNome, paramEspecies, paramCidade, paramEstado, paramHistoria) {
    // Pega a div lista-animais
    const divList = document.getElementById('lista-animais')

    //Cria uma nova div
    const newDiv = document.createElement('div')
    //Seta a classe card para a nova div criada
    newDiv.className = 'card'

    //Cria o elemento H3
    const newH3 = document.createElement('h3')
    //Passa o nome do animal para o H3
    newH3.innerHTML = paramNome
    //Insere o H3 como filho da nova div criada
    newDiv.appendChild(newH3)

    const newP = document.createElement('p')
    newP.innerHTML = paramEspecies
    newDiv.appendChild(newP)

    const newLocalizacao = document.getElementById('localizacao')
    newLocalizacao.innerHTML = paramCidade, paramEstado
    newDiv.appendChild(newLocalizacao)

    //Cria o elemento da história do bicho
    const newH = document.getElementById('h')
    //Passa a historia para o p 'historia'
    newH.innerHTML = paramHistoria
    //Insere o p 'historia' como filho da nova div criada
    newDiv.appendChild(newH)
    

    divList.appendChild(newDiv)

    //Fecha o modal após salvar
    Divulgar.close()
  }
}

  
    





