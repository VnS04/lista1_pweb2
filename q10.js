var numero = prompt("Informe o numero triangular:");
var n = parseInt(numero);

var i = 1;

while (i * (i + 1) * (i + 2) <= n) {
  if (i * (i + 1) * (i + 2) == n) {
    alert("É triangular");
  } 

  if (i * (i + 1) * (i + 2) != n) {
    alert("Não é triangular");
  } 
  i += 1;
}
