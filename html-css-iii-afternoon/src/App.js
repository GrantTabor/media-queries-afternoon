import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      dropDownView: false
    }
  }

  toggleDropDown = () =>{
    this.setState({dropDownView: !this.state.dropDownView})
  }

  render() {
    return(
      <div className="App">
        
        <header className="App-header">
          <div className="logo">
            <p>Start Bootstrap</p>
          </div>
          <button className="drop-down-button" onClick={this.toggleDropDown}> Menu</button>
        
            {this.state.dropDownView
            ? (
              <nav className="mobile-nav">
                <span>Services</span>
                <span>Portfolio</span>
                <span>About</span>
                <span>Team</span>
                <span>Contact</span>
              </nav>
            )
            : null
            }
          <nav className="desktop-view">
                <span>Services</span>
                <span>Portfolio</span>
                <span>About</span>
                <span>Team</span>
                <span>Contact</span>
          </nav>
          
        </header>
        <div className="main">
            <div className="main-text">
              <h3>Welcome To Our Studio</h3>
              <h2>IT'S NICE TO MEET YOU</h2>
              <div><button> TELL ME MORE </button></div>
            </div>
        </div>
      </div>
    )
  }
  
}

export default App;
