import Accordion from "./modules/accordionList.js";
import Modal from "./modules/modal.js";
import ToolTip from "./modules/ToolTip.js";
import DropDownMenu from "./modules/MenuDropDown.js";
import MenuMobile from "./modules/menu-mobile.js";
import ScrollAnima from "./modules/scrollAnima.js";
import initFuncionamento from "./modules/funcionamento.js";
import intFetchAnimais from "./modules/animaisFecth.js";
import initFetchBTC from "./modules/btcFecth.js";

const accordion = new Accordion(".js-accordion dt");
accordion.init();

const modal = new Modal(
  '[data-modal = "abrir" ]',
  '[data-modal = "fechar"]',
  '[data-modal = "container"]'
);
modal.init();

const tooltip = new ToolTip("[data-tooltip]");
tooltip.init();
tooltip.init();

const scroll = new ScrollAnima(".js-animation");
scroll.init();

const dropDownMenu = new DropDownMenu("[data-dropdown]");
dropDownMenu.init();

const menuMobile = new MenuMobile(
  '[data-menu="button"]',
  '[data-menu="lista"]'
);
//* Lembrando que não é necessario usar o .init(), você pode ativa-lo no contructor da class
menuMobile.init();

initFuncionamento();
intFetchAnimais();
initFetchBTC();
