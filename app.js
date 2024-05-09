const toggleMenu = () => {
    const navigation = document.querySelector(".navigation");

    const burgerMenu = document.querySelector(".menu-icon");
    const src = burgerMenu.getAttribute("src");
    
    const isBurger = src === "images/menu_hamburguer 50.png";
    const iconName = isBurger ? "images/icons8-multiplicar-50.png":
        "images/menu_hamburguer 50.png";

    burgerMenu.setAttribute("src", iconName);

    if (!isBurger) {
        navigation.classList.add
        ("navigation--mobile--fadeout");
        setTimeout(() => {
            navigation.classList.toggle("navigation--mobile");

        }, 300);

    }else{
        navigation.classList.remove
        ("navigation--mobile--fadeout");
        navigation.classList.toggle("navigation--mobile");
    }
}



