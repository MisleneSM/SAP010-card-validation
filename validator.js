const validator = {
  isValid: function (cardNumber) { //  recebe o valor da variável 
    const cartaoArray = cardNumber.split(''); // cria e retorna array separando elemento/ O array são listas de objetos
    let sumNumber = 0;

    for (let i = cartaoArray.length - 1; i >= 0; i--) {
      if (cartaoArray.length % 2 === 0) {
        if (i % 2 === 0) { //verifica se os números terminam em pares
          cartaoArray[i] = cartaoArray[i] * 2 //dobra os valores de números pares
          if (cartaoArray[i] > 9) {
            const numArray = cartaoArray[i].toString().split('')
            cartaoArray[i] = Number(numArray[0]) + Number(numArray[1]) //soma todos números de valor maior que 9
          }
        } else {
          if (i % 2 !== 0) {
            cartaoArray[i] = cartaoArray[i] * 2
            if (cartaoArray[i] > 9) {
              const numArray = cartaoArray[i].toString().split('')
              cartaoArray[i] = Number(numArray[0]) + Number(numArray[1])
            }
          }
        }
        cartaoArray[i] = Number(cartaoArray[i]) //transforma o item em número
        sumNumber = sumNumber + cartaoArray[i] //soma todos os valores gerando o total
      }
    }
    if (sumNumber % 10 === 0) { //mostra o resultado total
      return true
    } else {
      return false
    } 
  },

  maskify: function (cardNumber) { 
    const indexStart = 0
    const numVar = cardNumber.length -4
    const indexEnd = cardNumber.length
    let maskDigit = cardNumber.substring(indexStart, numVar)
    const quatroDigit = cardNumber.substring(numVar, indexEnd)
    const mascaraNumber = maskDigit.replace(maskDigit,() => {
      for (let i = 0; i < maskDigit.length; i++) {
        maskDigit = maskDigit.replace(maskDigit[i], "#")
      }
      return maskDigit;
    })
    const cartaoNumero = mascaraNumber + quatroDigit
    return cartaoNumero
  }
}

export default validator;