import React from "react";
import { Link, Name, Title, Wrapper } from "./styled";

const RepositoryItem = ({ name, linkToRepo, fullname }) => {
  return (
    <Wrapper>
      <Title>{name}</Title>
      <Name>link: </Name>
      <Link href={linkToRepo} target="_blank" rel="noreferrer">
        {fullname}
      </Link>
    </Wrapper>
  );
};

export default RepositoryItem;
