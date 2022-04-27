//Calculo do IMC

let pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
  let paciente = pacientes[i];

  let tdPeso = paciente.querySelector(".info-peso");
  let tdAltura = paciente.querySelector(".info-altura");
  let peso = tdPeso.textContent;
  let altura = tdAltura.textContent;

  let tdImc = paciente.querySelector(".info-imc");

  let pesoValido = validaPeso(peso);
  let alturaValida = validaAltura(altura);

  if (!pesoValido) {
    console.log("Peso inválido");
    pesoValido = false;
    tdImc.textContent = "Peso inválido";
    paciente.classList.add("paciente-invalido");
  }

  if (!alturaValida) {
    console.log("Altura inválida");
    alturaValida = false;
    tdImc.textContent = "Altura inválida";
    paciente.classList.add("paciente-invalido");
  }

  if (alturaValida && pesoValido) {
    let imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  }
}

function validaPeso(peso) {
  if (peso > 0 && peso < 300) {
    return true;
  } else {
    return false;
  }
}

function validaAltura(altura) {
  if (altura > 0 && altura < 3) {
    return true;
  } else {
    return false;
  }
}

function calculaImc(peso, altura) {
  let imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);
}
