var base = prompt("Digite a base:");
var expoente = prompt("Digite o expoente (expoente >= 0):");
var x = parseInt(base);
var n = parseInt(expoente);

var i = 0;
var x_i = 1;

while (i < n) {
  i += 1;
  x_i = x_i * x;
}
alert(x_i);
