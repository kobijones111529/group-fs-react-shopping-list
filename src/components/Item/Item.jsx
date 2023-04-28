import axios from 'axios';
import { useState } from 'react';
// Targeting the Grocery Items with a new component:

function Item(props) {
    const [isBought, setIsBought] = useState('false')
    // need a click handler for the buy button to conditionally render 
    const handleBuy = () => {
        // check if grocery.puchased is FALSE
        if(!props.purchased){
            console.log('TRIED TO BUY')
            axios({
                method: 'PUT',
                url: `/groceries/buy/${props.grocery.id}`,
                data: 'true'
            }).then ((res) => {
                // need to run our conditional render function here
                console.log("Congratulations on your purchase 🍻");
            }).catch((err) => {
                console.log("Couldn't process purchase", err);
            })
        }
    }


    return (
        <>
            <p>{props.name}</p>
            <p>{props.quantity} {props.unit}</p>
            <button onClick={handleBuy}>Buy</button>
            <button>Remove</button>
        </>
    );
}

export default Item;