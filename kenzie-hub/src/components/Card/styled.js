import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  border: 1px solid black;
  margin: 5px;
  padding: 10px;
  justify-items: center;
  justify-content: flex-start;
  align-items: center;
  h2 {
    width: 40%;
  }
  p {
    width: 40%;
    font-size: 20px;
  }

  button {
    border: none;
    border: 1px solid black;
    width: 100px;
    height: 30px;
    border-radius: 5px;
  }

  button:hover {
    background-color: var(--black);
    color: var(--white);
    transition: 0.1s;
  }
`;
