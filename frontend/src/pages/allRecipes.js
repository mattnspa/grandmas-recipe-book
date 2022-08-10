import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { Loading } from "../components/loading";
import { Paginator } from "../components/paginator";
import { RecipeCard } from "../components/recipeCards";

export const AllRecipesPage = props => {

  const {recipes, isLoading, pageChange} = props;

  const requestPage = (page) => {
    pageChange(`?page=${page}`)
  }

  if (isLoading) return (<Loading />);

  return (
    <div>   
      <Card className="bg-light m-5">
        <Paginator handlePageRequest={requestPage} {...recipes.paging} />   
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