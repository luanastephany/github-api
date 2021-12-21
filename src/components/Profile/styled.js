import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
`

export const InfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: auto;
  margin-left: 8px;
`

export const StatusCount = styled.div`
  display: flex;
  align-items: center;
  div {
    margin: 8px;
    text-align: center;
  }
`

export const Username = styled.div`
  display: flex;
  align-items: center;
  h3 {
    margin-right: 8px;
  }
`

export const Image = styled.img`
  border-radius: 50%;
  overflow: hidden;
  width: 200px;
  margin: 8px;
`