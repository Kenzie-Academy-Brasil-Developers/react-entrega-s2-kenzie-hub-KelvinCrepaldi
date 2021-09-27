import styled from "styled-components";

export const Container = styled.div`
  width: 900px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  .top {
    display: flex;
    justify-content: space-between;
    padding: 30px;
  }
  h1 {
    width: 500px;
  }

  .inputContainer {
    border: 1px solid rgba(0, 0, 0, 0.4);
    padding: 20px;
    display: flex;
    flex-direction: column;

    justify-content: center;
  }

  h4 {
    font-size: 20px;
    padding: 10px;
  }

  form {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .inputField {
    width: 300px;
    margin: 10px;
  }

  .sendButton {
    height: 50px;
  }

  select {
    width: 200px;
    height: 40px;
    font-size: 20px;
  }
`;
