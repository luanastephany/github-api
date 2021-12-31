import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #5b5a5f;
  border-radius: 12px;
  margin: 16px;
  width: 440px;
  height: 180px;
  padding: 12px;
  align-content: center;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
`;

export const Title = styled.h2`
  font-weight: bold;
  margin: 8px 0 28px 0;
  color: #3c5e9b;
  font-size: 20px;
`;

export const Name = styled.h2`
  margin: 8px 0;
  color: #d9d8dd;
`;

export const Link = styled.a`
  font-size: 14px;
  margin: 8px 0;
  color: #d9d8dd;
`;
