import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function FormModal(props) {
  
 return (
    <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>submit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>{props.name}</p>
            <p>{props.email}</p>
            <p>{props.password}</p>
        </Modal.Body>
        <Modal.Footer>
          
          <Button variant="primary" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>  
 );
}
export default FormModal;