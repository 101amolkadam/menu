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
import img1 from "./img1.jpg";

function item() {
  return (
    <div className="container-fluid">
      <Card className="border-0 mt-3">
        <Row>
          <Col md={10}>
            <CardTitle tag="h5">Onion Powder Granulated</CardTitle>
            <CardText className="mt-5">₹ 100</CardText>
          </Col>
          <Col md={2}>
            <CardImg src={img1} alt="Card image cap" />
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default item;
