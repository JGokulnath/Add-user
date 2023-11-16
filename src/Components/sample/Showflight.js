import React from "react";
import { Form, Row, Col, FormGroup, Input, Label, Button } from "reactstrap";
const Showflight = () => {
  return (
    <div style={{ margin: "2rem", textAlign: "left" }}>
      <Form>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleSelect">Source</Label>
              <Input id="exampleSelect" name="select" type="select">
                <option>Chenni</option>
                <option>Mumbai</option>
                <option>Delhi</option>
                <option>Coimbatore</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleSelect">Destination</Label>
              <Input id="exampleSelect" name="select" type="select">
                <option>Mumbai</option>
                <option>Chenni</option>
                <option>Delhi</option>
                <option>Coimbatore</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail">Date</Label>
              <Input id="exampleEmail" name="date" type="date" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="examplePassword">Time</Label>
              <Input id="examplePassword" name="time" type="time" />
            </FormGroup>
          </Col>
        </Row>

        <Button color="primary">Book Flight</Button>
      </Form>
    </div>
  );
};

export default Showflight;
