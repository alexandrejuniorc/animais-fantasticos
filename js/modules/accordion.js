//função que ativa o faq quando ele é clicado
export default function initAccordion() {
  //cria uma variável para as perguntas do FAQ
  const accordionList = document.querySelectorAll(
    "[data-anime='accordion'] dt"
  );
  //quando uma variável é muito repetida é bom declarar ela para que não haja nenhum problema
  const activeClass = "ativo";
  if (accordionList.length) {
    //faz o primeiro item ficar ativo
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);
    //seleciona o próximo item

    function activeAccordion() {
      this.classList.toggle(activeClass);
      //ativa o próximo item sem ser o selecionado
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
