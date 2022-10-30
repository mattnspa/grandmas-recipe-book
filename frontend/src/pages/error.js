import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

export const ErrorPage = props => {
  return (
    <Container className="my-5">
      <Card>
        <Card.Body>
          <Card.Title className="d-flex justify-content-center">
            404
          </Card.Title>
          <Card.Text className="d-flex justify-content-center">
            {<SentimentVeryDissatisfiedIcon /> } 
          </Card.Text>
          <Card.Text className="d-flex justify-content-center">
            No recipes found 
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}