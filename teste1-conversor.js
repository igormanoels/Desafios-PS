function romanoParaArabico(numeroRomano) {
    var valoresRomanos = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    };
    var resultado = 0;
  
    // Percorre a string do número romano de trás para frente
    for (var i = numeroRomano.length - 1; i >= 0; i--) {
      var valorAtual = valoresRomanos[numeroRomano.charAt(i)];
  
      // Verifica se o valor atual é maior ou igual ao próximo valor
      if (i < numeroRomano.length - 1 && valorAtual < valoresRomanos[numeroRomano.charAt(i + 1)]) {
        resultado -= valorAtual; // Subtrai o valor atual do resultado
      } else {
        resultado += valorAtual; // Adiciona o valor atual ao resultado
      }
    }
  
    return resultado;
  }
  
  function arabicoParaRomano(numeroArabico) {
    var valoresRomanos = [
      { valor: 1000, romano: 'M' },
      { valor: 900, romano: 'CM' },
      { valor: 500, romano: 'D' },
      { valor: 400, romano: 'CD' },
      { valor: 100, romano: 'C' },
      { valor: 90, romano: 'XC' },
      { valor: 50, romano: 'L' },
      { valor: 40, romano: 'XL' },
      { valor: 10, romano: 'X' },
      { valor: 9, romano: 'IX' },
      { valor: 5, romano: 'V' },
      { valor: 4, romano: 'IV' },
      { valor: 1, romano: 'I' }
    ];
  
    var numeroRomano = '';
  
    for (var i = 0; i < valoresRomanos.length; i++) {
      while (numeroArabico >= valoresRomanos[i].valor) {
        numeroRomano += valoresRomanos[i].romano;
        numeroArabico -= valoresRomanos[i].valor;
      }
    }
  
    return numeroRomano;
  }
  