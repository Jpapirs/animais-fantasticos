import outSideClick from "./outsideclick.js";

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuLista = document.querySelector('[data-menu="lista"]');
  const eventos = ["click", "touchstart"];

  function openMenu(event) {
    menuLista.classList.add("active");
    menuButton.classList.add("active");
    outSideClick(menuLista, eventos, () => {
      menuLista.classList.remove("active");
      menuButton.classList.remove("active");
    });
  }
  eventos.forEach((userEvent) =>
    menuButton.addEventListener(userEvent, openMenu)
  );
}

