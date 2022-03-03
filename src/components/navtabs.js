import React from "react";
import { Tab, Tabs } from 'react-bootstrap';

export default function Navtabs({handleTabValue}){
  
  return(
    <div>
            <Tabs className="sample2" defaultActiveKey="Popularity" onSelect={(e)=>handleTabValue(e)}>
                  <Tab eventKey="atoz" title="A - Z">

                  </Tab>
                  <Tab eventKey="ztoa" title=" Z - A">

                  </Tab>
                  <Tab eventKey="low" title="Price - Low to High">

                  </Tab>
                  <Tab eventKey="high" title="Price - High to Low">

                  </Tab>
                  <Tab eventKey="older" title="Newest First">

                  </Tab>
                  </Tabs>
    </div>
  )
}