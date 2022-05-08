import { Container, Navbar, Button } from "react-bootstrap";
import { FaBars, FaItunesNote } from "react-icons/fa";

function Header(props) {
  return (
    <Navbar expand={false} fixed="top">
      <Container>
        <Button arial-controls="app-menu" onClick={props.appMenuClick}>
          <FaBars />
        </Button>
        <Navbar.Brand>Spinder</Navbar.Brand>
        <Button arial-controls="genre-menu" onClick={props.genreMenuClick}>
          <FaItunesNote />
        </Button>
      </Container>
    </Navbar>
  );
}

export { Header };
