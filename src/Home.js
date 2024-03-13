import React from 'react'
import './Home.css'
import Product from './Product';


const Home = () => {
  return (
   <div className='home'>
       <div className='home__container'>
          <img className='home__image' 
          src='https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3740_.jpg' 
          alt=''/> 
          <div className='home__row'>
              <Product 
              id = '243459'
              title='The Lean Startup: How Today Entrepreneurs Use Continuous 
              Innovation to Create Radically Successful Businesses Hardcover'
               price={29.99} image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"  rating={5}/>
              <Product title='Ripple Junction Playstation Vintage Icons Adult T-Shirt'
              price={19.95} image='https://m.media-amazon.com/images/I/51Kdv2v95VS._AC_UL480_FMwebp_QL65_.jpg'
              rating={4}
              />
          </div> 
          <div className='home__row'>
              <Product 
              id = '243535'
              title='Amazfit Band 5 Activity Fitness Tracker with Alexa Built-in' price={39.99} 
              image ='https://m.media-amazon.com/images/I/61xSjdpeU0L._AC_UY327_FMwebp_QL65_.jpg'
              rating={4}
              />
              <Product 
              id='636638'
              title='Echo (4th Gen) | With premium sound, smart home hub, and Alexa | Twilight Blue' price={100}
              image='https://m.media-amazon.com/images/I/71yEX4ugtJL._AC_UY327_FMwebp_QL65_.jpg'
              rating={4}
              />
              <Product
              id='253377'
              title='Apple iPad Pro (12.9-inch, Wi-Fi, 64GB) - Silver (3rd Generation)' price={625.5}
              image='https://m.media-amazon.com/images/I/71+ud9p+tYL._AC_UY327_FMwebp_QL65_.jpg'
              rating={3}
              />

          </div> 
          <div className='home__row'>
              <Product 
              id='24372'
              title='SAMSUNG 49-inch Odyssey G9 Gaming Monitor | QHD, 240hz, 1000R Curved, QLED, NVIDIA G-SYNC & FreeSync | LC49G95TSSNXZA Model' price={1+","+195.70}
              image='https://m.media-amazon.com/images/I/61SQz8S+fEL._AC_SL1000_.jpg'
              rating={5}
              />
          </div> 
       </div>
   </div>
  )
}

export default Home;
