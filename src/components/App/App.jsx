import React from 'react';
import axios from 'axios';

import ListItems from '../ListItems/ListItems'
import Header from '../Header/Header.jsx'
import GroceryForm from '../Form/Form.jsx';
import './App.css';



function App() {
    const clearList = () => {
        axios({
            method: 'DELETE',
            url: '/groceries/clear'
        })
            .then(() => {
                // TODO: update items
            })
            .catch(err => {
                console.error('Error clearing list:', err);
            });
    };

    return (
        <div className="App">
            <Header />
            <main>
            <GroceryForm />
                <p>Under Construction...</p>
                <button onClick={clearList}>Clear</button>
                <ListItems />
            </main>
        </div>
    );
}

export default App;
