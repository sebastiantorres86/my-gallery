import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-gap: 11.7px;
  grid-template-columns: repeat(3, auto);
  margin-top: 39px;
  margin-bottom: 40px;

  @media only screen and (min-width: ${({ theme }) => theme.desktop}) {
    grid-template-columns: repeat(3, auto);
    grid-gap: 32px;
    margin-top: 64px;
    margin-bottom: 100px;
  }
`;

export const Item2 = styled.div`
  grid-column-start: 2;
  grid-column-end: 4;
`;

export const Item3 = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
`;

export const Item4 = styled.div`
  grid-row-start: 2;
  grid-row-end: 4;
  grid-column-start: 3;
`;

export const Item5 = styled.div`
  grid-row-start: 3;
  grid-row-end: 4;
`;

export const Item = styled.div`
  /* width:110px;
  height: 110px; */
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  margin: 0;
  padding: 0;
`;
