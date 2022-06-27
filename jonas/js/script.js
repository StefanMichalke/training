let pageWrapper = document.querySelector("eon-ui-page-wrapper");
pageWrapper.addEventListener("pageWrapperLoad", () => {
    setBackgroundForSection();

});

function setBackgroundForSection() {
    let dropdownElement = document.querySelector("eon-ui-dropdown");
    dropdownElement.addEventListener("valueChanged", (event) => {
        console.log("value changed")
        setBackgroundsForChilds(event.detail)
    });
}

function setBackgroundsForChilds(backgroundColor) {
    const headline = document.querySelector("#section-1 eon-ui-headline");
    const rteRenderer = document.querySelector("#section-1 eon-ui-rte-renderer");
    const sectionChanged = document.getElementById("section-1")
    let sectionBackgroundcolor = backgroundColor;

    sectionChanged.setAttribute("background-color", sectionBackgroundcolor);
    switch (sectionBackgroundcolor) {
        case "limeyellow":
            headline.setAttribute("scheme", "bordeaux");
            rteRenderer.setAttribute("scheme", "red");
            break;
        case "turquoise":
            headline.setAttribute("scheme", "white");
            rteRenderer.setAttribute("scheme", "white")
            break;
        case "bordeaux":
            headline.setAttribute("scheme", "white");
            rteRenderer.setAttribute("scheme", "white")
            break;
        case "red":
            headline.setAttribute("scheme", "white")
            rteRenderer.setAttribute("scheme", "white")
            break;
        default:
            headline.setAttribute("scheme", "red");
            rteRenderer.setAttribute("scheme", "red");
            console.log("setting default value red")
        // default Color
    }
}








