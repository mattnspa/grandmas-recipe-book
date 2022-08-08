import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

import { FetchRecipe } from "../services/fetchRecipes";

export const HomePage = ({ darkTheme }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await FetchRecipe("/random");
      setRecipes(results)
    };

    fetchData();
  }, []);

  return (
    <div className={(darkTheme ? "bg-dark" : "bg-light").concat(" ","vh-100")}>
      <Row >
        { recipes.map(recipe => (
          <Col align="center" className="mt-5" key={recipe.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img 
                variant="top"
                src={recipe.image}
                width={250}
                height={250}/>
              <Card.Body>
                <Card.Title>{recipe.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{ recipe.subtitle }</Card.Subtitle>
                <Card.Text>
                </Card.Text>
                <Card.Link as={Link} to={`/recipes/${recipe.id}`}>Go to the recipe</Card.Link>
              </Card.Body>
            </Card>
        </Col>
        ))}
      </Row>
      <div className="d-flex align-items-end flex-column p-2">
        <Button as={Link} to="/recipes" variant="secondary">
          See all 
          <i className="bi bi-chevron-right"></i>
        </Button>
      </div>
    </div>
  );
}