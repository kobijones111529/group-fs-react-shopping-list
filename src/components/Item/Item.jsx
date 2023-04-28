import axios from 'axios';
import { useState } from 'react';
// Targeting the Grocery Items with a new component:

function Item(props) {
    // const [isBought, setIsBought] = useState('false')

    // need a click handler for the buy button to conditionally render 
    const handleBuy = () => {

        console.log('TRIED TO BUY')
        axios({
            method: 'PUT',
            url: `/groceries/buy/${props.id}`,
            data: 'true'
        }).then ((res) => {
            console.log("Congratulations on your purchase 🍻");
        }).catch((err) => {
            console.log("Couldn't process purchase", err);
        })
    
    }

    // conditional render of buttons if an item is purchased
    const renderButtons = () => {
        if (!props.purchased) {
            return (
                <p>Purchased</p>
            )
        }
        else {
            return (
                <>
                    <button onClick={handleBuy}>Buy</button>
                    <button>Remove</button>
                </>
            )
        }
    }


    return (
        <>
            <p>{props.name}</p>
            <p>{props.quantity} {props.unit}</p>
            <p>{renderButtons()}</p>
        </>
    );
}

export default Item;