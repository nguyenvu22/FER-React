import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";

// import { DISHES } from "../shared/dishes";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

import Menu from "./MenuComponent";
import Home from "./HomeComponent";
import Dishdetail from "./DishdetailComponent";

import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";

// import { COMMENTS } from '../shared/comments';
// import { PROMOTIONS } from '../shared/promotions';
// import { LEADERS } from '../shared/leaders';

import { connect } from "react-redux";
import { addComment, fetchDishes } from "../redux/ActionCreators";

import { actions } from "react-redux-form";

const mapDispatchToProps = (dispatch) => ({
  addComment: (dishId, rating, author, comment) =>
    dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => {
    dispatch(fetchDishes());
  },
  resetFeedbackForm: () => {
    dispatch(actions.reset("feedback"));
  },
});

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};
class Main extends Component {
  // using redux instead data in shared folder
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     dishes: DISHES,
  //     comments: COMMENTS,
  //     promotions: PROMOTIONS,
  //     leaders: LEADERS
  //   };
  // }

  componentDidMount() {
    this.props.fetchDishes();
  }

  render() {
    // const HomePage = () => {
    //   return (
    //     <Home
    //       dish={this.props.dishes.filter((dish) => dish.featured)[0]}
    //       promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
    //       leader={this.props.leaders.filter((leader) => leader.featured)[0]}
    //     />
    //   );
    // };

    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errMess}
          promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    };

    const DishWithId = ({ match }) => {
      return (
        <Dishdetail
          dish={
            this.props.dishes.dishes.filter(
              (dish) => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}
          comments={this.props.comments.filter(
            (comment) => comment.dishId === parseInt(match.params.dishId, 10)
          )}
          addComment={this.props.addComment}
        />
      );
    };

    // const AboutUsPage = () => {
    //   return <About leaders={this.state.leaders} />;
    // };

    return (
      // <div>
      //   <Header />
      //   {/* <Menu
      //     dishes={this.state.dishes}
      //     onClick={(dishId) => this.onDishSelect(dishId)}
      //   />
      //   <h1>Choose 1 product 1 see its Detail</h1>
      //   <DishDetail
      //     dish={
      //       this.state.dishes.filter(
      //         (dish) => dish.id === this.state.selectedDish
      //       )[0]
      //     }
      //   /> */}
      //   <Switch>
      //     <Route path="/home" component={HomePage} />
      //     <Route
      //       exact
      //       path="/menu"
      //       component={() => <Menu dishes={this.state.dishes} />}
      //     />
      //     <Route exact path='/contactus' component={Contact} />
      //     <Route path='/menu/:dishId' component={DishWithId} />
      //     <Redirect to="/home" />
      //   </Switch>
      //   <Footer />
      // </div>

      // <div>
      //   <Header />
      //   <div>
      //     <Switch>
      //       <Route path="/home" component={HomePage} />
      //       <Route exact path="/aboutus" component={AboutUsPage} />
      //       <Route
      //         exact
      //         path="/aboutus"
      //         component={() => <About leaders={this.props.leaders} />}
      //       />
      //       <Route
      //         exact
      //         path="/menu"
      //         component={() => <Menu dishes={this.props.dishes} />}
      //       />
      //       <Route path="/menu/:dishId" component={DishWithId} />
      //       <Route exact path="/contactus" component={Contact} />
      //       <Redirect to="/home" />
      //     </Switch>
      //   </div>
      //   <Footer />
      // </div>

      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/aboutus"
            component={() => <About leaders={this.props.leaders} />}
          />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.props.dishes} />}
          />
          <Route path="/menu/:dishId" component={DishWithId} />
          {/* <Route exact path="/contactus" component={Contact} /> */}
          <Route
            exact
            path="/contactus"
            component={() => (
              <Contact resetFeedbackForm={this.props.resetFeedbackForm} />
            )}
          />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
