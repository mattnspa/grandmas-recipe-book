import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container"
import { useParams } from "react-router-dom";

import { Loading } from "../components/loading";
import { FetchRecipe } from "../services/fetchRecipes";

export const RecipePage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);
  const [loading, setLoading] = useState(true);
  const slug = `/id/${id}`;

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      await FetchRecipe(slug, controller, setLoading, setRecipe)
    }
    fetchData()
    return () => {
      controller.abort()
    }
  },[slug])

  if (loading) return (<Loading />);

  return (
    <Container className="my-5">
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