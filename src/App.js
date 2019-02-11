import React, { Component } from 'react';
import NewProductView from './views/NewProductView';
import ProductListView from './views/ProductListView';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <NewProductView />
                <ProductListView />
            </div>
        );
    }
}

export default App;
