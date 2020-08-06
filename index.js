function ScrollModule(element, breakpoint){
    let BP;
    if(breakpoint == null || breakpoint == undefined){
        BP = "start";
    }else{
        BP = breakpoint;
    }
    const target = document.querySelector(element);
    if(target){
        target.scrollIntoView({
            behavior: "smooth",
            block: BP
        })
    }
}

export default ScrollModule;
