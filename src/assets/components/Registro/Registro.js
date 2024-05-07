import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./registro.css";


function Registro() {
  return (
    <div className="formulario-registro">
      <div class="filtro"></div>

      <Form className="formulario-1">
      <h1>My School APP</h1>

        <Row className="mb-3">
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label className="tritulos-formulario">Nombres</Form.Label>
            <Form.Control placeholder="Nombres" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label className="tritulos-formulario">Apellidos</Form.Label>
            <Form.Control placeholder="Apellidos" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="tritulos-formulario">Correo electronico</Form.Label>
            <Form.Control type="email" placeholder="Correo electronico" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label className="tritulos-formulario">Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Contraseña" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label className="tritulos-formulario">Ciudad</Form.Label>
            <Form.Control type="ciudad" placeholder="Ciudad" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label className="tritulos-formulario">Pais</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>Colombia</option>
              <option>Canada</option>
              <option>Estados Unidos</option>
              <option>Mexico</option>
              <option>Argentina</option>
              <option>Otro</option>
            </Form.Select>
          </Form.Group>

        </Row>

        <Form.Group className="mb-3 grupo-check" id="formGridCheckbox">
          <Form.Check className="check-form" type="checkbox" />
          <Form.Label>Acepta terminos y condiciones</Form.Label>
        </Form.Group>

        <Button variant="primary" type="submit">
          Registrarse
        </Button>
      </Form>
    </div>
  );
}

export default Registro;
