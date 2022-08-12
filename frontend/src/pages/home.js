import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

import { Loading } from "../components/loading/loading";
import { RecipeCard } from "../components/recipeCards/recipeCards";
import { FetchRecipe } from "../services/fetchRecipes/fetchRecipes";

export const HomePage = props => {
  const [recipes, setRecipes] = useState([]);
  const slug = "/random"

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      await FetchRecipe(slug, controller)
        .then(result => {
          setRecipes(result);
        });
    }
    fetchData()

    return () => {
      controller.abort()
    }
  },[slug])

  if (recipes === undefined || recipes.length === 0) return (<Loading />);

  return (
    <div>
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
            <i className="bi bi-chevron-right"></i>
          </Button>
        </div>
      </Card>
    </div>
  );
}