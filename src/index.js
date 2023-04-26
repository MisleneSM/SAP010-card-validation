import validator from './validator.js';

//Dados dos imputs e botoes//
const numeroCartao = document.querySelector('#cartaoNumber');
const botao = document.querySelector("#validar");
const numCartao = document.querySelector("#numCartao");
const digCartao = document.querySelector('.digitos');
const formSubmit = document.querySelector('#form'); //o submit dispara um botão

numeroCartao.oninput = function (e) { //função oninput puxa o valor do input
  digCartao.innerText = validator.maskify(e.target.value); //mostra o valor do imput no cartão rosa
}

botao.oninput = function (e) {
  numCartao.innerText = validator.isValid(e.target.value);
}

formSubmit.onsubmit = function (e) {
  e.preventDefault();//impede o envio do formulário do submit
  const cartaoValidar = numeroCartao.value;
  const validarNumber = validator.isValid(cartaoValidar);
  if (validarNumber === true) {
    alert("Seu cartão foi validado, por favor aguarde")
  } else{
    alert("Seu cartão é inválido, tente novamente")
  }
}