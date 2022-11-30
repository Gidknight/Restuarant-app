import './Navbar.css';
import {gericht} from '../../assets'
import {Menu, RestaurantMenu} from '@mui/icons-material'

const Navbar = () => (
  <nav className="app__nav">
    <div className="app__nav_logo">
      <img src={gericht} alt="logo" />
    </div>
    <div className="app__nav_list">
      <ul>
        <li className='p__opensans'><a href='#Home'>Home</a></li>
        <li className='p__opensans'><a href='#About'>About</a></li>
        <li className='p__opensans'><a href='#Menu'>Menu</a></li>
        <li className='p__opensans'><a href='#Awards'>Awards</a></li>
        <li className='p__opensans'><a href='#Contact'>Contact</a></li>
      </ul>
    </div>
    
    <div className="app__nav_signin">
      <a href='#login' className='p__opensans'>Login | Signup</a>
      <div />
      <a href="#booking" className='p__opensans'>Book a Table</a>
    </div>

    <div className="app__navbar-smallscreen">
      <Menu color='white' fontSize='27' onClick={() =>{}}  />
      <div className="app__navbar-smallscreen_overlay">
        <RestaurantMenu />
      <div className="app__nav-smallscreen_list">
        <ul>
          <li className='p__opensans'><a href='#Home'>Home</a></li>
          <li className='p__opensans'><a href='#About'>About</a></li>
          <li className='p__opensans'><a href='#Menu'>Menu</a></li>
          <li className='p__opensans'><a href='#Awards'>Awards</a></li>
          <li className='p__opensans'><a href='#Contact'>Contact</a></li>
        </ul>
      </div>
      </div>
    </div>
    
  </nav>
);

export default Navbar;
