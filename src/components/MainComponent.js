import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";

import { DISHES } from "../shared/dishes";
import { Switch, Route, Redirect } from "react-router-dom";

import Menu from "./MenuComponent";
import Home from "./HomeComponent";

import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null,
    };
  }

  render() {
    const HomePage = () => {
      return <Home />;
    };

    return (
      <div>
        <Header />

        {/* <Menu
          dishes={this.state.dishes}
          onClick={(dishId) => this.onDishSelect(dishId)}
        />
        <h1>Choose 1 product 1 see its Detail</h1>
        <DishDetail
          dish={
            this.state.dishes.filter(
              (dish) => dish.id === this.state.selectedDish
            )[0]
          }
        /> */}
        <Switch>
          <Route path="/home" component={Home} />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.state.dishes} />}
          />
          <Redirect to="/home" />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default Main;
