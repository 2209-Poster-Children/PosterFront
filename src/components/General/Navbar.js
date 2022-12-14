import './general.css';
import { Link} from 'react-router-dom';

const Navbar = ({loggedIn}) => {

  console.log(loggedIn)
  return (
    <div className="navbar-return">
      
      <nav className="navbar">
        
        <Link to="/">Home</Link> 

        <Link to="/shop/page/1">Shop</Link>

        {
          loggedIn ? 
          (<Link to="profile" id="profile-toggle">
            Profile</Link>)
            :
            (<Link to="login" id="login-toggle">
              Login</Link>)
        }

        <Link to="cart">Cart</Link>
      
      </nav>
    </div>
  )
}

export default Navbar;