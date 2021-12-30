import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import NotificationBadge from 'react-notification-badge';
import { Effect } from "react-notification-badge";

export default function Addtocart({count}){
    
    return(
        <div className="notification">
            <NotificationBadge className="badge" count={count} effect={[Effect.SCALE]} />
            <FontAwesomeIcon icon={faShoppingCart} className="shoppingcart" />
        </div>
    )
}