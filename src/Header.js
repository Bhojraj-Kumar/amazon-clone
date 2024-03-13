import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketSharpIcon from '@mui/icons-material/ShoppingBasketSharp';
import { Link } from 'react-router-dom';
import { UseStateValue } from './StateProvider';
import { auth } from './firebase';

const Header = () => {
 const [{Basket, user}, dispatch] = UseStateValue();
 const handleAuthentication = () => {
   if(user){
    auth.signOut()
   }
 }
  return (
    <div className='header__main'>
       <Link to='/'>
       <img className='header__logo' 
          src='https://pngimg.com/uploads/amazon/amazon_PNG25.png' 
          alt='amazon'/>
       </Link>
        
        <div className='header__search'>
          <input className='header__input'
          type='text'/>
          <SearchIcon className='header__searchIcon'/>
        </div>

        <div className='header__nav'>
         <Link to={!user&&'/login'}>
         <div className='header__option' onClick={handleAuthentication}>
                <span className='header__optionOne'>
                Hello  {!user? ' Guest!': user.email}
                </span>
                <span className='header__optionTwo'>
                  { user ? 'Sign Out' : 'Sign In'} 
                </span>
          </div>
         </Link>
         
          <div className='header__option'>
                <span className='header__optionOne'>
                   Return
                </span>
                <span className='header__optionTwo'>
                   Orders
                </span>
              
          </div>
          <div className='header__option'>
                <span className='header__optionOne'>
                   Your 
                </span>
                <span className='header__optionTwo'>
                   Prime
                </span>
          </div>
          <Link to='/checkout'>
          <div className='header__shopping'>
               <ShoppingBasketSharpIcon className='header__shoppingIcon'/>
               <span className='header__optionTwo header__count'>{Basket?.length}</span>
          </div>
          </Link>
          
        </div>      
    </div>
  )
}

export default Header