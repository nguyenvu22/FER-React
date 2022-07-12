// import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

//  Move to Main Component 
// import { Navbar, NavbarBrand } from "reactstrap";
// import Menu from "./components/MenuComponent";
// import { DISHES } from "./shared/dishes";

import Main from "./components/MainComponent";
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} /> */}
        <Main />
      </div>
    );
  }
}

export default App;
