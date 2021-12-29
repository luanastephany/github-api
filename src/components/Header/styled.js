import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 24px;

  header {
    display: flex;
    width: 400px;
  }

  input {
    border: 1px solid rgb(5, 92, 102);
    width: 100%;
    height: 40px;
    border-radius: 8px;
    padding: 8px;
  }

  button {
    background-color: rgb(5, 92, 102);
    color: #fff;
    border-radius: 8px;
    padding: 8px 16px;
    margin-left: 8px;

    &:hover {
      box-shadow: 0 0 0.3em rgba(0, 0, 0, 0.3);
      background-color: rgb(38, 128, 138);
    }
  }
`;
