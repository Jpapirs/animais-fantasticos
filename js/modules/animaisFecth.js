import AnimaNumeros from "./anima-numeros.js";

export default function intFetchAnimais() {
  async function fetchAnimais(url) {
    const animaisResponse = await fetch(url);
    const animaisDados = await animaisResponse.json();
    const numerosGrid = document.querySelector(".numeros-grid");
    animaisDados.forEach((animal) => {
      const divAnimal = createAnimal(animal);
      numerosGrid.appendChild(divAnimal);
    });
  }
  const animaNumeros = new AnimaNumeros("[data-numero]", ".numeros", "ativo");
  animaNumeros.init();
  fetchAnimais("./animaisapi.json");
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }
}
