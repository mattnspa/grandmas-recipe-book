import Timer from "@mui/icons-material/Timer";
import MenuBookIcon from '@mui/icons-material/MenuBook';

import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

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
        <Button as={Link} to={`/recipes/${id}`} variant="secondary">
            {`Go to the recipe  `}
            <MenuBookIcon />
        </Button>
      </Card.Body>
    </Card>
  );
}