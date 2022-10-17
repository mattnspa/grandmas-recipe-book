import Timer from "@mui/icons-material/Timer";

import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export const RecipeCard = ({recipe}) => {
  const { title, id, cooking_time } = recipe;
  const hours = () => Math.floor(cooking_time / 60);
  const minutes = () => cooking_time % 60;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img 
        variant="top"
        src={recipe.image}
        width={250}
        height={250}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <Timer/> 
          {hours() > 0 ? `${hours()}h` : ""} {minutes() > 0 ? ` ${minutes()}min` : ""}
        </Card.Text>
        <Card.Link as={Link} to={`/recipes/${id}`}>Go to the recipe</Card.Link>
      </Card.Body>
    </Card>
  );
}