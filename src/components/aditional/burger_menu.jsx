import Nav from "react-bootstrap/Nav";
import { Container, Image, Row } from "react-bootstrap";

function NavMenu() {
  return (
    <Nav
        style={{'width':'300px'}}
      className="bg-light bg-gradient d-flex flex-column justify-content-start gap-2 mt-2"
    >
        <Image src="http://mobimg.b-cdn.net/v3/fetch/60/60ed26f523ebf9dfbf3633ba939c4214.jpeg" height={150} rounded/>
        <Container xs={1} className="d-block">мояпочта@ru</Container>
      <Nav.Item>
        <Nav.Link href="/">Posts</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/about">AboutMe</Nav.Link>
      </Nav.Item>
    </Nav> 
  );
}

export default NavMenu;
