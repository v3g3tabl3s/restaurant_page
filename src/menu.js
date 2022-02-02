import  { $content} from "./index";

const renderMenu = (()=>{

    const $menu = document.createElement("div");
    $menu.classList.add("menu-container");
    $menu.innerHTML = `<div class="menu-container">
    <h1>Menu</h1>
    <div class="menu-info">
        <div class="menu-card">
            <img src="../images/smoker-bg.jpg" class="menu-card-img">
            <h2>Rib Dinner</h2>
            <p>Full slab of pork ribs with baked beans</p>
            <div class="menu-card-likes">
                <div>
                    <i class="material-icons">thumb_up</i>
                    420
                </div>
                <div>
                    <i class="material-icons">thumb_down</i>
                    69
                </div>
            </div>
        </div>
        <div class="menu-card">
            <img src="../images/smoker-bg.jpg" class="menu-card-img">
            <h2>Rib Dinner</h2>
            <p>Full slab of pork ribs with baked beans</p>
            <div class="menu-card-likes">
                <div>
                    <i class="material-icons">thumb_up</i>
                    420
                </div>
                <div>
                    <i class="material-icons">thumb_down</i>
                    69
                </div>
            </div>
        </div>
        <div class="menu-card">
            <img src="../images/smoker-bg.jpg" class="menu-card-img">
            <h2>Rib Dinner</h2>
            <p>Full slab of pork ribs with baked beans</p>
            <div class="menu-card-likes">
                <div>
                    <i class="material-icons">thumb_up</i>
                    420
                </div>
                <div>
                    <i class="material-icons">thumb_down</i>
                    69
                </div>
            </div>
        </div>
        <div class="menu-card">
            <img src="../images/smoker-bg.jpg" class="menu-card-img">
            <h2>Rib Dinner</h2>
            <p>Full slab of pork ribs with baked beans</p>
            <div class="menu-card-likes">
                <div>
                    <i class="material-icons">thumb_up</i>
                    420
                </div>
                <div>
                    <i class="material-icons">thumb_down</i>
                    69
                </div>
            </div>
        </div>
    </div>
</div>`


$content.appendChild($menu);
});

//$content.appendChild($menu);


export {renderMenu as renderMenu};