import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  background-color: #24232a;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
`;

export const InfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 200px;
  margin-left: 8px;
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
  align-items: center;
  div {
    margin: 8px;
    text-align: center;
  }
`;

export const Username = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  h3 {
    margin-right: 8px;
  }
  a {
    color: #cccccf;
    font-size: 18px;
  }
`;

export const Image = styled.img`
  border-radius: 50%;
  overflow: hidden;
  width: 200px;
  margin: 8px;
`;
