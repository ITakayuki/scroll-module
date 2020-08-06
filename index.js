function smoothScroll(element, breakpoint){
    const target = document.querySelector(element);

    if(element) {
        target.scrollIntoView({
            behavior: "smooth",
            block: breakpoint
        });
    }
}

export default smoothScroll;
