import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

import { FetchRecipe } from "../services/fetchRecipes";

export const AllRecipesPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const results = await FetchRecipe();
      setRecipes(results)
      setLoading(false)
    };

    fetchData();
  }, []);

  async function pageChange(page) {
    console.log(page);
    setLoading(true)
    setRecipes(await FetchRecipe(`?page=${page}`))
    setLoading(false)
  }

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <Container fluid >
    <Card className="bg-light m-5">
      <Row >
        { recipes.data?.map(recipe => (
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
      <Row>
      <div className="d-flex justify-content-between p-2">
        <Col className="d-flex justify-content-beginning ps-3">
          {recipes.paging?.previousPage && <Button variant="secondary" onClick={() => {
            pageChange(recipes.paging?.previousPage)}}>
              Back
          </Button>}
        </Col>
        <Col></Col>
        <Col className="d-flex justify-content-end pe-3">
          {recipes.paging?.nextPage && <Button variant="secondary" onClick={() => {
            pageChange(recipes.paging?.nextPage)}}>
            Next page
          </Button>}
        </Col>
      </div>
      </Row>
    </Card>
    </Container>
  );
}