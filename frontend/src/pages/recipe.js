import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { useParams } from "react-router-dom";

import { Loading } from "../components/loading";
import { FetchRecipe } from "../services/fetchRecipes";

export const RecipePage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);
  const [loading, setLoading] = useState(true);
  const slug = `/id/${id}`;

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      await FetchRecipe(slug, controller, setLoading, setRecipe)
    }
    fetchData()
    return () => {
      controller.abort()
    }
  },[slug])

  if (loading) return (<Loading />);

  return (
    <Container className="my-5">
      <Card>
        <Card.Body>
          <Card.Title>{ recipe.title }</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{ recipe.subtitle }</Card.Subtitle>
          {window.innerWidth < 576 && recipe.image !== undefined && <Image
              variant="top"
              src={recipe.image}
              w-100
              className="ml-auto w-100 r-1x1"/>
          }
          <Container className="d-flex">
            <Container>
              <Card.Text>
                {recipe.ingredients?.map((ingredient, index) => 
                  <li key={index}>{ingredient.name}: {ingredient.size}{ingredient.unit}</li>
                  )}           
              </Card.Text>
              {recipe.steps?.map((step, index) => 
                <Card.Text key={index}>{step}</Card.Text>
                )}
            </Container>
            { window.innerWidth >= 576 && <Container>
              { recipe.image !== undefined && <Image
                variant="top"
                src={recipe.image}
                className="ml-auto w-100 r-1x1"/>
              }
              </Container>
            }
          </Container>
          <Container className="d-flex justify-content-center">
            {recipe.image2 !== undefined && <Image
              src={recipe.image2}
              className="w-100 r-1x1"/>
            }
          </Container>
        </Card.Body>
      </Card>
    </Container>
  );
}