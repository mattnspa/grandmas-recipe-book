import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { Loading } from "../components/loading";
import { Paginator } from "../components/paginator";
import { RecipeCard } from "../components/recipeCards";
import { FetchRecipe } from "../services/fetchRecipes";

export const AllRecipesPage = props => {
  const { slug, pageChange} = props;
  const [loading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState([]);

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
    <div>   
      <Card className="bg-light m-5">
        <Paginator pageChange={pageChange} {...recipes.paging} />   
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