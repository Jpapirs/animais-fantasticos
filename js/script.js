import Accordion from "./modules/accordionList.js";
import Modal from "./modules/modal.js";
import initToolTip from "./modules/ToolTip.js";
import initDropDownMenu from "./modules/MenuDropDown.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initAnimaScroll from "./modules/scroll-animation.js";
import initFuncionamento from "./modules/funcionamento.js";
import intFetchAnimais from "./modules/animaisFecth.js";
import initFetchBTC from "./modules/btcFecth.js";

const accordion = new Accordion(".js-accordion dt");
accordion.init();

const modal = new Modal('[data-modal = "abrir" ]','[data-modal = "fechar"]','[data-modal = "container"]');
modal.init();


initToolTip();
initDropDownMenu();
initMenuMobile();
initAnimaScroll();
initFuncionamento();
intFetchAnimais();
initFetchBTC();
