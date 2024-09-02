window.addEventListener("load", () => {

    let btn = document.querySelector(".nav__btn");
    let plus = document.querySelector(".btn__ico-plus");
    let close = document.querySelector(".btn__ico-close");
    let list = document.querySelector(".nav__list")

    btn.addEventListener("click", () => {
        plus.classList.toggle('btn__show');
        close.classList.toggle('btn__show');
        list.classList.toggle('list__open');
    })
});
