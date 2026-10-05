import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./components/Home"
import Counter from "./components/Counter"
import "./App.css"
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}>
      <Route path="/counter" element={<Counter/>}/>
      <Route path="/stopwatch" element={<h1>Stopwatch App</h1>}/>
      <Route path="*" element={<h1>Error: Page not Found</h1>}/>
      </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App