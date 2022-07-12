import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

// class Dishdetail extends Component {
//   // renderDish(dish) {
//   //   return (
//   //     <div className="col-12 col-md-5 m-4 border rounded">
//   //       <Card>
//   //         <CardImg top src={dish.image} alt={dish.name} />
//   //         <CardBody>
//   //           <CardTitle>{dish.name}</CardTitle>
//   //           <CardText>{dish.description}</CardText>
//   //         </CardBody>
//   //       </Card>
//   //     </div>
//   //   );
//   // }

//   // renderComments(comments) {
//   //   if (comments != null) {
//   //     return (
//   //       <div className="col-12 col-md-5 m-4 border rounded">
//   //         <h2>Comments</h2>
//   //         <ul className="list-unstyled">
//   //           {comments.map((comment) => {
//   //             return (
//   //               <li key={comment.id}>
//   //                 <p>{comment.comment}</p>
//   //                 <p>
//   //                   -- {comment.author} ,{" "}
//   //                   {new Intl.DateTimeFormat("en-US", {
//   //                     year: "numeric",
//   //                     month: "short",
//   //                     day: "2-digit",
//   //                   }).format(new Date(Date.parse(comment.date)))}
//   //                 </p>
//   //               </li>
//   //             );
//   //           })}
//   //         </ul>
//   //       </div>
//   //     );
//   //   } else {
//   //     return <div></div>;
//   //   }
//   // }

//   render() {
//     if (this.props.dish != null) {
//       return (
//         <div className="container">
//           <div className="row justify-content-center">
//             {this.renderDish(this.props.dish)}
//             {this.renderComments(this.props.dish.comments)}
//           </div>
//         </div>
//       );
//     } else {
//       return <div></div>;
//     }
//   }
// }

// ======================== Functional Component ========================

function RenderDish({ dish }) {
  return (
    <div className="col-12 col-md-5 m-4 border rounded">
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

function RenderComments({ comments }) {
  if (comments != null) {
    return (
      <div className="col-12 col-md-5 m-4 border rounded">
        <h2>Comments</h2>
        <ul className="list-unstyled">
          {comments.map((comment) => {
            return (
              <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>
                  -- {comment.author} ,{" "}
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  }).format(new Date(Date.parse(comment.date)))}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return <div></div>;
  }
}

const Dishdetail = (props) => {
  if (props.dish != null) {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <RenderDish dish={props.dish}/>
          <RenderComments comments={props.dish.comments} />
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default Dishdetail;
