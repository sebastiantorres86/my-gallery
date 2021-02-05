import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 78px;
  height: 52px;

  background: #e5e5e5;
  border-radius: 12px;
  padding: 10px 12px;

  @media only screen and (min-width: ${({ theme }) => theme.desktop}) {
    width: 100px;
    height: 67px;
  }
`;
