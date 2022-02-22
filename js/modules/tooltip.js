export default function initTooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  tooltips.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);
  });

  function onMouseOver(event) {
    /* o this faz referencia que está sendo falado acima no forEach */
    const tooltipBox = criaToolTipBox(this);

    /* quando eu passar o mouse em cima do mapa a estilização criada irá seguir o mouse */
    /* quando a função de mouserOver é ativa o mouseMove já ativo também */
    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener("mousemove", onMouseMove);

    /* quando eu tira o mouse do mapa a estilização criada irá ser excluida */
    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;

    /* quando eu passar o mouse por cima irá adicionar essa função */
    this.addEventListener("mouseleave", onMouseLeave);
  }

  /* função como objeto para remover o onMouseLeave quando eu tiro o mouse de cima do mapa*/
  const onMouseLeave = {
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener("mouseleave", onMouseLeave);
      this.element.removeEventListener("mousemove", onMouseMove);
    },
  };

  /* função como objeto */
  const onMouseMove = {
    handleEvent(event) {
      /* irá atualizar sempre que mover o pageY e pageX */
      this.tooltipBox.style.top = event.pageY + 20 + "px";
      this.tooltipBox.style.left = event.pageX + 20 + "px";
    },
  };

  function criaToolTipBox(element) {
    /* cria uma div nova */
    const tooltipBox = document.createElement("div");
    /* puxa o elemento do texto quando passar por cima do mapa */
    const text = element.getAttribute("aria-label");
    /* adiciona uma classe nova chamada tooltip */
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    /* adiciona ela ao final do documento */
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }
}
