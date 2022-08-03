import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

import { FetchRecipe } from "../services/fetchRecipes";

export const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await FetchRecipe();
      setRecipes(results)
    };

    fetchData();
  }, []);

  return (
    <Container className="mt-5">
      <Row >
        { recipes.map(recipe => (
          <Col align="center" className="mt-5">
            <Card style={{ width: "18rem" }} key={recipe.id}>
              <Card.Img 
                variant="top"
                src={recipe.image}
                width={250}
                height={250}/>
              <Card.Body>
                <Card.Title>{recipe.name}</Card.Title>
                <Card.Text>
                  The ingredients are: {recipe.ingredients}
                </Card.Text>
                <Card.Link as={Link} to={`/recipes/${recipe.id}`}>Go to the recipe</Card.Link>
              </Card.Body>
            </Card>
        </Col>
        ))}
      </Row>
    </Container>
  );
}