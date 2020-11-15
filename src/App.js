import React,{Component} from 'react';
//import logo from './logo.svg';
//import logo1 from './assets/logo1.jpeg';
import './App.css';
//import {Navbar,NavbarBrand,NavItem, Nav, Collapse,NavbarToggler} from 'reactstrap';
import Main from './components/MainComponent';
import {BrowserRouter} from 'react-router-dom';



class App extends Component {
 /* constructor(props){
    super(props);
    this.state={
      isNavOpen:false
    }
    this.isToggleNav=this.isToggleNav.bind(this);
  }
  isToggleNav(){
    this.setState({
      isNavOpen:!this.state.isNavOpen
    });
  }*/
  render(){
    return (
      <div>
       
            <BrowserRouter>
            <div>
            <Main/>
            </div>
          
            </BrowserRouter>

      </div>
    );
  }
}

export default App;
