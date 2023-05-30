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

    const fotoInput = document.getElementById("imagemInput");
    const foto = fotoInput.files[0];


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
    console.log(foto)
    console.log(protetor)
    console.log(contato)

    NewCard.new(nome, especies, cidade, estado, historia, foto)

  },

};

const NewCard = {
  new(paramNome, 
    paramEspecies, 
    paramCidade, 
    paramEstado, 
    paramHistoria, 
    paramFoto) {
    // Pega a div lista-animais
    const divList = document.getElementById('lista-animais')

    //Cria uma nova div
    const newDiv = document.createElement('div')
    //Seta a classe card para a nova div criada
    newDiv.className = 'card'

    //Cria o elemento H3
    const newH3 = document.createElement('h3')
    //Passa o nome do animal para o H3
    newH3.innerText = paramNome
    //Insere o H3 como filho da nova div criada
    newDiv.appendChild(newH3)

    const newP = document.createElement('p')
    newP.innerText = paramEspecies
    newDiv.appendChild(newP)

    const newLocalizacao = document.createElement('p')
    newLocalizacao.id = 'localizacao'
    newLocalizacao.innerText = `${paramCidade} - ${paramEstado}`
    newDiv.appendChild(newLocalizacao)

    //Cria o elemento da história do bicho
    const newH = document.createElement('p')
    newH.id = 'h'
    newH.innerText = paramHistoria
    newDiv.appendChild(newH)

    const imgElement = document.createElement("img");
    imgElement.src = URL.createObjectURL(paramFoto);
    imgElement.classList.add("imagem-card");

    const divImagem = document.createElement("div");
    divImagem.classList.add("div-imagem");
    divImagem.appendChild(imgElement);
    newDiv.appendChild(divImagem);

    
    const newButton = document.createElement('button')
    
    newButton.className= 'button one'
    newButton.textContent = 'Quero adotar'
    newDiv.appendChild(newButton)
        

    divList.appendChild(newDiv)

    //Fecha o modal após salvar
    Divulgar.close()
  }
}




  
    





