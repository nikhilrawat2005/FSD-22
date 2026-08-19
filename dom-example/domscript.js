function addParagraph() {
    const para = document.createElement("p");
    para.innerText = "This is a new paragraph";
    para.style.color = "red";
    const el = document.getElementById("para");
    el.appendChild(para);
}
function  removeParagraph() {
    const el = document.getElementById("para");
    const para = el.querySelector("p");
    el.removeChild(para);
}
function removeAllParagraphs() {
    const el = document.getElementById("para");
     const parent=document.getElementById("para");
    parent.removeChild(el);
}
