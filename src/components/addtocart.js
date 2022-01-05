import React,{useContext} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import NotificationBadge from 'react-notification-badge';
import { Effect } from "react-notification-badge";
import { CounterContext } from "../context/counterContext";

export default function Addtocart(){
    const {add} = useContext(CounterContext);
    
    return(
        <div className="notification">
            <NotificationBadge className="badge" count={add} effect={[Effect.SCALE]} />
            <FontAwesomeIcon icon={faShoppingCart} className="shoppingcart" />
        </div>
    )
}