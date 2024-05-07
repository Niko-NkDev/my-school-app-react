import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";

function Login() {
  return (
    <div className="formulario-registro">
      <div class="filtro"></div>

      <Form className="formulario-1">
        <h1>My School APP</h1>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="tritulos-formulario">
              Correo electronico
            </Form.Label>
            <Form.Control type="email" placeholder="Correo electronico" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label className="tritulos-formulario">Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Contraseña" />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Entrar
        </Button>
      </Form>
    </div>
  );
}

export default Login;
