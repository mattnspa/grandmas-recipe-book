import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const SearchBar = () => {

  return (
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Search"
        aria-label="Search"
        name="q"
        className="me-2"
      />
      <Button type="submit" variant="outline-success" >Search</Button>
    </Form>
  );
}