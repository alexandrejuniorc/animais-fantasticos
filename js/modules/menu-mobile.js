import outsideClick from "./outsideclick.js";
/* importa a função de click para clicar do lado de fora do menu e ele fechar*/

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ["click", "touchstart"];

  //condição para não bugar o js e irá adicionar somente se tiver o menuButton
  if (menuButton) {
    function openMenu() {
      menuList.classList.add("active");
      menuButton.classList.add("active");
      //outsideClick é a função de click
      //eu quero que aconteça a função quando clicar fora da menuList
      //irá ter dois eventos um pra pc e outro para mobile
      outsideClick(menuList, eventos, () => {
        menuList.classList.remove("active");
        menuButton.classList.remove("active");
      });
    }

    //para cada evento da array ele irá fazer o loop e adicionar o evento nele
    eventos.forEach((evento) => menuButton.addEventListener(evento, openMenu));
  }
}
