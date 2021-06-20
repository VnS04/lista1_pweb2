var numero = prompt("Informe o numero fatorial:");
var n = parseInt(numero);

var i = 1;
var n_fat = 1;

while (i <= n) {
  n_fat = n_fat * i;
  i += 1;
}

alert(n_fat);
