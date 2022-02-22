/* função pra ver se o click foi do lado de fora do submenu */
/* essa função seleciona o html depois adiciona uma função ao html */
export default function outsideClick(element, events, callback) {
  /* essa função foi separada para ser reaproveitada no mobile */
  const html = document.documentElement;
  const outside = "data-outside";

  /* se não possuir o atributo outside eu quero que ative e se tiver não quero que ocorra nada
   */
  if (!element.hasAttribute(outside)) {
    events.forEach((userEvent) => {
      //foi preciso usar o setTimeout por conta fase de bubble assim deixando o evento assíncrono, pois ele irá ficar na fila de ações
      setTimeout(() => html.addEventListener(userEvent, handleOutsideClick), 0);
    });
    element.setAttribute(outside, "");
  }

  /* função criada dentro da função pois só quero essa função seja criada quando a função outsideClick for ativada */
  function handleOutsideClick(event) {
    /* se essa condição for falsa ele irá executar o callback, que o callback irá remover a classe active */
    if (!element.contains(event.target)) {
      /* quando ocorrer o callback ele irá remover o eventListener e irá remover o atributo outside */
      element.removeAttribute(outside);
      events.forEach((userEvent) => {
        /* remove todos os eventos de click */
        html.removeEventListener(userEvent, handleOutsideClick);
      });

      callback();
    }
  }
}
