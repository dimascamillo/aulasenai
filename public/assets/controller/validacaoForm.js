const formInputNome = document.querySelector(".form__input--nome");
const formInputEmail = document.querySelector(".form__input--email");
const form = document.querySelector("form");
const btnEnviar = document.querySelector(".form__btn");
let msg = document.createElement("span");

function validaForm() {

  btnEnviar.addEventListener("click", (e) => {
    e.preventDefault();

    if (formInputNome.value == "" || formInputEmail.value == "") {
      mensagemError();
    } else if (!formInputNome.value == "" && !formInputEmail.value == "") {
      mensagemSucesso();
    }
  });
}

function mensagemError() {
  msg.innerHTML = "Por favor preencha todos os campos!";
  form.appendChild(msg);
  btnEnviar.classList.add('disable')
  msg.classList.add('error')
}

function mensagemSucesso() {
  msg.innerHTML = "Formulario enviado com sucesso!";
  form.appendChild(msg);
  btnEnviar.classList.remove('disable')
  msg.classList.remove('error')
  msg.classList.add('success')
}

validaForm();
