import React, { useEffect, useState } from 'react';
import axios from 'axios';

import ListItems from '../ListItems/ListItems'
import Header from '../Header/Header.jsx'
import GroceryForm from '../Form/Form.jsx';
import './App.css';



function App() {
    const [groceryList, setGroceryList] = useState([]);

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

    const clearList = () => {
        axios({
            method: 'DELETE',
            url: '/groceries/clear'
        })
            .then(() => {
                fetchGroceries();
            })
            .catch(err => {
                console.error('Error clearing list:', err);
            });
    };

    const resetList = () => {
        axios({
            method: 'PUT',
            url: '/groceries/reset'
        })
            .then(() => {
                fetchGroceries();
            })
            .catch(err => {
                console.error('Error with reset:', err);
            });
    };

    useEffect(() => {
        fetchGroceries();
    }, [])

    return (
        <div className="App">
            <Header />
            <main>
            <GroceryForm />
                <p>Under Construction...</p>
                <button onClick={clearList}>Clear</button>
                <button onClick={resetList}>Reset</button>
                <ListItems groceryList={groceryList} />
            </main>
        </div>
    );
}

export default App;
