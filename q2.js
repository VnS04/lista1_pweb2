let number = parseInt(prompt("Insira o número:"));
if (number < 0 || number == 0) {
  alert("O valor tem que ser positivo e diferente de zero.");
} else {
  let soma = 0;
  let i = 1;
  while (i <= number) {
    soma = soma + i;
    i += 1;
  }

  alert(soma);
}
