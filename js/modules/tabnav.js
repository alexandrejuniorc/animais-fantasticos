//criando uma função é um jeito de isolar o escopo
//função para quando você clicar em uma imagem aparecer o conteúdo de acordo com a imagem
export default function initTabNav() {
  //cria uma variável para as imagens
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  //cria uma variável para os textos dos animais
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  //faz com que só ocorra as animações se conter na página tabMenu e tabContent
  if (tabMenu.length && tabContent.length) {
    //deixa o primeiro item de tabContent que seria o conteudo(texto) ativo
    tabContent[0].classList.add("ativo");

    //função para ativar a classe selecionada
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
        //remove a classe ativo quando é acionado em outra seção
      });
      const direcao = tabContent[index].dataset.anime;
      //adiciona variável que irá ser utilizada pra alterar a direção do objeto
      tabContent[index].classList.add("ativo", direcao);
      //adiciona a classe ativo ao tabContent quando é acionado ele no site
    }
    // fez um loop pra cada item da li
    // tem os argumentos itemMenu(item especifico do loop) e o argumento index
    // que mostra exatamente cada index das imagens
    // em cada adiciona um evento de clique e quando clicar irá executar a função criada
    // a função quando executa ela a primeira coisa que irá acontecer é executar a activeTab que vai receber como argumento o index
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
