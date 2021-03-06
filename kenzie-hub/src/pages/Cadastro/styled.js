import styled from "styled-components";

export const ContainerCadastro = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 60px;
    margin: 40px;
  }
  form {
    width: 500px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: center;
    align-items: center;
  }

  button {
    margin: 30px 0px 0px 0px;
  }

  .inputField {
    width: 300px;
    margin: 5px;
  }

  .select {
    width: 300px;
    height: 40px;
    font-size: 15px;
  }
`;
