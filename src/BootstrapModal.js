import React from "react";
import { Modal, Form, Row, Col } from "react-bootstrap";
import CustomDownloadCellRenderer from "./CustomDownloadCellRenderer";
class BootstrapModal extends React.Component {
  constructor() {
    super();
    this.state = {
      showHide: false,
    };
  }

  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide });
  }

  handleFormChange() {
    console.log("This is the form change function inside -Form-");
  }

  render() {
    return (
      <div>
        <Modal show={this.props.showHide} animation={false}>
          <Modal.Header closeButton onClick={this.props.onClick}>
            <Modal.Title>DOCUMENT INFORMATION</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.props.displayData.title}
            <Form>
              <Row>
                <Col>
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    placeholder="Title here.."
                    value={this.props.displayData.title}
                    onChange={this.handleFormChange}
                  />
                </Col>
                <Col>
                  <Form.Label>Type</Form.Label>
                  <Form.Control
                    placeholder="Type here.."
                    value={this.props.displayData.type}
                    onChange={this.handleFormChange}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="2"
                    value={this.props.displayData.description}
                    onChange={this.handleFormChange}
                  />
                </Col>
                <Col>
                  <Form.Label>Type Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="2"
                    value={this.props.displayData.typeDescription}
                    onChange={this.handleFormChange}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>File Name</Form.Label>
                  <Form.Control
                    placeholder="File Name here.."
                    value={this.props.displayData.fileName}
                    onChange={this.handleFormChange}
                  />
                </Col>
                <Col>
                  <div style={{ marginTop: "35px" }}>
                    <CustomDownloadCellRenderer />
                  </div>
                </Col>
              </Row>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <div className="col-md-12 text-center">
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={this.props.onClick}
              >
                Close
              </button>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default BootstrapModal;
