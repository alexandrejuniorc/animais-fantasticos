export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll("[data-numero]");

    numeros.forEach((numero) => {
      const total = +numero.innerText; //pega o número em texto e já transforma em número com com sinal de +
      const incremento = Math.floor(total / 100);
      //o incremento será o valor total do número na tela divido por 100, para adicionar mais rápido no setInterval
      //Math.floor serve para arredondar os números

      let start = 0; //começo do número

      //o método setInterval chama uma função em intervalos especificados (em milissegundos).
      const timer = setInterval(() => {
        start += incremento; //start irá ser start = start + incremento
        numero.innerText = start;
        if (start > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random());
      //Math.random pra acontecer de forma aleatória a enumeração
    });
  }

  /* se a página estiver com a classe ativa pare de observar */
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      observer.disconnect();
      animaNumeros();
    }
  }

  /* observador do numero pra ver se a página está nele */
  const observerTarget = document.querySelector(".numeros");
  const observer = new MutationObserver(handleMutation);

  observer.observe(observerTarget, { attributes: true });
}
