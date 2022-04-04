import { Modal, Form, Button } from "react-bootstrap";

export default function AddBudgetModal({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>New Budget</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" required></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="max">
            <Form.Label>Maximum Spending</Form.Label>
            <Form.Control type="number" required min={0} step={0.01}></Form.Control>
                  </Form.Group>
                  <div className="d-flex justify-content-end">
                      <Button variant="primary" type="submit">Add</Button>
                  </div>
        </Modal.Body>
      </Form>
    </Modal>
  );
}
