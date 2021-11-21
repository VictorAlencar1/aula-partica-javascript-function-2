var questao1 = function (n1, n2) {
    var media = (n1 + n2) / 2
    if (media >= 7) {
      return 'A média é ' + media + ' Voçê está aprovado(a)'
    }
    else if (media >= 5 && media < 7) {
      return 'A média é ' + media + ' Voçê está na recuperação';
    }
    else if (media < 5) {
      return 'A média é ' + media + ' Você estar reprovado'
    }
  }
  
  var questao2 = function () {
    var n = 3;
    for (let i = 0; i <= 10; i++) {
      console.log(`${n} x ${i} = ${3 * i}`)
    }
  }
  
  var questao3 = (ano) => {
    if (ano <= 2003) {
      console.log("maior de idade!");
    }
    else {
      console.log("menor de idade");
    }
  }