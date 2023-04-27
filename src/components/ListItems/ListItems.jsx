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
        }).then((res) => {
            console.log("Got our grocery list", res);
        }).catch((err) => {
            console.log("Couldn't get grocery list", err)
        })
    }

    return (
        <></>
    )
}

export default ListItems;