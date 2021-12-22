import React from "react";

const RepositoryItem = ({ name, linkToRepo, fullname }) => {
  return (
    <div>
      <h2>{name}</h2>
      <h4>{fullname} </h4>
      <a href={linkToRepo} target="_blank" rel="noreferrer">
        luanastephany/afrianska
      </a>
    </div>
  );
};

export default RepositoryItem;
