const bookdata=[
    {image:"",price:234},
    {image:"",price:234},
    {image:"",price:234}
]

function Book(){
const div=document.createElement("div");
div.setAttribute("class","book");
const image=document.createElement("img");
image.setAttribute("src",bookdata.image);
image.setAttribute("height","200px");
image.setAttribute("width","200px");
const h2=document.createElement("h2");
h2.innerText="Price:"+bookdata.price;
h2.style.color="blue";
const bt=document.createElement("button");
bt.innerText="AddToCart";
div.appendChild(image);
div.appendChild(h2);
div.appendChild(bt);
const parent=document.getElementById("book");
parent.appendChild(div);
return div;
}

const bookStore=bookdata.map((b)=>(
    Book()
))

const parent=document.getElementById("bookStore");
for(i of bookStore){
    parent.appendChild(i);
}