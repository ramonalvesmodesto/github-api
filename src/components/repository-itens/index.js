import React from "react";
import * as Styled from "./style";

function RepositoryItem({ name, linkToRepo, fullName }) {
  return (
    <>
      <h2>{name}</h2>
      <Styled.Wrapper>
        <h4>Full Name: </h4>
        <a href={linkToRepo} target="_blank" rel="noreferrer">
          {fullName}
        </a>
      </Styled.Wrapper>
    </>
  );
}

export default RepositoryItem;
