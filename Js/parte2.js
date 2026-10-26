// ===================== PROBLEMA 1: LOS 35 CAMELLOS =====================
function repartirCamellos() {
  // 1. Entrada de datos
  var camellos = parseInt(document.getElementById("camellos").value);
  var d1 = parseInt(document.getElementById("d1").value);
  var d2 = parseInt(document.getElementById("d2").value);
  var d3 = parseInt(document.getElementById("d3").value);
  var salida = document.getElementById("salidaCamellos");

  if (isNaN(camellos) || isNaN(d1) || isNaN(d2) || isNaN(d3)) {
    salida.className = "resultado error";
    salida.innerHTML = "Completa todos los campos.";
    return;
  }
  if (camellos < 1 || d1 < 1 || d2 < 1 || d3 < 1) {
    salida.className = "resultado error";
    salida.innerHTML = "Los valores deben ser enteros positivos.";
    return;
  }

  // 2. Proceso: se presta un camello
  var total = camellos + 1;

  if (total % d1 !== 0 || total % d2 !== 0 || total % d3 !== 0) {
    salida.className = "resultado error";
    salida.innerHTML = "Con " + total + " camellos (incluyendo el prestado) " +
      "el reparto no es exacto. Prueba con otros valores.";
    return;
  }

  var parte1 = total / d1;
  var parte2 = total / d2;
  var parte3 = total / d3;
  var sobran = total - (parte1 + parte2 + parte3);

  // 3. Salida
  var texto = "Total con el camello prestado: " + total + "<br>";
  texto += "Hermano mayor (1/" + d1 + "): " + parte1 + " camellos<br>";
  texto += "Segundo hermano (1/" + d2 + "): " + parte2 + " camellos<br>";
  texto += "Hermano menor (1/" + d3 + "): " + parte3 + " camellos<br>";
  texto += "Camellos que sobran: " + sobran + "<br>";

  if (sobran >= 1) {
    texto += "<b>Se devuelve 1 camello prestado y Beremiz se queda con " +
      (sobran - 1) + ".</b>";
    salida.className = "resultado ok";
  } else {
    texto += "<b>No sobra ningún camello, no se puede devolver el prestado.</b>";
    salida.className = "resultado error";
  }

  salida.innerHTML = texto;
}

function limpiar1() {
  document.getElementById("camellos").value = "";
  document.getElementById("d1").value = "";
  document.getElementById("d2").value = "";
  document.getElementById("d3").value = "";
  document.getElementById("salidaCamellos").innerHTML = "";
  document.getElementById("salidaCamellos").className = "resultado";
}

// ===================== PROBLEMA 2: LOS OCHO PANES =====================
function repartirMonedas() {
  // 1. Entrada de datos
  var panesA = parseFloat(document.getElementById("panesA").value);
  var panesB = parseFloat(document.getElementById("panesB").value);
  var monedas = parseFloat(document.getElementById("monedas").value);
  var salida = document.getElementById("salidaPanes");

  if (isNaN(panesA) || isNaN(panesB) || isNaN(monedas)) {
    salida.className = "resultado error";
    salida.innerHTML = "Completa todos los campos.";
    return;
  }
  if (panesA < 0 || panesB < 0 || monedas < 0) {
    salida.className = "resultado error";
    salida.innerHTML = "Los valores no pueden ser negativos.";
    return;
  }

  // 2. Proceso
  var total = panesA + panesB;
  var comida = total / 3;            // lo que come cada persona
  var aporteA = panesA - comida;     // lo que A le dio al tercero
  var aporteB = panesB - comida;     // lo que B le dio al tercero

  if (aporteA < 0 || aporteB < 0) {
    salida.className = "resultado error";
    salida.innerHTML = "Con esos panes uno de los viajeros no alcanza a " +
      "aportar al tercer hombre. Prueba con otros valores.";
    return;
  }

  var monedasA = monedas * aporteA / comida;
  var monedasB = monedas * aporteB / comida;

  // 3. Salida
  var texto = "Cada persona come: " + comida.toFixed(2) + " panes<br>";
  texto += "A aportó al tercero: " + aporteA.toFixed(2) + " panes<br>";
  texto += "B aportó al tercero: " + aporteB.toFixed(2) + " panes<br>";
  texto += "<b>Viajero A recibe: " + monedasA.toFixed(2) + " monedas</b><br>";
  texto += "<b>Viajero B recibe: " + monedasB.toFixed(2) + " monedas</b>";

  salida.className = "resultado ok";
  salida.innerHTML = texto;
}

function limpiar2() {
  document.getElementById("panesA").value = "";
  document.getElementById("panesB").value = "";
  document.getElementById("monedas").value = "";
  document.getElementById("salidaPanes").innerHTML = "";
  document.getElementById("salidaPanes").className = "resultado";
}

// ===================== EVENTOS (DOM) =====================
document.getElementById("btnCamellos").addEventListener("click", repartirCamellos);
document.getElementById("btnLimpiar1").addEventListener("click", limpiar1);
document.getElementById("btnPanes").addEventListener("click", repartirMonedas);
document.getElementById("btnLimpiar2").addEventListener("click", limpiar2);