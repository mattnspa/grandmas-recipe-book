import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom";

import { FetchRecipe } from "../services/fetchRecipes";

export const RecipePage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await FetchRecipe(id);
      setRecipe(result)
    };

    fetchData();
  }, []);

  return (
    <Container className="mt-5">
      <Card>
      <Card.Body>
        <Card.Title>{ recipe.name }</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          What you will need is { recipe.name }
        </Card.Text>
      </Card.Body>
    </Card>
    </Container>
  );
}