import React from "react";
import { Wrapper } from "./Tag.styled";

const Tag = ({ number, data }) => {
  return (
    <Wrapper>
      <p>{number}</p>
      <small>{data}</small>
    </Wrapper>
  );
};

export default Tag;
