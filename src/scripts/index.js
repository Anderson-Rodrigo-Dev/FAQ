const seta = document.querySelectorAll(".seta");
const resposta = document.querySelectorAll(".faq-resposta");
const pergunta = document.querySelectorAll(".faq-pergunta");


function esconderResposta() {
  resposta.forEach((item) => {
    item.classList.remove("mostrar");
  });
}

function setaCinza() {
  seta.forEach((item) => {
    item.setAttribute("src", "src/images/seta.png");
  });
}

pergunta.forEach((item, index) => {
  item.addEventListener("click", () => {
    esconderResposta();
    setaCinza();

    resposta[index].classList.add("mostrar");
    seta[index].setAttribute("src", "src/images/seta-colorida.png");
  });
});
