import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { RecipeCard } from "../components/recipeCards";
import { Paginator } from "../components/paginator";
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

  const pageChange = async (page) => {
    setLoading(true)
    setRecipes(await FetchRecipe(`?page=${page}`))
    setLoading(false)
  }

  if (isLoading) return <div className="App">Loading...</div>;

  return (
    <div>   
      <Card className="bg-light m-5">
        <Paginator handleClick={pageChange} {...recipes.paging} />   
        <Row >
          { recipes.data?.map(recipe => (
            <Col align="center" className="mt-5" key={recipe.id}>
              <RecipeCard recipe={recipe} />
          </Col>
          ))}
        </Row>
      </Card>
    </div>
  );
}