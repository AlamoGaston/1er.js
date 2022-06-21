function inicio() {
  let opc = prompt(
    "Hola, usted desea abonar su seguro? \n Si : precione aceptar \n No: ESC"
  );
  return opc;
}
//inicio();

function ini() {
  let opcSel = inicio();
  while (opcSel == "ESC");
}
ini();

let opcion = menuTipoVehi();
let eleccion = 0;
if (opcion != 4) {
  cotizar(opcion);
} else {
  alert("GRACIAS");
}

function menuTipoVehi() {
  let opcion = prompt(
    "Seleccione tipo que quiere asegurar: \n 1. MOTO ($450) \n 2. COCHE ($750) \n 3. CAMION  ($900) \n 4. FIN"
  );
  return opcion;
}

function cotizar(opcion) {
  if (opcion == 1) {
    pedirDinero(450);
  } else if (opcion == 2) {
    pedirDinero(750);
  } else if (opcion == 3) {
    pedirDinero(900);
  } else if (opcion == 4) {
    alert("Gracias por su visita, vuelva pronto!");
  } else {
    alert("opcion invalida");
  }
}

function pedirDinero(numMin) {
  while (eleccion < numMin) {
    let dinero = Number(prompt("Ingrese un monto"));

    if (dinero !== 100 && dinero !== 500 && dinero !== 1000) {
      alert("monto invalido o insuficiente");
    } else {
      eleccion += dinero;
    }
  }

  let cambio = eleccion - numMin;
  alert("Su cambio es: " + cambio);
  alert("Gracias, vuelva pronto!");
}

const vehiculos = [
  {
    id: 1,
    nombre: "Moto",
    precio: 500,
  },
  {
    id: 2,
    nombre: "Coche",
    precio: 750,
  },
  {
    id: 3,
    nombre: "Camion",
    precio: 900,
  },
];
