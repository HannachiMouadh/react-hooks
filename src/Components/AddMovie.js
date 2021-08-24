import React,{useState} from 'react';
import { Modal,Button,Form } from 'react-bootstrap';

const AddMovie = ({AddMovie}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newMovie, setnewMovie] = useState([])
    const handleChange=(e)=>{
        setnewMovie({...newMovie,[e.target.name]:e.target.value})
    }

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
        Add a movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control onChange={handleChange} name="name" type="text" placeholder="Enter title" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Year</Form.Label>
            <Form.Control onChange={handleChange} name="Year" type="text" placeholder="Enter year" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Description</Form.Label>
            <Form.Control onChange={handleChange} name="description" type="text" placeholder="Enter description" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Rating</Form.Label>
            <Form.Control onChange={handleChange} name="rating" type="number" placeholder="Enter rating" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Movie poster</Form.Label>
            <Form.Control onChange={handleChange} name="posterUrl" type="text" placeholder="Enter URL of the poster" />
        </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{handleChange(newMovie);handleClose()}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}
export default AddMovie;
