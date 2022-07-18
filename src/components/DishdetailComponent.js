import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  Label,
  Col,
  Row,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Control, LocalForm, Errors } from "react-redux-form";

import { Loading } from "./LoadingComponent";

import { baseUrl } from '../shared/baseUrl';

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

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModal() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }

  handleSubmit(values) {
    this.toggleModal();
    // console.log("Current State is: " + JSON.stringify(values));
    // alert("Current State is: " + JSON.stringify(values));
    this.props.addComment(
      this.props.dishId,
      values.rating,
      values.author,
      values.comment
    );
  }

  render() {
    return (
      <div className="container">
        <div className="row mt-3">
          <Button outline onClick={this.toggleModal}>
            <span className="fa fa-pencil fa-lg"></span>{" "}
            <span class="text-dark font-weight-bold">Submit Comment</span>
          </Button>

          <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>
              <h4 class="text-info">Submit Comment</h4>
            </ModalHeader>
            <ModalBody>
              <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                <Row className="form-group">
                  <Col md={12}>
                    <Label htmlFor="rating">
                      <h6 classs="text-secondary">Rating</h6>
                    </Label>
                    <Control.select
                      model=".rating"
                      name="rating"
                      className="form-control text-dark"
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Control.select>
                  </Col>
                </Row>
                <Row className="form-group">
                  <Col md={12}>
                    <Label htmlFor="author">
                      <h6 classs="text-secondary">Your Name</h6>
                    </Label>
                    <Control.text
                      model=".author"
                      id="author"
                      name="author"
                      placeholder="Your Name gt 3"
                      className="form-control text-dark"
                      validators={{
                        required,
                        minLength: minLength(3),
                        maxLength: maxLength(15),
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".author"
                      show="touched"
                      messages={{
                        required: "Required",
                        minLength: "Must be greater than 2 characters",
                        maxLength: "Must be 15 characters or less",
                      }}
                    />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Col md={12}>
                    <Label htmlFor="comment">
                      <h6 classs="text-secondary">Comment</h6>
                    </Label>
                    <Control.textarea
                      model=".comment"
                      id="comment"
                      name="comment"
                      rows="6"
                      className="form-control text-dark"
                      placeholder="Comment le 15"
                    />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Col md={12}>
                    <Button type="submit" color="info">
                      <span class="text-light">Submit</span>
                    </Button>
                  </Col>
                </Row>
              </LocalForm>
            </ModalBody>
          </Modal>
        </div>
      </div>
    );
  }
}

function RenderDish({ dish }) {
  return (
    <div>
      <Card>
        {/* <CardImg top src={dish.image} alt={dish.name} /> */}
        <CardImg top src={baseUrl + dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

function RenderComments({ comments, addComment, dishId }) {
  if (comments != null) {
    return (
      <div>
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
        {/* <CommentForm /> */}
        <CommentForm dishId={dishId} addComment={addComment} />
      </div>
    );
  } else {
    return <div></div>;
  }
}

const Dishdetail = (props) => {
  if (props.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  } else if (props.dish != null) {
    return (
      // <div className="container">
      //   <div className="row justify-content-center">
      //     <RenderDish dish={props.dish}/>
      //     <RenderComments comments={props.dish.comments} />
      //   </div>
      // </div>
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5 m-4 border rounded">
            <RenderDish dish={props.dish} />
          </div>
          <div className="col-12 col-md-5 m-4 border rounded">
            {/* <RenderComments comments={props.comments} /> */}
            <RenderComments
              comments={props.comments}
              addComment={props.addComment}
              dishId={props.dish.id}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Dishdetail;
