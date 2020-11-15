import React,{Component} from 'react';
import NavbarPage from './NavbarComponent';
import FooterPage from './FooterComponent';
import ServicePage from './ServiceComponent';
import HomePage from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import AboutPage from './AboutComponent';
import ContactPage from './ContactComponent';
import BlogPage from './BlogComponent';

class Main extends Component {
render(){
    return(
        <div>
            <NavbarPage/>
            <Switch>
            <Route exact path="/home" component={HomePage}/>
            <Route exact path="/service" component={ServicePage}/>
            <Route exact path="/aboutus" component={AboutPage}/>
            <Route exact path="/contactus" component={ContactPage}/>
            <Route exact path="/blog" component={BlogPage}/>
            <Redirect to='/home'/>
            </Switch>
            <FooterPage/>
        </div>
    );
        
    
}
}

export default Main;