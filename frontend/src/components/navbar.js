import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

import ImgPath from "./nav-icon-light.svg";
import { SearchBar } from './searchbar';

export const NavbarComponent = props => {
  const { submitButton, location } = props;
  const [activeRoute, setActiveRoute] = useState(location);

  const routes = {
    home: "/",
    recipes: "/recipes",
    info: "/info"
  };

  return (
    <Navbar bg="dark" variant="dark" >
      <Container>
      <Navbar.Brand reloadDocument={activeRoute === routes.home ? true : false}
        as={Link} 
        to={routes.home}
        onClick={() => {setActiveRoute(routes.home)}}>
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
            onClick={() => {setActiveRoute(routes.recipes)}}>
              Recipes
          </Nav.Link>
          <Nav.Link reloadDocument={activeRoute === routes.info ? true : false}
            as={Link} 
            to={routes.info} 
            active={activeRoute === routes.info}
            onClick={() => {setActiveRoute(routes.info)}}>
              Info
          </Nav.Link>
        </Nav>
        {activeRoute === routes.recipes && <SearchBar submitButton={submitButton}/>}
      </Container>
    </Navbar>
  );
}