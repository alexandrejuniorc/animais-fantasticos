//a função faz com que tenha um scroll suave quando clica em um link interno, assim levando para a seção indicada
export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll(
    "[data-menu='suave'] a[href^='#']"
  );

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href"); //pega o href que a gente clicar
    const section = document.querySelector(href);
    console.log(section); //faz a conexão entre o link interno e a seção

    //faz o ir para a seção quando clicar no link interno
    //só funciona no chrome e no firefox
    section.scrollIntoView({
      behavior: "smooth", //faz o scroll suave
      block: "start", //alinhe o bloco ao inicio
    });

    //forma alternativa
    //   const topo = section.offsetTop; //pega o topo da seção
    //   window.scrollTo({
    //     top: topo,
    //     behavior: "smooth", // faz o scroll suave
    //   });
  }
  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection); //essa função vai fazer a seção ir diretamente pro link interno
  });
}
