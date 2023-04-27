import React from 'react';
import axios from 'axios';

import ListItems from '../ListItems/ListItems'
import Header from '../Header/Header.jsx'
import GroceryForm from '../Form/Form.jsx';
import './App.css';



function App() {
    return (
        <div className="App">
            <Header />
            <main>
            <GroceryForm />
                <p>Under Construction...</p>
                <ListItems />
            </main>
        </div>
    );
}

export default App;
