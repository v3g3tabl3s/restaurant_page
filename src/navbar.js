import { renderAbout } from "./about";
import { renderHome } from "./home";
import  { $content} from "./index";
import { renderMenu } from "./menu";

const renderNavBar = (() => {


    var current = document.getElementsByClassName("active");
    const navItems = ["about","menu", "home"];

    const $ul = document.createElement("ul");
    var $li = [];
    var $a = [];
    for(let i = 0; i< navItems.length;i++){
    //var $li = document.createElement("li");
    //var $a = document.createElement("a");

    $li.push(document.createElement("li"));
    $a.push(document.createElement("a"));
      
   //   $a[i].className = 'active';
    $a[i].innerText = navItems[i];
    $a[i].href = "#";
    
    switch(navItems[i]){
      case "home":
        $a[i].onclick = () => {
          $content.innerHTML = "";
          renderNavBar();
          renderHome();
          var current = document.getElementsByTagName('a');
          current[2].className = 'active';

        };
        break;
        case "about":
          $a[i].onclick = () => {
            $content.innerHTML = "";
            console.log($a);
            renderNavBar();
            renderAbout();
            var current = document.getElementsByTagName('a');
            current[0].className = 'active';
          };
          break;

        case "menu":
          $a[i].onclick = () => {
            $content.innerHTML = "";
            renderNavBar();
            renderMenu();
            var current = document.getElementsByTagName('a');
            current[1].className = 'active';
          }

          default:
            break;

    }

    $li[i].appendChild($a[i]);
    $ul.appendChild($li[i]);
}
  ;
 
  

  

  const $label = document.createElement("label");
  $label.classList.add("logo");
  $label.textContent = "Restaurant Page";

  
  const $nav = document.createElement("nav");
  $nav.appendChild($label);
  $nav.appendChild($ul);

  $content.appendChild($nav);
    

})

export{renderNavBar as renderNavBar};