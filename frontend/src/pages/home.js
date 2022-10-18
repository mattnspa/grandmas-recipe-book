import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

import { Loading } from "../components/loading";
import { RecipeCard } from "../components/recipeCards";
import { FetchRecipe } from "../services/fetchRecipes";

export const HomePage = props => {
  const [loading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState([]);
  const slug = "/random"

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      await FetchRecipe(slug, controller, setLoading, setRecipes)
    }
    fetchData()
    return () => {
      controller.abort()
    }
  },[slug])


  if (loading) return (<Loading />);

  return (
    <div className="d-flex justify-content-center">
      <Card className="bg-light mb-5 mx-sm-5 w-75">
        <Row >
          { recipes.map(recipe => (
            <Col align="center" className="my-5 mx-2" key={recipe.id}>
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