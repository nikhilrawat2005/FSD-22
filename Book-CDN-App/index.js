function Book(){
    const image=React.createElement("img",{src:"", width: "200px", height: "300px"},null);
        const title=React.createElement("h2",{color:"red"},"Book Title");
        const price=React.createElement("p",{color:"blue"},"$19.99");
        const bin =React.createElement("button",{color:"green"},"Add to Cart");
        const div=React.createElement("div",{className:"book"},image,title,price,bin);
    return div;
}

function App(){
    const bookstore=bookdata.map((b)=>
    Book(b)
    );
    return React.createElement("div", null, bookstore);
}
const parent=document.getElementById("root");
const root=ReactDOM.createRoot(parent);
root.render(App());