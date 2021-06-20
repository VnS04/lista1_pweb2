var texto = prompt("Insira o número:");
var number = parseInt(texto);
let i = 1;
while (i <= number) {
  if (i % 2 == 1) {
    var x = i;
  }
  i += 1;
  alert(x);
}
