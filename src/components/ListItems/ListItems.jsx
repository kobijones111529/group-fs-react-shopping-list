import { useState, useEffect } from 'react';
import axios from 'axios';

function ListItems(props) {
    const [groceryList, setGroceryList] = useState([]);

    useEffect(() => {
        fetchGroceries();
    }, [])

    const fetchGroceries = () => {
        axios({
            method: 'GET',
            url: '/groceries'
        }).then((dbRes) => {
            console.log("Got our grocery list", dbRes);
        })
    }

    return(


    )
}

export default ListItems;