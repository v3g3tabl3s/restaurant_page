import{renderNavBar} from "./navbar";
import{renderHome} from "./home";
import{renderAbout} from "./about";

const $content = document.querySelector("#content");

renderNavBar();
renderHome();



export{$content};