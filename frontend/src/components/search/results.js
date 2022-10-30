import { useEffect, useState } from "react";
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import ListGroup from 'react-bootstrap/ListGroup';
import { FetchRecipe } from "../../services/fetchRecipes";

export const Results = ({query, target}) => {

  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false)
  const [show, setShow] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      await FetchRecipe(`/query?q=${query}`, controller, setLoading, setRecipes, setError)
    }
    setRecipes([])
    if (query.length > 2) {fetchData()};
    (recipes.length > 0) ? setShow(true) : setShow(false);
    return () => {
      controller.abort()
    }
  },[query])

  return (
    <Overlay
        show={show}
        target={target.current}
        placement="bottom"
      >
      <Popover id="popover-contained">
        <Popover.Body>
          <ListGroup variant="flush">
            {recipes && recipes.map(recipe => 
              <ListGroup.Item 
                key={recipe.id} 
                action
                href={`/recipes/${recipe.id}`}
              >
                {recipe.title}
              </ListGroup.Item>
            )}
          </ListGroup>
        </Popover.Body>
      </Popover>
    </Overlay>
  );
}
