import React, { Component } from 'react';
import './App.css';
import Movie from "./containers/Movie/Movie";


class App extends React.Component {
 render(){
    return(

        <div classname="App">
          <Movie/>

        </div>
    )
 }
}
export default App;