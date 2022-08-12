
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export const RecipeCard = ({recipe}) => {
  return (
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
  );
}