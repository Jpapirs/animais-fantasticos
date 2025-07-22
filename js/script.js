import Accordion from "./modules/accordionList.js";
import Modal from "./modules/modal.js";
import ToolTip from "./modules/ToolTip.js";
import initDropDownMenu from "./modules/MenuDropDown.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initAnimaScroll from "./modules/scroll-animation.js";
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

initDropDownMenu();
initMenuMobile();
initAnimaScroll();
initFuncionamento();
intFetchAnimais();
initFetchBTC();
