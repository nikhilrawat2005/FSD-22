import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/counter">Counter App</Link>
      <Link to="/stopwatch">Stopwatch</Link>
     
    </div>
  )
}

export default Navbar