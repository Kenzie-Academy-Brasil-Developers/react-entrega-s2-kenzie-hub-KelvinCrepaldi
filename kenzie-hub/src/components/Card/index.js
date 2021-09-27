import { Container } from "./styled";

const Card = ({ tech, handleRemoveTech }) => {
  return (
    <Container>
      <h2>{tech.title}</h2>
      <p>{tech.status}</p>
      <button onClick={() => handleRemoveTech(tech.id)}> deletar</button>
    </Container>
  );
};

export default Card;
