import React from "react";
import PageHeading from "../layout/PageHeading";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";

const Contact = () => {
  const pageTitle = "Contact Us";

  return (
    <div>
      <PageHeading title={pageTitle} />
      <div className="contact-form">
        <Container>
          <Row>
            <Col md={8}>
              <div className="contact-form">
                <Form id="contact_form">
                  <Row>
                    <Col md={6}>
                      <InputGroup className="I-input mb-3">
                        <i className="fa fa-user" />
                        <Form.Control type="text" placeholder="First name" />
                      </InputGroup>
                      {/* <FormGroup>
                        <InputGroup className="mb-3">
                          <InputGroup.Prepend>
                            <InputGroup.Text>
                              <i className="fa fa-user" />
                            </InputGroup.Text>
                          </InputGroup.Prepend>
                          <Form.Control type="text" placeholder="First name" />
                        </InputGroup>
                      </FormGroup>
                    </Col> */}
                    </Col>
                    <Col md={6}>
                      <InputGroup className=" I-input mb-3">
                        <i className="fa fa-envelope" />

                        <Form.Control
                          type="email"
                          placeholder="Email address"
                        />
                      </InputGroup>
                    </Col>
                    <Col md={6}>
                      <InputGroup className="I-input mb-3">
                        <i className="fa fa-phone" />

                        <Form.Control type="text" placeholder="Phone" />
                      </InputGroup>
                    </Col>
                    <Col md={6}>
                      <InputGroup className="I-input mb-3">
                        <i className="fa fa-globe" />

                        <Form.Control type="text" placeholder="Your website" />
                      </InputGroup>
                    </Col>
                    <Col md={12}>
                      <InputGroup className="I-input mb-3">
                        <i className="fa fa-comment" />

                        <Form.Control
                          as="textarea"
                          rows={5}
                          placeholder="Write message"
                        />
                      </InputGroup>
                    </Col>
                    <Col md={12}>
                      <div className="advanced-button">
                        <a href="#">
                          Send Message
                          <i className="fa fa-paper-plane" />
                        </a>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
            <Col md={4}>
              <div className="contact-info">
                <div className="phone">
                  <h4>Phone</h4>
                  <span>+33 20966400 1342</span>
                </div>
                <div className="fax">
                  <h4>Fax</h4>
                  <span>+33 20966400 1342</span>
                </div>
                <div className="email">
                  <h4>Email</h4>
                  <a href="mailto:info@auction.com">info@auction.com</a>
                </div>
                <div className="address">
                  <h4>Address</h4>
                  <span>
                    2855 Simpson Square
                    <br />
                    Coldwater, OK 67029
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

const CustomInputGroup = ({ iconClass, children }) => {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">
          <i className={iconClass} />
        </span>
      </div>
      {children}
    </div>
  );
};

export default Contact;
