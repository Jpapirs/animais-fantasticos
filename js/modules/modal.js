export default class Modal {
  constructor(botaoAbrir, botaofechar, containerModal) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaofechar);
    this.containerModal = document.querySelector(containerModal);
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueFora = this.cliqueFora.bind(this);
  }

  toggleModal() {
    this.containerModal.classList.toggle("ativo");
  }
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }
  cliqueFora(event) {
    if (event.target === this.containerModal) this.toggleModal(event);
  }
  addModalEvent() {
    this.botaoAbrir.addEventListener("click", this.eventToggleModal);
    this.botaoFechar.addEventListener("click", this.eventToggleModal);
    this.containerModal.addEventListener("click", this.cliqueFora);
  }
  init() {
    if (this.botaoAbrir && this.botaoAbrir && this.containerModal) {
      this.addModalEvent();
      return this;
    }
  }
}
