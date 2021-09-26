import { Container, ButtonContainer } from "./styled";
import image from "../../assets/22.png";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  const handleLoginPage = () => {
    history.push("/login/");
  };
  const handleCadastroPage = () => {
    history.push("/cadastro/");
  };

  return (
    <>
      <Container>
        <h1>Kenzie Hub</h1>
        <img src={image} alt="imagem pagina-inicial" />
        <ButtonContainer>
          <button onClick={handleLoginPage}>Login</button>
          <button onClick={handleCadastroPage}>Cadastrar-se</button>
        </ButtonContainer>
      </Container>
    </>
  );
};

export default Home;
