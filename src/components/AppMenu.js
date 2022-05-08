import { Offcanvas, Nav } from "react-bootstrap";

function AppMenu(props) {
  return (
    <Offcanvas
      show={props.show}
      onHide={props.onHide}
      placement="start"
      id="app-menu"
      aria-labelledby="app-menu-label"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="app-menu-label">Menu</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav as="ul" className="flex-column">
          <Nav.Item as="li">
            <Nav.Link>Saved Albums</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link>Editor's Choices</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link>Manage Account</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link>Logout</Nav.Link>
          </Nav.Item>
        </Nav>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export { AppMenu };
