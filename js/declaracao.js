function updateDeclaracao(field, value) {
  document.getElementById(field).textContent = value;
}

function setStyle(style) {
  const declaracao = document.getElementById("declaracao");
  declaracao.className = "declaracao " + style;
}

function changeCarImage(imageNome) {
  document.getElementById(
    "carImage"
  ).innerHTML = `<img src=${imageNome} alt="Carro" style="width:100%; height:100%;">`;
}