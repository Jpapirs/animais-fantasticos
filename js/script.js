import Accordion from "./modules/accordionList.js";
import initModal from "./modules/modal.js";
import initToolTip from "./modules/ToolTip.js";
import initDropDownMenu from "./modules/MenuDropDown.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initAnimaScroll from "./modules/scroll-animation.js";
import initFuncionamento from "./modules/funcionamento.js";
import intFetchAnimais from "./modules/animaisFecth.js";
import initFetchBTC from "./modules/btcFecth.js";

const accordion = new Accordion(".js-accordion dt");
accordion.init();

initModal();
initToolTip();
initDropDownMenu();
initMenuMobile();
initAnimaScroll();
initFuncionamento();
intFetchAnimais();
initFetchBTC();
