import './general.css';
import { Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar-return">
      
      <nav className="navbar">
        
        <Link to="/">Home</Link> 

        <Link to="shop">Shop</Link>

        <Link to="login">Login</Link>

        <span>Cart(no path yet)</span>
      
      </nav>
    </div>
  )
}

export default Navbar;