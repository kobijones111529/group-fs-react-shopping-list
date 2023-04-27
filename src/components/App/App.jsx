import React from 'react';
import axios from 'axios';

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
            </main>
        </div>
    );
}

export default App;
