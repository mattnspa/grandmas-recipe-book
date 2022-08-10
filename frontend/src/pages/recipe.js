import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container"
import { useParams } from "react-router-dom";

import { FetchRecipe } from "../services/fetchRecipes";

export const RecipePage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    const fetchData = async (id) => {
      const result = await FetchRecipe(`/id/${id}`);
      setRecipe(result)
    };

    fetchData(id);
  }, [id]);

  return (
    <Container className="mt-5">
      <Card>
        <Card.Body>
          <Card.Title>{ recipe.title }</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{ recipe.subtitle }</Card.Subtitle>
          <Card.Text>
            {recipe.ingredients?.map((ingredient, index) => 
              <li key={index}>{ingredient.name}: {ingredient.size}{ingredient.unit}</li>
              )}           
          </Card.Text>
          {recipe.steps?.map((step, index) => 
            <Card.Text key={index}>{step}</Card.Text>
            )}
        </Card.Body>
      </Card>
    </Container>
  );
}