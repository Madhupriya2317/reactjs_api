import React from "react";


export default function SidebarNav({handleChecked,HandleSelectM,HandleSelectJ,HandleSelectE,HandleSelectW,HandleUncheck,isselectM,isselectJ,isselectE,isselectW,isselectA,isselectZ,isselectN,isselectL,isselectO,isselectH,isselect1,isselect2,handlePriceRange1,handlePriceRange2}){    

 return(
  <div>
    <div className="sidebar">
       <div className="radio-section">
       <h5>Sort by</h5>
         <input type="radio" id="atoz" name="atoz" value="atoz" onChange={handleChecked} checked={isselectA} />
         <label htmlFor="atoz">A - Z</label><br />
         <input type="radio" id="ztoa" name="atoz" value="ztoa" onChange={handleChecked} checked={isselectZ} />
         <label htmlFor="ztoa">Z - A</label><br />
         <hr className="text-white"/>
      </div>
      <div className="radio-section">
      <h5>Sort by</h5>
         <input type="radio" id="newer" name="newer" value="newer" onChange={handleChecked} checked={isselectN} />
         <label htmlFor="newer">Newer - Older</label><br />
         <input type="radio" id="older" name="newer" value="older" onChange={handleChecked} checked={isselectO} />
         <label htmlFor="older">Older - Newer</label><br />
         <hr className="text-white"/>
      </div>
      <div className="radio-section">
      <h5>Price</h5>
         <input type="radio" id="low" name="low" value="low" onChange={handleChecked} checked={isselectL} />
         <label htmlFor="low">Low - High</label><br />
         <input type="radio" id="high" name="low" value="high" onChange={handleChecked} checked={isselectH} />
         <label htmlFor="high">High - Low</label><br />
         <hr className="text-white"/>
      </div>
      <div className="radio-section">
      <h5>Price Range</h5>
         <input type="radio" value="1-499" name="pricerange" onChange={handlePriceRange1} checked={isselect1} />
         <label htmlFor="1-499"> 1-499</label><br />
         <input type="radio" value="500-999"  name="pricerange" onChange={handlePriceRange2} checked={isselect2}  />
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
      
     <div className="apply">
        <button onClick={HandleUncheck}>Clear</button>
     </div>
      {/* <div className="selection">
                    <select onChange={HandleSelect}>
                        <option value="all">All</option>
                        <option value="men">Men's Clothing</option>
                        <option value="jewel">Jewelery</option>
                        <option value="Electronics">Electronics</option>
                        <option value="women">Women's Clothing</option>
                    </select>
       </div> */}
    </div>
  </div>
)
}