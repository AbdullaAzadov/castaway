const $nav = document.querySelector(".header__nav");
$nav?.children[0]?.setAttribute("class", "active");

function onChangeNav(i) {
    for (const el of $nav.children) {
        el.setAttribute("class", "");
    }
    $nav.children[i].setAttribute("class", "active");
}
