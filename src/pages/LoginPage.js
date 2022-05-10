import { Card, Container, Button } from "react-bootstrap";

function LoginPage() {
  return (
    <Container className="d-flex flex-column justify-content-center min-vh-100">
      <Card className="text-center">
        <Card.Body>
          <Card.Title>Spinder</Card.Title>
          <Card.Text>Spotify meets Tinder</Card.Text>
          <Button>Login with Spotify</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default LoginPage;
