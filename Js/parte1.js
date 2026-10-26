// ===================== PROBLEMA 12 =====================
function calcularRaices() {
  // 1. Entrada de datos
  var a = parseFloat(document.getElementById("a").value);
  var b = parseFloat(document.getElementById("b").value);
  var c = parseFloat(document.getElementById("c").value);
  var salida = document.getElementById("salida12");

  // Validaciones
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    salida.className = "resultado error";
    salida.innerHTML = "Ingresa los tres valores: a, b y c.";
    return;
  }
  if (a === 0) {
    salida.className = "resultado error";
    salida.innerHTML = "Si a = 0 no es una ecuación cuadrática.";
    return;
  }

  // 2. Proceso: discriminante
  var D = b * b - 4 * a * c;
  var texto = "Discriminante D = " + D + "<br>";

  // 3. Salida según el valor de D
  if (D > 0) {
    var x1 = (-b + Math.sqrt(D)) / (2 * a);
    var x2 = (-b - Math.sqrt(D)) / (2 * a);
    texto += "<b>La ecuación tiene dos raíces</b><br>";
    texto += "x1 = " + x1.toFixed(4) + "<br>";
    texto += "x2 = " + x2.toFixed(4);
    salida.className = "resultado ok";
  } else if (D === 0) {
    var x = -b / (2 * a);
    texto += "<b>La ecuación tiene una raíz</b><br>";
    texto += "x = " + x.toFixed(4);
    salida.className = "resultado ok";
  } else {
    texto += "<b>La ecuación no tiene raíces reales</b>";
    salida.className = "resultado error";
  }

  salida.innerHTML = texto;
}

function limpiar12() {
  document.getElementById("a").value = "";
  document.getElementById("b").value = "";
  document.getElementById("c").value = "";
  document.getElementById("salida12").innerHTML = "";
  document.getElementById("salida12").className = "resultado";
}

// ===================== PROBLEMA 13 =====================
function estimarPi() {
  // 1. Entrada de datos
  var n = parseInt(document.getElementById("n").value);
  var salida = document.getElementById("salida13");

  if (isNaN(n) || n < 1) {
    salida.className = "resultado error";
    salida.innerHTML = "Ingresa un valor entero de n mayor o igual a 1.";
    return;
  }

  // 2. Proceso: bucle for que acumula la suma
  var suma = 0;
  for (var k = 1; k <= n; k++) {
    suma = suma + 1 / (k * k);
  }
  var piEstimado = Math.sqrt(6 * suma);
  var error = Math.abs(Math.PI - piEstimado);

  // 3. Salida
  salida.className = "resultado ok";
  salida.innerHTML =
    "n = " + n + "<br>" +
    "π estimado = " + piEstimado.toFixed(10) + "<br>" +
    "π real = " + Math.PI.toFixed(10) + "<br>" +
    "Error = " + error.toExponential(4);
}

function ponerN(valor) {
  document.getElementById("n").value = valor;
  estimarPi();
}

// ===================== EVENTOS (DOM) =====================
document.getElementById("btnRaices").addEventListener("click", calcularRaices);
document.getElementById("btnLimpiar12").addEventListener("click", limpiar12);
document.getElementById("btnPi").addEventListener("click", estimarPi);
document.getElementById("n100").addEventListener("click", function () { ponerN(100); });
document.getElementById("n10000").addEventListener("click", function () { ponerN(10000); });
document.getElementById("n1000000").addEventListener("click", function () { ponerN(1000000); });