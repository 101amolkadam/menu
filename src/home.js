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

function home() {
  return (
    <>
      <Row>
        <Col md={8}>
          <Item />
          <div className="dropdown-divider"></div>
          <Item />
        </Col>
        <Col></Col>
      </Row>
    </>
  );
}

export default home;
