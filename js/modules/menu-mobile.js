import outSideClick from "./outsideclick.js";

export default class MenuMobile {
  constructor(menuButton, menuLista, events) {
    this.menuButton = document.querySelector('[data-menu="button"]');
    this.menuLista = document.querySelector('[data-menu="lista"]');
    this.activeClass = "active";
    this.eventos = ["click", "touchstart"];
    if (events === undefined) this.events = ["touchstart", "click"];
    else this.events = events;
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(event) {
    event.preventDefault();
    this.menuLista.classList.add("active");
    this.menuButton.classList.add("active");
    outSideClick(this.menuLista, this.events, () => {
      this.menuLista.classList.remove("active");
      this.menuButton.classList.remove("active");
    });
  }
  addMenuMobile() {
    this.events.forEach((userEvent) =>
      this.menuButton.addEventListener(userEvent, this.openMenu)
    );
  }
  init() {
    if (this.menuButton && this.menuLista) this.addMenuMobile();
    return this;
  }
}
