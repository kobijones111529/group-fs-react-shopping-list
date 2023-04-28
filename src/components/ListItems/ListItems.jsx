import { useState, useEffect } from 'react';
import axios from 'axios';
import Item from '../Item/Item';

function ListItems(props) {
    return(
        <ul>
            {props.groceryList.map(grocery => {
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