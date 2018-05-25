import React, { Component } from 'react';
import Header from './Header'
class App extends Component{
    render(){
        return (
            <div id="app">
                <Header />
                <h1>My blog</h1>
            </div>
        )
    }
}

export default App;