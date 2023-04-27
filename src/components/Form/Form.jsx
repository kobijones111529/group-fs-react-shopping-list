import { useState } from 'react';
import axios from 'axios';


function GroceryForm(props) {
    const [nameInput, setNameInput] = useState('');
    const [quantityInput, setQuantityInput] = useState(0);
    const [unitInput, setUnitInput] = useState('');
    const [purchasedInput, setPurchasedInput] = useState(false);

const createGrocery = (event) => {
    event.preventDefault();

    axios({
        method: 'POST',
        url: '/groceries',
        data: {
            name: nameInput,
            quantity: quantityInput,
            unit: unitInput,
            purchased: purchasedInput,
        }
    }).then((response) => {
        setNameInput('');
        setQuantityInput(0);
        setUnitInput('');
    }).catch((error) =>{
        console.log('ERROR:', error);
    })
}

return (
    <form onSubmit={createGrocery}>
        <p>Item:</p><input
        type="text"
        value={nameInput}
        />
        <p>Quantity:</p><input 
        type="number"
        value={quantityInput}
        />
        <p>Unit:</p><input
        type="text"
        value={unitInput}
        />
        <button>Save</button>
    </form>
    )
}

export default GroceryForm;