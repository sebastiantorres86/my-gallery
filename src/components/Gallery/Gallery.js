import React from "react";
import {
  GridContainer,
  Item,
  Item2,
  Item3,
  Item4,
  Item5,
  Image,
} from "./Gallery.styled";
import image1 from "../../assets/photo1.png";
import image2 from "../../assets/photo2.png";
import image3 from "../../assets/photo3.png";
import image4 from "../../assets/photo4.png";
import image5 from "../../assets/photo5.png";
import image6 from "../../assets/photo6.png";

const Gallery = () => {
  return (
    <GridContainer>
      <Item>
        <Image src={image1} alt="#" />
      </Item>
      <Item2>
        <Image src={image2} alt="#" />
      </Item2>
      <Item3>
        <Image src={image3} alt="#" />
      </Item3>
      <Item4>
        <Image src={image4} alt="#" />
      </Item4>
      <Item5>
        <Image src={image5} alt="#" />
      </Item5>
      <Item>
        <Image src={image6} alt="#" />
      </Item>
    </GridContainer>
  );
};

export default Gallery;
