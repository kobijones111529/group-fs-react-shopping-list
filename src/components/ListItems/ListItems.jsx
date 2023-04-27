import { useState, useEffect } from 'react';
import axios from 'axios';
import Item from '../Item/Item';

function ListItems(props) {
    const [groceryList, setGroceryList] = useState([]);

    // is it necessary to have this in useEffect? I believe so
    useEffect(() => {
        fetchGroceries();
    }, [])

    // get the groceries array
    const fetchGroceries = () => {
        axios({
            method: 'GET',
            url: '/groceries',
        }).then((res) => {
            setGroceryList(res.data);
            console.log("Got our grocery list", groceryList);
        }).catch((err) => {
            console.log("Couldn't get grocery list", err)
        })
    }


    return(
        <ul>
            {groceryList.map(grocery => {
                return (
                    <li key={grocery.id}>
                        <Item
                            id={grocery.id}
                            name={grocery.name}
                            quantity={grocery.quantity}
                            unit={grocery.unit}
                            purchased={grocery.purchased}
                        />
                    </li>
                );
            })}
        </ul>
    )
}

export default ListItems;