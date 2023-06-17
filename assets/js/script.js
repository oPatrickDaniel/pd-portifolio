
const navItens = document.querySelectorAll('.nav-link');

document.addEventListener("DOMContentLoaded", () => {
    enableNavWithClick();
})

document.addEventListener("scroll", () => {
    enableNavWithScroll()
})

function enableNavWithClick() {
    navItens.forEach(nav => {
        nav.addEventListener("click", (event) => {
            for (let i of navItens) {
                i.classList.remove("active")
            }
            event.target.classList.add("active");
        })
    });
}

function enableNavWithScroll() {
    let pageSections = document.querySelectorAll("section");
    let currentPosition = window.scrollY


    // for (let i = 0; 1 < pageSections.length; i++) {
    //     console.log(i)
    //     // section = pageSections[i]
    //     // let offsetTop = section.offsetTop;
    //     // let sectionHeight = section.offsetHeight;

    //     // if (currentPosition >= offsetTop && currentPosition < (offsetTop + sectionHeight)) {
    //     //     section.classList.add("active");
    //     // } else {
    //     //     section.classList.remove("active");
    //     // }
    // }
}
