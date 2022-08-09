import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { RecipeCard } from "../components/recipeCards";

import { FetchRecipe } from "../services/fetchRecipes";

export const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await FetchRecipe("/random");
      setRecipes(results)
    };

    fetchData();
  }, []);

  return (

    <Container fluid >
    <Card className="bg-light m-5">
      <Row >
        { recipes.map(recipe => (
          <Col align="center" className="mt-5" key={recipe.id}>
            <RecipeCard recipe={recipe} />
        </Col>
        ))}
      </Row>
      <div className="d-flex align-items-end flex-column p-2">
        <Button as={Link} to="/recipes" variant="secondary">
          See all 
          <i class="bi bi-chevron-right"></i>
        </Button>
      </div>
    </Card>
    </Container>
  );
}