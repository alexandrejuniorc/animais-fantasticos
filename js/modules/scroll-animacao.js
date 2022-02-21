//essa função faz com que ocorra animações ao rola a página para baixo
export default function initAnimacaoScroll() {
  //seleciona todas as classes onde possui .js-scroll
  const sections = document.querySelectorAll(".js-scroll");

  if (sections.length) {
    //vai pegar o parâmetro da metade da tela
    //window.innerHeight mostra o tamanho da tela(vária de cada monitor)
    const windowMetade = window.innerHeight * 0.6; //significa que é vezes 60%
    function animaScroll() {
      //forEach serve pra pegar CADA item da lista
      sections.forEach((section) => {
        //pega a distância do elemento ao topo
        const sectionTop = section.getBoundingClientRect().top;
        //se a section for visível ela subtrai sectionTop de windowMetade e tem que ser menor que 0
        const isSectionVisible = sectionTop - windowMetade < 0;
        if (isSectionVisible) section.classList.add("ativo");
        else section.classList.remove("ativo");
      });
    }
    //ativa a função se não irá ficar vazio a tela quando o usuário acessar
    animaScroll();
    window.addEventListener("scroll", animaScroll);
    //toda vez que uso o scroll essa função é ativada
  }
}
