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
        props.fetchGroceries();
    }).catch((error) =>{
        console.log('ERROR:', error);
    })
}

const validInput = () => {
    if (nameInput === '') {
        return false;
    }

    const quantityNumeric = Number(quantityInput)
    if (Number.isNaN(quantityNumeric) || quantityNumeric <= 0) {
        return false;
    }

    return true;
};

return (
    <form onSubmit={createGrocery}>
        <p>Item:</p><input
        type="text"
        value={nameInput}
        onChange={(event) => {setNameInput(event.target.value)}}
        />
        <p>Quantity:</p><input 
        type="number"
        value={quantityInput}
        onChange={(event) => {setQuantityInput(event.target.value)}}
        />
        <p>Unit:</p><input
        type="text"
        value={unitInput}
        onChange={(event) => {setUnitInput(event.target.value)}}
        />
        <button disabled={!validInput()}>Save</button>
    </form>
    )
}

export default GroceryForm;