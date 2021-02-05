import React from "react";
import { Container, Div, Image } from "./Header.styled";
import Tag from "../Tag";

const Header = ({ name, avatar, location }) => {
  return (
    <Container>
      <Image src={avatar} alt={name} />
      <h1>{name}</h1>
      <small>{location}</small>
      <Div>
        <Tag number={"100"} data={"Post"} />
        <Tag number={"2,242"} data={"Followers"} />
        <Tag number={"1,432"} data={"Following"} />
      </Div>
    </Container>
  );
};

export default Header;
