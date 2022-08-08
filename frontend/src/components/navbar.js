import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

import ImgPath from "./nav-icon-light.svg";

export const NavbarComponent = ({ handleClick, darkTheme }) => {

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand as={Link} to="/">
              <img
                src={ImgPath}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/info">Info</Nav.Link>
          <Nav.Link onClick={handleClick}>
            { darkTheme ? <i class="bi bi-moon"></i> : <i class="bi bi-moon-fill"></i>}
            </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}