import React,{Component} from 'react';
import {Navbar,NavbarBrand,NavItem, Nav, Collapse,NavbarToggler} from 'reactstrap';
import {NavLink} from 'react-router-dom';

class NavbarPage extends Component {
    constructor(props){
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
    }
    render(){
      return (
        <div>
          <div className="row">
            <div className="col-12">
              <Navbar expand="md" dark className="nav1">
                <NavbarToggler onClick={this.isToggleNav}/>
                <NavbarBrand className="ml-auto" href="/"><img src="assets/images/logo1.jpeg" width="40" height="40" />ArmadaWebTech</NavbarBrand>
                <Collapse navbar isOpen={this.state.isNavOpen}>
                  <Nav navbar className="ml-auto">
                    <NavItem className="navitem1">
                        <NavLink className="nav-link1" to='/service'>Service</NavLink>
                    </NavItem>
                    <NavItem className="navitem1">
                        <NavLink className="nav-link1" to='/blog'>Blog</NavLink>
                    </NavItem >
                    <NavItem className="navitem1">
                        <NavLink className="nav-link1" to='/aboutus'>About Us</NavLink>
                    </NavItem>
                    <NavItem className="navitem1">
                        <NavLink className="nav-link1" to="/contactus"> Contact Us</NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default NavbarPage;