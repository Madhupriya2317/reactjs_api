import React from "react";


export default function SidebarNav({handleChecked,handleSelect}){
  
 return(
  <div>
    <div className="sidebar">
       <div className="radio-section">
       <h5>Sort by</h5>
         <input type="radio" id="atoz" name="atoz" value="atoz" onChange={handleChecked} />
         <label htmlFor="atoz">A - Z</label><br />
         <input type="radio" id="ztoa" name="atoz" value="ztoa" onChange={handleChecked} />
         <label htmlFor="ztoa">Z - A</label><br />
         <hr className="text-white"/>
      </div>
      <div className="radio-section">
      <h5>Sort by</h5>
         <input type="radio" id="newer" name="newer" value="newer" onChange={handleChecked} />
         <label htmlFor="newer">Newer - Older</label><br />
         <input type="radio" id="older" name="newer" value="older" onChange={handleChecked} />
         <label htmlFor="older">Older - Newer</label><br />
         <hr className="text-white"/>
      </div>
      <div className="radio-section">
      <h5>Price</h5>
         <input type="radio" id="low" name="low" value="low" onChange={handleChecked} />
         <label htmlFor="low">Low - High</label><br />
         <input type="radio" id="high" name="low" value="high" onChange={handleChecked} />
         <label htmlFor="high">High - Low</label><br />
         <hr className="text-white"/>
      </div>
      <div className="selection">
                    <select onChange={handleSelect}>
                        <option value="all">All</option>
                        <option value="men">Men's Clothing</option>
                        <option value="jewel">Jewelery</option>
                        <option value="Electronics">Electronics</option>
                        <option value="women">Women's Clothing</option>
                    </select>
       </div>
    </div>
  </div>
)
}