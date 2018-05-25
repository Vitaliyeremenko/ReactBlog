import React, { Component } from 'react';
import Navigation from './Navigation'
class App extends Component{
    render(){
        return (
            <div id="app">
                <Navigation />
                <h1>My blog</h1>
            </div>
        )
    }
}

export default App;