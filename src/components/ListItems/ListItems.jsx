import { useState, useEffect } from 'react';
import axios from 'axios';

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
        <>
            <ul>
                {/* vvvvv just put this here to show it's needed, this currently doesn't do anything vvvvvv */}
                {/* <Items 
                    groceries={groceryList}
                /> */}
            </ul>
        </>

    )
}

export default ListItems;