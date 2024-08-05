const form = document.querySelector("#formulario");

form.addEventListener('submit', function (e) {

  e.preventDefault();
  const inputAltura = e.target.querySelector('#altura');
  const inputPeso = e.target.querySelector('#peso');

  const altura = Number(inputAltura.value);
  const peso = Number(inputPeso.value);


  function alerta_msg() {
    Swal.fire({
      icon: "error",
      title: "Algo deu errado...",
      text: "Não foi possível realizar o cálculo do IMC!!!. Verifique os valores informados e tente novamente.",
    });
  }

  function respostaImc() {
    Swal.fire({
      title: "IMC!",
      text: msg,
      imageUrl: "./assets/img/alert_imc.png",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "cálculo imc"
    });
  }

  if (!altura || !peso) {
    alerta_msg();
    return;
  }

  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);

  const msg = `Seu IMC é ${imc} (${nivelImc}).`;

  respostaImc();

});

function getNivelImc (imc) {
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}

function getImc (peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}