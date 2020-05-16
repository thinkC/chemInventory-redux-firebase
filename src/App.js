import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import InventoryList from './components/InventoryList';
import InventoryItem from './components/InventoryItem';
import DetailInventory from './components/DetailInventory';
import SignIn from './components/SignIn';
import Register from './components/Register';
import CreateInventory from './components/CreateInventory';



export default class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <NavBar />
                    <Switch>
                        <Route exact path="/" component={InventoryList} />
                        <Route path="/inventory/:id" component={DetailInventory} />
                        <Route path="/signin" component={SignIn} />
                        <Route path="/register" component={Register} />
                        <Route path="/create" component={CreateInventory} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
