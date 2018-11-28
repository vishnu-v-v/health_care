import * as React from "react";

import "./landing.css";

import {
  Button,
  Col,
  ControlLabel,
  Form,
  FormControl,
  FormGroup,
  Grid,
  Jumbotron,
  Row
} from "react-bootstrap";

const Landing = () => (
  <div className="main__container">
    <Jumbotron>
      <Grid>
        <Row className="show-grid">
          <Col xs={10} xsOffset={1}>
            <Form className="login-form" inline={true}>
              <FormGroup controlId="formInlineEmail">
                <ControlLabel>Email</ControlLabel>{' '}
                <FormControl type="email" placeholder="jane.doe@example.com" />
              </FormGroup>{' '}
              <FormGroup controlId="formInlineEmailPassword">
                <ControlLabel>Password</ControlLabel>{' '}
                <FormControl type="password" placeholder="***********" />
              </FormGroup>{' '}
              <Button type="submit">Login</Button>
            </Form>
          </Col>
        </Row>
      </Grid>
    </Jumbotron>
  </div>
);

export default Landing;
