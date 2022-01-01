import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  background-color: #24232a;
  border-radius: 12px;
  padding: 24px;
  gap: 24px;
  width: 100%;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
`;

export const InfoUser = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 200px;
  flex: 1;

  .informations {
    flex: 1;
  }
  h1 {
    font-size: 24px;
    font-weight: bold;
    color: #cccccf;
  }
  h4 {
    font-size: 16px;
    font-weight: bold;
    color: #cccccf;
  }

  span {
    color: #cccccf;
  }
`;

export const StatusCount = styled.div`
  display: flex;
  flex-direction: column;
  width: 180px;
  gap: 12px;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    gap: 20px;
    text-align: center;
  }
`;

export const Username = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;

  a {
    color: #cccccf;
    font-size: 18px;
    margin: 8px 0;
  }
`;

export const Image = styled.img`
  border-radius: 50%;
  overflow: hidden;
  width: 200px;
  margin: 8px;
`;
