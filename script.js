function media() {
  var notaPrimeiroBimestre = parseFloat(document.getElementById("nota1").value);
  var notaSegundoBimestre = parseFloat(document.getElementById("nota2").value);
  var notaTerceiroBimestre = parseFloat(document.getElementById("nota3").value);
  var notaQuartoBimestre = parseFloat(document.getElementById("nota4").value);

  var notaSoma =
    notaPrimeiroBimestre +
    notaSegundoBimestre +
    notaTerceiroBimestre +
    notaQuartoBimestre;

  var notaFinal = notaSoma / 4;

  var notaFixada = notaFinal.toFixed(2);

  if (notaFixada > 7.0) {
    document.body.innerHTML = document.body.innerHTML
      .split("Status")
      .join("Aprovado!");
  } else {
    document.body.innerHTML = document.body.innerHTML
      .split("Status")
      .join("Reprovado...");
  }
  document.getElementById("notafinal").value = notaFixada;
}

//Isso é um comentário

//Revisão
//Variáveis, string, console.log, toFixed, operações matemáticas, concatenação

//Desafio 3. Mudar as interações (entrada e saída) para página ao invés do console