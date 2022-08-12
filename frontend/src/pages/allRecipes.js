import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { Loading } from "../components/loading/loading";
import { Paginator } from "../components/paginator/paginator";
import { RecipeCard } from "../components/recipeCards/recipeCards";
import { FetchRecipe } from "../services/fetchRecipes/fetchRecipes";

export const AllRecipesPage = props => {
  const { slug, pageChange} = props;
  const [loading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    const fetchData = async () => {
      await FetchRecipe(slug, controller)
        .then(result => {
          setRecipes(result);
          setLoading(false)
        });
    }
    fetchData()
    return () => {
      controller.abort()
    }
  },[slug])

  if (recipes === undefined || recipes.length === 0 ) return (<Loading />);

  return (
    <div>   
      <Card className="bg-light m-5">
        <Paginator pageChange={pageChange} {...recipes.paging} />   
        <Row >
          { loading ? <Loading /> : recipes.data?.map(recipe => (
            <Col align="center" className="mt-5" key={recipe.id}>
              <RecipeCard recipe={recipe} />
          </Col>
          ))}
        </Row>
      </Card>
    </div>
  );
}