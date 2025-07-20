import outSideClick from "./outsideclick.js";

export default function initDropDownMenu() {}

const dropdownmenus = document.querySelectorAll("[data-dropdown]");

dropdownmenus.forEach((item) => {
  ["touchstart", "click"].forEach((userevent) => {
    item.addEventListener(userevent, handleclick);
  });
});

function handleclick(event) {
  event.preventDefault();
  this.classList.add("active");
  outSideClick(this, ["touchstart", "click"], () => {
    this.classList.remove("active");
  });
}

/*
Selecionei o menu;
Coloquei um .foreach nele e para que se por acaso alguem tocar(mobile) ou clicar nele, ele fique na tela e, quando alguem clicar nele de novo, saia.
Gostaria de ressaltar que usei array para fazer os eventos, nem sabia que isso era possivel!!!
*/
