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