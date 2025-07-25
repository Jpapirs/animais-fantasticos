import outSideClick from "./outsideclick.js";

export default class DropDownMenu {
  constructor(dropdownmenus, events) {
    this.dropdownmenus = document.querySelectorAll(dropdownmenus);
    this.activeClass = "active";
    //* Defina touchstart e click como argumento padrão de events caso o usuario não defina
    if (events === undefined) this.events = ["touchstart", "click"];
    else this.events = events;

    this.activeDropDownMenu = this.activeDropDownMenu.bind(this);
  }
  //* Ativa o dropdownMenu e adiciona a função que observa o click fora dele
  activeDropDownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outSideClick(element, this.activeClass, () => {
      element.classList.remove(this.activeClass);
    });
  }
  //* Adiciona os eventos ao dropdownMenu
  addDropDownMenuEvent() {
    this.dropdownmenus.forEach((item) => {
      this.events.forEach((userevent) => {
        item.addEventListener(userevent, this.activeDropDownMenu);
      });
    });
  }
  init() {
    if (this.addDropDownMenuEvent.length) this.addDropDownMenuEvent();
    return this;
  }
}

