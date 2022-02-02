import  { $content} from "./index";
import { renderMenu } from "./menu";
import { renderNavBar } from "./navbar";

const renderHome = (()=> {
    
    const $menuBtn = document.createElement("button");
    $menuBtn.classList.add("btn");
    $menuBtn.classList.add("order-now");
    $menuBtn.textContent = "Order Now!"
    $menuBtn.onclick = () => {
        $content.innerHTML = '';
        renderNavBar();
        renderMenu();
        var current = document.getElementsByTagName('a');
        current[2].className = 'active';
    }

    const $p = document.createElement("p");
    $p.textContent = "Tasty and fall off the bone!"

    const $h1 = document.createElement("h1");
    $h1.textContent = "Come on down and eat some ribs!";

    const $homeInfo = document.createElement("div");
    $homeInfo.classList.add("home-info");

    const $homeContainer = document.createElement("section");
    $homeContainer.classList.add("home-container");

    $homeInfo.appendChild($h1);
    $homeInfo.appendChild($p);
    $homeInfo.appendChild($menuBtn);
    $homeContainer.appendChild($homeInfo);

    $content.appendChild($homeContainer);


})

export{renderHome as renderHome};