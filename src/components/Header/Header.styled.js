import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Div = styled.div`
  display: flex;
  width: 261px;
  justify-content: space-between;
  margin-top: 12px;

  @media only screen and (min-width: ${({ theme }) => theme.desktop}) {
    width: 348px;
    margin-top: 24px;
  }
`;

export const Image = styled.img`
  width: 101.76px;
  height: 101.76px;
  border-radius: 16px;

  @media only screen and (min-width: ${({ theme }) => theme.desktop}) {
    width: 156px;
    height: 156px;
  }
`;
