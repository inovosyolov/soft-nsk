trackSliderValueChange()
enableSelectMenu()
enableMenuBurger()

function enableMenuBurger() {
    const menu = document.querySelector('.menu');
    const menuBurger = document.querySelector('.menu__burger');
    const menuBurgerSpans = document.querySelectorAll('.menu__burger-span');

    menuBurger.addEventListener("click", () => {
        menu.classList.toggle("active");
        for (span of menuBurgerSpans) {
            span.classList.toggle("active");
        }
    });
}

function trackSliderValueChange() {
    const orderFormSliderValue = document.querySelector('.making-order .range-slider__header-value');
    const orderFormSlider = document.querySelector('.making-order .range-slider__input');

    orderFormSlider.addEventListener('input', () => {
        orderFormSliderValue.textContent = `${orderFormSlider.value} %`;
    });
}

function enableSelectMenu() {
    const select = document.querySelector('.select-menu');
    const selectDrop = document.querySelector('.select-menu__list');
    const elementsList = document.querySelectorAll('.select-menu__list-item');
    const titleList =  document.querySelector('.select-menu__header-text');

    select.addEventListener("click", () => {
        selectDrop.classList.toggle("active");
        select.classList.toggle("active");
    });

    elementsList.forEach((element) => {
        element.addEventListener('click', () => {
            titleList.innerHTML = element.innerHTML
        });
    });
}
