import React from "react";
import {
  Card,
  Button,
  CardTitle,
  CardText,
  CardImg,
  Row,
  Col,
} from "reactstrap";

function Cart() {
  return (
    <div className="container-fluid">
      <h2>Cart</h2>
      <h6>2 ITEMS</h6>
      <br />
      <br />
      <div>Spice - Onion Powder Granulated</div>
      <div>Bread - Olive Dinner Roll</div>
      <br />
      <br />
      <Row>
        <Col><h6>Total :</h6><div>Extra charges may apply</div></Col>
        <Col className="d-flex justify-content-end" tag="h6">₹ 1234</Col>
      </Row><br />
      <Button color="success"  block>Checkout -{">"}</Button>{' '}
    </div>
  );
}

export default Cart;
