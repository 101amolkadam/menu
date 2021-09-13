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
import Item from "./item";
import Cart from './cart.js'


function Home() {
  return (
    <>
      <Row>
        <Col md={8}>
          <Item />
          <div className="dropdown-divider"></div>
          <Item />
        </Col>
        <Col>
            <Cart />
        </Col>
      </Row>
    </>
  );
}

export default Home;
