import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { NavbarComponent } from "../navbar";



describe("Navbar component is loaded", () => {

  afterEach(cleanup); 

  const homePageText = "home page"
  const infoPageText = "info page"
  const recipesPageText = "recipes page"

  const renderWithRouter = (component) => {
    const history = createMemoryHistory()
    return { 
      ...render (
      <BrowserRouter history={history}>
          {component}
          <Routes>
            <Route path="/" element={<h1>{homePageText}</h1>} />
            <Route path="/info" element={<h1>{infoPageText}</h1>} />
            <Route path="/recipes" element={<h1>{recipesPageText}</h1>}/>
          </Routes>
      </BrowserRouter>
      )
    }
  };

  it("renders correctly", () => {
    // given
    const route = '/';
    const setMockActiveRoute = jest.fn();
    const mockButton = jest.fn();

    // when
    const {getByTestId} = renderWithRouter(
      <NavbarComponent 
        activeRoute={route}
        setActiveRoute={setMockActiveRoute}
        submitButton={mockButton} />);
      
    // then
    const navbar = getByTestId('navbar')
    const homeLink = getByTestId('home-link')
    const recipesLink = getByTestId('recipes-link')
    const infoLink = getByTestId('info-link')

    expect(navbar).toContainElement(homeLink);
    expect(recipesLink).toContainElement(recipesLink);
    expect(infoLink).toContainElement(infoLink);

  });

  it("snapshot is the same", () => {
    // given
    const route = '/';
    const setMockActiveRoute = jest.fn();
    const mockButton = jest.fn();

    // when
    const { asFragment } = renderWithRouter(
      <NavbarComponent
        activeRoute={route}
        setActiveRoute={setMockActiveRoute}
        submitButton={mockButton} />);
        
    // then
    expect(asFragment(<NavbarComponent />)).toMatchSnapshot()
  });

  it("should navigate to the home page, then the info page, then the recipes page", () => {
    // given
    const route = '/';
    const setMockActiveRoute = jest.fn();
    const mockButton = jest.fn();

    // when
    const {container, getByTestId} = renderWithRouter(
      <NavbarComponent 
        activeRoute={route}
        setActiveRoute={setMockActiveRoute}
        submitButton={mockButton} />);

      fireEvent.click(getByTestId('home-link'));

      // then
      expect(container.innerHTML).toMatch(homePageText)
      // when
      fireEvent.click(getByTestId('info-link'));
      // then
      expect(container.innerHTML).toMatch(infoPageText)
      // when
      fireEvent.click(getByTestId('recipes-link'));
      // then
      expect(container.innerHTML).toMatch(recipesPageText)
  });
});