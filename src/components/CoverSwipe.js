import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { BsXLg } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";

function CoverSwipe() {
  return (
    <Container className="d-flex flex-column justify-content-center min-vh-100">
      <Row className="mb-4">
        <Col>
          <Image thumbnail rounded src="img/cover.jpg" />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs="auto">
          <Button>
            <BsXLg />
          </Button>
        </Col>
        <Col xs="auto">
          <Button>
            <FaHeart />
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export { CoverSwipe };
