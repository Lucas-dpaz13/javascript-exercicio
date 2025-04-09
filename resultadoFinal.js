resultadoFinal = (nota) => {
  if (nota >= 7) {
    console.log("parabens! Você foi aprovado.");
  } else if (nota < 5) {
    console.log("Infelizmente você foi reprovado.");
  } else {
    console.log("Infelizmente você está de recuperação.");
  }
}

resultadoFinal(4)
