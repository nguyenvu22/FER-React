import React, { Component } from "react";
import {
  Media,
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

// class Menu extends Component {
//   //  Move to DishDetailComponent ---------------------------------
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     selectedDish: null,
//   //   };
//   // }

//   // onDishSelect(dish) {
//   //   this.setState({ selectedDish: dish });
//   // }

//   //   renderDish(dish) {
//   //     if (dish != null)
//   //       return (
//   //         <Card>
//   //           <CardImg top src={dish.image} alt={dish.name} />
//   //           <CardBody>
//   //             <CardTitle>{dish.name}</CardTitle>
//   //             <CardText>{dish.description}</CardText>
//   //           </CardBody>
//   //         </Card>
//   //       );
//   //     else return <div></div>;
//   //   }
//   //  Move to DishDetailComponent =================================

//   render() {
//     const menu = this.props.dishes.map((dish) => {
//       return (
//         <div className="col-12 col-md-5 m-4 border rounded">
//           {/* <Card key={dish.id} onClick={() => this.onDishSelect(dish)}>      =>  props onClick() at MainComponent*/}
//           <Card key={dish.id} onClick={() => this.props.onClick(dish.id)}>
//             <CardImg width="100%" src={dish.image} alt={dish.name} />
//             <CardImgOverlay>
//               <CardTitle>{dish.name}</CardTitle>
//             </CardImgOverlay>
//           </Card>
//         </div>
//       );
//     });

//     return (
//       <div className="container">
//         <div className="row justify-content-center">{menu}</div>
//         {/* <div className="row">
//           <div className="col-12 col-md-5 m-1">
//             {this.renderDish(this.state.selectedDish)}
//           </div>
//         </div> */}
//       </div>
//     );
//   }
// }

// ======================== Functional Component ========================

function RenderMenuItem({ dish, onClick }) {
  return (
    <div className="col-12 col-md-5 m-4 border rounded">
      <Card onClick={() => onClick(dish.id)}>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardImgOverlay>
          <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Card>
    </div>
  );
}

const Menu = (props) => {
  const menu = props.dishes.map((dish) => {
    return (
      <div className="col-12 col-md-5 m-1" key={dish.id}>
        <RenderMenuItem dish={dish} onClick={props.onClick} />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row justify-content-center">{menu}</div>
    </div>
  );
};

export default Menu;
