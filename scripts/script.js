// scroll

const main = document.querySelector("main");
const DISTANCE_FROM_TOP = 8;

const to_description = document.getElementById("to_description");
const description = document.getElementById("description");

const to_syntax = document.getElementById("to_syntax");
const syntax = document.getElementById("syntax");

const to_example = document.getElementById("to_example");
const example = document.getElementById("example");

function scrollToElement(targetElement) {
    main.scrollTo({
        top: targetElement.getBoundingClientRect().top - main.getBoundingClientRect().top - DISTANCE_FROM_TOP,
        left: 0,
        behavior: "smooth"
    });
}

const sections = [
    { button: to_description, element: description },
    { button: to_syntax, element: syntax },
    { button: to_example, element: example },
];

sections.forEach(({ button, element }) => {
    button.addEventListener("click", () => {
        scrollToElement(element);
    });
});