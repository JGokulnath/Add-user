import React, { useState } from "react";
import imgSrc from "../images/vacation.png";
import { Form, FormGroup, Input, Label, Button, Row, Col } from "reactstrap";

const Home = () => {
  const [username, setUsername] = useState("");
  const [disabled, setDisabled] = useState(false);

  const submithandler = (event) => {
    event.preventDefault();
  };

  const userHandler = (event) => {
    setUsername(event.target.value);
    if (event.target.value.length <= 7) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <Row style={{ margin: "2rem" }}>
      <Col md={6}>
        <img className="img" alt="cook animation" src={imgSrc} />
      </Col>
      <Col
        md={6}
        style={{
          borderRadius: "2rem",
          backgroundColor: "white",
          boxShadow: "0.2rem 0.2rem 0.2rem 0.2rem	#c5c5c5",
        }}
      >
        <Form onSubmit={submithandler}>
          <Label>Login</Label>
          <FormGroup floating>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="Email"
              type="email"
              onChange={userHandler}
            />
            <Label for="exampleEmail">Email</Label>
          </FormGroup>
          <FormGroup floating>
            <Input
              id="examplePassword"
              name="password"
              placeholder="Password"
              type="password"
            />
            <Label for="examplePassword">Password</Label>
          </FormGroup>
          <Button type="submit" disabled={disabled}>
            Submit
          </Button>
        </Form>
        {/* </div> */}
      </Col>
    </Row>
  );
};

export default Home;
