import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const SearchBar = props => {
  const { submitButton } = props;
  const [query,setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        name="search"
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <Button variant="outline-success" onClick={() => {submitButton(query)}}>Search</Button>
    </Form>
  );
}