calculando = (num1, num2, operador) => {
  switch (operador) {
    case '+':
      console.log(num1 + num2);
      break
    case '-':
      console.log(num1 - num2)
      break
    case '*':
      console.log(num1 * num2)
      break
    case '/':
      console.log(num1 / num2)
      break
  }
}

calculando(101, 2, '/')
