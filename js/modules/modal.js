export default function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  /* if para verificar se existe os seletores na página, se não existir não irá executar nada */
  if (botaoAbrir && botaoFechar && containerModal) {
    /* função para abrir o modal */
    function toggleModal(event) {
      event.preventDefault();
      containerModal.classList.toggle("ativo");
      // o método toggle é usado para adicionar se não tiver uma classe e remover se já tiver a classe
    }

    /* função para fechar o modal */
    // function fecharModal(event) {
    //   event.preventDefault();
    //   containerModal.classList.remove("ativo");
    // }

    /* função para clicar fora do modal e fechar ele */
    function cliqueForaModal(event) {
      /* se o lugar cliado for fora do modal ele fecha, se não, não irá fechar */
      if (event.target === this) {
        toggleModal(event);
      }
    }
    /* evento de click para abrir o modal */
    botaoAbrir.addEventListener("click", toggleModal);
    /* evento de click para fechar o modal */
    botaoFechar.addEventListener("click", toggleModal);
    /* evento de click para clicar fora do modal e fecha-lo */
    containerModal.addEventListener("click", cliqueForaModal);
  }
}
