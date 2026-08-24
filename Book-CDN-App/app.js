import Book from "./book.js";
const bookdata=[
    {image: "",title:"ReactJs",price:465},
    {image: "",title:"NodeJs",price:571},
    {image: "",title:"ExpressJs",price:450},
    {image: "",title:"ReactJs",price:465},
    {image: "",title:"NodeJs",price:571},
    {image: "",title:"ExpressJs",price:450},
]
function App(){
    const bookstore = bookdata.map((b)=>{
       return Book(b);
    })
    return React.createElement("div",{className: "bookstore"},[...bookstore])
}
export default App;