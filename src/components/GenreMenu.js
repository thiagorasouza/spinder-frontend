import { Offcanvas, Nav } from "react-bootstrap";

function GenreMenu(props) {
  return (
    <Offcanvas
      show={props.show}
      onHide={props.onHide}
      placement="end"
      id="genre-menu"
      aria-labelledby="genre-menu-label"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="genre-menu-label">Genre</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav as="ul" className="flex-column">
          <Nav.Item as="li">
            <Nav.Link>Pop</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link>Rock</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link>Country</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link>Other...</Nav.Link>
          </Nav.Item>
        </Nav>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export { GenreMenu };
