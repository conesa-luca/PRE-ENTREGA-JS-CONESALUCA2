let nombreCliente = '';
let numComensales = 1;

function completarDatos() {
  nombreCliente = prompt("Ingrese el nombre del cliente:");
  numComensales = parseInt(prompt("Ingrese el número de comensales:"));
}

function calcularPropina() {
  const totalCuenta = parseFloat(prompt("Ingrese el total de la cuenta:"));
  const porcentajePropina = parseFloat(prompt("Ingrese el porcentaje de propina (%):"));

  if (isNaN(totalCuenta) || isNaN(porcentajePropina)) {
    alert('Por favor, ingrese valores numéricos válidos.');
    return;
  }

  let propina = (totalCuenta * porcentajePropina) / 100;
  let totalConPropina = totalCuenta + propina;

  const mensaje = `Cliente: ${nombreCliente}
Número de comensales: ${numComensales}
Total de la cuenta: $${totalCuenta.toFixed(2)}
Porcentaje de propina: ${porcentajePropina}%
Propina calculada: $${propina.toFixed(2)}
Total con propina: $${totalConPropina.toFixed(2)}`;

  alert(mensaje);
}
