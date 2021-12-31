import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70px;
  margin-bottom: 24px;
  background-color: #24232a;

  header {
    display: flex;
    align-items: center;
    width: 1000px;
  }

  input {
    border: 1px solid #5b5a5f;
    color: #a3a2a7;
    width: 100%;
    height: 40px;
    border-radius: 8px;
    padding: 8px;
    margin-left: 24px;
  }

  button {
    background-color: #a3a2a7;
    color: #fff;
    border-radius: 8px;
    padding: 8px 16px;
    margin-left: 12px;
    height: 42px;

    &:hover {
      box-shadow: 0 0 0.3em rgba(0, 0, 0, 0.3);
      background-color: #b6b4b9;
    }
  }
`;
