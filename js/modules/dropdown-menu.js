import outsideClick from "./outsideclick.js";

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");

  /* para cada item irá adicionar ... */
  dropdownMenus.forEach((menu) => {
    /* foi criado uma array com as duas funções de click que eu quero e criado um forEach
  e pra cada evento quando aconteça ele */
    ["touchstart", "click"].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });

  /* função que adiciona a classe ativo ao [data-dropdown] */
  function handleClick(event) {
    event.preventDefault(); /* prevenindo o padrão que no caso levaria para uma página HTML e eu quero que abra somente o submenu */

    /* this é a mesma coisa que o menu acima */
    this.classList.add("active");

    /* chama a função outsideClick e junto com ela passa duas funções de click e um aeroFunction 
  para remover a classe active quando ocorrer a função de click */
    outsideClick(this, ["touchstart", "click"], () => {
      this.classList.remove("active");
    }); /* toda vez que a função de click ocorrer ela irá ser ativada */
  }
}
