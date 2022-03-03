import React from "react";
import ReactStars from "react-rating-stars-component";

export default function SidebarNav({HandleSelectM,HandleSelectJ,HandleSelectE,HandleSelectW,HandleUncheck,isselectM,isselectJ,isselectE,isselectW,handlePriceRange,handleRatingChange,starsKey,priceFilter}){        

 return(
  <div>
    <div className="sidebar">
      <div className="radio-section">
      <h5>Price Range</h5>
      <input type="radio" value="1-499" onChange={handlePriceRange} checked={priceFilter === '1-499'}  />
         <label htmlFor="1-499"> 1-499</label><br />
         <input type="radio" value="500-999"  onChange={handlePriceRange} checked={priceFilter === '500-999'}  />
         <label htmlFor="500-999"> 500-999</label><br />
      </div><hr className="text-white" /> 
      <div className="radio-section">
      <h5>Category</h5>
      <input type="checkbox" id="men" name="men's clothing" value="men's clothing" onChange={HandleSelectM} checked={isselectM} />
         <label htmlFor="men"> Men's Clothing</label><br />
         <input type="checkbox" id="jewel" name="jewelery" value="jewelery" onChange={HandleSelectJ} checked={isselectJ} />
         <label htmlFor="jewel"> Jewelery</label><br />
         <input type="checkbox" id="electronics" name="electronics" value="electronics" onChange={HandleSelectE} checked={isselectE} />
         <label htmlFor="electronics"> Electronics</label><br />
         <input type="checkbox" id="women" name="women's clothing" value="women's clothing" onChange={HandleSelectW} checked={isselectW} />
         <label htmlFor="women"> Women's Clothing</label><br />
      </div><hr className="text-white" />
      {/* <div className="radio-section">
         <h5>Ratings</h5>
         <ReactStars count={5} onChange={handleRatingChange} key={starsKey} size={35} color2={'#ffd700'} />
      </div><hr className="text-white" /> */}
     <div className="apply">
        <button type="reset" onClick={HandleUncheck}>Clear</button>
     </div>
      
    </div>
  </div>
)
}