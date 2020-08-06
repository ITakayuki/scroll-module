function smoothScroll(element){
    const target = document.querySelector(element);
    target.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

export default smoothScroll;
