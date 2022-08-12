import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

import ImgPath from "./nav-icon-light.svg";
import { SearchBar } from '../search/searchbar';

export const NavbarComponent = props => {
  const { activeRoute, setActiveRoute, submitButton } = props;
  
  const routes = {
    home: "/",
    recipes: "/recipes",
    info: "/info"
  };

  const handleClick = (route) => {
    setActiveRoute(route);
  }

  return (
    <Navbar bg="dark" variant="dark" >
      <Container>
      <Navbar.Brand reloadDocument={activeRoute === routes.home ? true : false}
        as={Link} 
        to={routes.home}
        onClick={() => {handleClick(routes.home)}}>
          <img
            src={ImgPath}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo" />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link reloadDocument={activeRoute === routes.recipes ? true : false}
            as={Link} 
            to={routes.recipes} 
            active={activeRoute === routes.recipes}
            onClick={() => {handleClick(routes.recipes)}}>
              Recipes
          </Nav.Link>
          <Nav.Link reloadDocument={activeRoute === routes.info ? true : false}
            as={Link} 
            to={routes.info} 
            active={activeRoute === routes.info}
            onClick={() => {handleClick(routes.info)}}>
              Info
          </Nav.Link>
        </Nav>
        {activeRoute === routes.recipes && <SearchBar submitButton={submitButton}/>}
      </Container>
    </Navbar>
  );
}