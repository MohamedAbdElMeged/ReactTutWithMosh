//import logo from './logo.svg';
import './App.css';
import Counters from './components/counters';
import NavBar from './components/navbar';
import React, { Component } from 'react'

export class App extends Component {
  state = {
    counters: [
        {
            id : 1,
            value: 0
        },
        {
            id : 2,
            value: 0
        },
        {
            id : 3,
            value: 0
        },
        {
            id : 4,
            value: 0
        }
    ]
}

handleIncrement = (counter) => {
    //this.setState({counters: [...this.state.counters.map(counter => counter.value++)]});
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({counters});
}

handleReset = () => {
    
    this.setState({counters: [...this.state.counters.map(counter => {counter.value = 0;  return counter;})]});
}

handleDelete = (id) => {
    //console.log("event handler called" , id);
    this.setState({counters: [...this.state.counters.filter(counter => counter.id !== id)]})
}


  render() {
    return (
      <React.Fragment>
        <NavBar></NavBar>
        <main className="container">
          <Counters handleDelete={this.handleDelete} counters={this.state.counters}  handleIncrement={this.handleIncrement} handleReset={this.handleReset} />
        </main>
      </React.Fragment>
    )
  }
}
export default App;


// <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"    state = {

//         >
//           Learn React
//         </a>
//       </header>