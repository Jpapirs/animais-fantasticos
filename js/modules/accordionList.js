export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = "ativo";
  }
  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }
  //* Adiciona os eventos ao accordion
  addAccordevent() {
    this.accordionList.forEach((item) => {
      item.addEventListener("click", () => this.toggleAccordion(item));
    });
  }
  if() {
    accordionList[0].classList.add(this.activeClass);
    accordionList[0].nextElementSibling.classList.add(this.activeClass);
  }
  //* Iniciar função
  init() {
    if (this.accordionList.length) {
      //* Ativar primeiro item
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordevent();
    }
  }
}
