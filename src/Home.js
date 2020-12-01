import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
              <img className="home__image" src=" https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/WAVE1-GW/5_DesktopHero_Unrec_1500x600-aa._CB419164846_.jpg" alt ="" />
            </div>
            <div className="home__row">
            <Product 
            id="1234"
            title="Mens wear checked shirt "
            price= {799}
            image="https://m.media-amazon.com/images/I/51vz9ooykmL._AC_UL480_FMwebp_QL65_.jpg " 
            rating={4}
            />
            <Product
            id="4563"
            title="womens stylish shirts "
            price={755}
            image="https://m.media-amazon.com/images/I/616Iar76TLL._AC_UL480_FMwebp_QL65_.jpg " 
            rating={3}
            />
            </div>
            <div className="home__row">
            <Product 
            id="34526"
            title="Smart watch "
            price={1000}
            image="https://m.media-amazon.com/images/I/51U-OM4Hu9L._AC_UL480_FMwebp_QL65_.jpg " 
            rating={4}
            />
            <Product 
            id="998777"
            title="Shoes for both men and women "
            price={1499}
            image=" https://m.media-amazon.com/images/I/61tiJgok3+L._AC_UL480_FMwebp_QL65_.jpg" 
            rating={3}
            />
            <Product
            id="90087"
            title="Apple iphone 11 with 8gb ram "
            price={54999}
            image="https://m.media-amazon.com/images/I/51kGDXeFZKL._AC_UY327_FMwebp_QL65_.jpg " 
            rating={5}
            />
            </div>
            <div className="home__row">
            <Product
            id="56093"
            title="Boom head sets "
            price={1744}
            image=" https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_UL480_FMwebp_QL65_.jpg" 
            rating={4}
            />
            </div>
        </div>
    )
}

export default Home;
