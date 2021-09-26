import styled from "styled-components";

export const Container = styled.div`
  width: 800px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  min-height: 100vh;

  h1 {
    width: 100%;
    font-size: 60px;
    padding: 30px;
  }

  img {
    width: 50%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  button {
    background-color: var(--white);
    border: none;
    border: 2px solid var(--black);
    border-radius: 5px;
    width: 200px;
    height: 40px;
    margin: 10px;
  }
`;
