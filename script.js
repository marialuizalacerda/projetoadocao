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
  },

};

  
    





