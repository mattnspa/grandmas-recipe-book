import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { Loading } from "../components/loading";
import { Paginator } from "../components/paginator";
import { RecipeCard } from "../components/recipeCards";
import { FetchRecipe } from "../services/fetchRecipes";

export const AllRecipesPage = props => {
  const [loading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const pageChange = (page) => {
    searchParams.set("page",page);
    setSearchParams(searchParams, { replace: true});
  }

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      await FetchRecipe(`/search?${searchParams.toString()}`, controller, setLoading, setRecipes)
    }
    fetchData()
    return () => {
      controller.abort()
    }
  },[searchParams]) 

  
  if (loading) return (<Loading />);

  return (
    <div className="d-flex justify-content-center">
      <Card className="bg-light mb-5 mx-sm-5 w-75">
        <Paginator pageChange={pageChange} {...recipes.paging} />   
        <Row >
          { recipes.data?.map(recipe => (
            <Col align="center" className="my-5 mx-2" key={recipe.id}>
              <RecipeCard recipe={recipe} />
          </Col>
          ))}
        </Row>
      </Card>
    </div>
  );
}