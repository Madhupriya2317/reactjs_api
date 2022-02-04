import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import NotificationBadge from 'react-notification-badge';
import { Effect } from "react-notification-badge";
import {useNavigate}from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Addtocart(){
    
    let navigate = useNavigate();
    const count = useSelector(
        (state) => state.counterReducer
    );
function handleCartpage(){
    navigate('/cartitem')
}

    return(
        <div >
            <button className="notification" onClick={handleCartpage}>
                <NotificationBadge className="badge" count={count.count} effect={[Effect.SCALE]} />
                <FontAwesomeIcon icon={faShoppingCart} className="shoppingcart" />
            </button>
        </div>
    )
}