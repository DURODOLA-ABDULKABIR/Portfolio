// eslint-disable-next-line
import React, { Component } from "react";
import Toolbar from "./Toolbar";
import Body from "./Body";
import Footer from "./Footer"
import Heading from "./Heading";
import Backdrop from "./Backdrop";
import SideDrawer from "./SideDrawer";



class App extends Component {
    state = {
        sideDrawerOpen: false
    }

    drawerToggleClickHandler = () => {
        this.setState((prevState)=>{
            return{sideDrawerOpen: !prevState.sideDrawerOpen};
        });
    };

    backdropClickHandler = () =>{
        this.setState({sideDrawerOpen: false})
    }

    render(){
        let sideDrawer;
        let backdrop;

        if(this.state.sideDrawerOpen){
            sideDrawer = <SideDrawer />;
            backdrop = <Backdrop close={this.backdropClickHandler} />
        }
    return(
    <div> 
        
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        {sideDrawer}
        {backdrop}
        <Heading />
        <Body />
        <Footer />
    </div>
    );
}
}

export default App;