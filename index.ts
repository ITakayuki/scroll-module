function Argument(
    element:string,
    breakpoint: "start"|"center"|"end"|"nearest"
) {
    const target = document.querySelector(element);

    if(target) {
        target.scrollIntoView({
            behavior: "smooth",
            block: breakpoint
        });
    }
}

export default Argument;
