import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"

export const InfoPage = () => {
  return (
    <Container className="d-flex justify-content-center my-5 ">
      <Card className="text-center p-5">
        <Card.Text>A collections of recipes that grandma Christine made for us when we were younger.</Card.Text>
        <Card.Text>Illustrations by Sandro.</Card.Text>
      </Card>
    </Container>
  );
}