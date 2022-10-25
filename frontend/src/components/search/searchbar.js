import { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/esm/InputGroup';
import Form from 'react-bootstrap/Form';
import { Results } from './results';

export const SearchBar = () => {
  const [query,setQuery] = useState("");
  const target = useRef(null);

  return (
    <Form >
      <InputGroup>
        <Form.Control
          type="search"
          placeholder="Search"
          aria-label="Search"
          name="q"
          className="me-2"
          onChange={e => setQuery(e.target.value)}
          ref={target}
        />
        <Button type="submit" variant="outline-success" >Search</Button>
      </InputGroup>
      <Results query={query} target={target}/>
    </Form>
  );
}