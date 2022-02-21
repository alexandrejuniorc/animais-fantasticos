//criando uma função é um jeito de isolar o escopo
//função para quando você clicar em uma imagem aparecer o conteúdo de acordo com a imagem
function initTabNav() {
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
initTabNav();

//função que ativa o faq quando ele é clicado
function initAccordion() {
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

initAccordion();

//a função faz com que tenha um scroll suave quando clica em um link interno, assim levando para a seção indicada
function initScrollSuave() {
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

initScrollSuave();

//essa função faz com que ocorra animações ao rola a página para baixo
function initAnimacaoScroll() {
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

initAnimacaoScroll();
