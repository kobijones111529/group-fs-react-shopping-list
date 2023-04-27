import { useState } from 'react';
import axios from 'axios';


function GroceryForm(props) {
    const [nameInput, setNameInput] = useState('');
    const [quantityInput, setQuantityInput] = useState(0);
    const [unitInput, setUnitInput] = useState('');

const createGrocery = (event) => {
    event.preventDefault();

    axios({
        method: 'POST',
        url: '/groceries',
        data: {
            name: nameInput,
            quantity: quantityInput,
            unit: unitInput
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
        <input
        type="text"
        value={nameInput}
        />
        <input 
        type="number"
        value={quantityInput}
        />
        <input
        type="text"
        value={unitInput}
        />
        <button>Save</button>
    </form>
    )
}

export default GroceryForm;