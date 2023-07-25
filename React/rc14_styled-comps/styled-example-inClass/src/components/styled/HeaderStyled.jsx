import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
  }

  & div {
    flex: 1;
  }
  & img {
    flex: 1;
  }
`;

export default HeaderStyled;
