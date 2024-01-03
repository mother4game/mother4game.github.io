



var obscurable = [
    document.getElementById("HEADER-SIZE"),
    document.getElementById("HEADER-OBSCURE"),
    document.getElementById("NAV_BRAND")
]

window.onload = function() {
    applyObscure();
    obscurable.forEach(element => {
        element.classList.add("transition-time")
        element.classList.remove("transition-wait-page-load")
    });
};

window.onscroll = function() {
    applyObscure();
};

function applyObscure() {

    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        obscurable.forEach(element => {
            element.classList.add("obscure")
        });
    } else {
        obscurable.forEach(element => {
            element.classList.remove("obscure")
        });
    }

    const ttimestyle = document.querySelector('.transition-time');
}