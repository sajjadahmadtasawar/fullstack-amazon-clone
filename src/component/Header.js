import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const signOut = () => {
    if (user) auth.signOut();
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
          alt="amazon logo"
        ></img>
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text"></input>
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header_nav">
        <Link to={!user && '/login'}>
          <div onClick={signOut} className="navbar__option">
            <span className="navbar__optionLineOne">
              Hello {user ? user?.email.split('@')[0] : 'Guest'}
            </span>
            <span className="navbar__optionLineTwo">
              {user ? 'Sign Out' : 'Sign In'}
            </span>
          </div>
        </Link>

        <Link to="/orders">
          <div className="navbar__option">
            <span className="navbar__optionLineOne">Returns</span>
            <span className="navbar__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <div className="navbar__option">
          <span className="navbar__optionLineOne">Your</span>
          <span className="navbar__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <span className="navbar__optionBasket">
            <i className="navbar__basket fas fa-shopping-cart"></i>
            <span className="navbar__optionCount navbar__optionLineTwo">
              {basket?.length}
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
