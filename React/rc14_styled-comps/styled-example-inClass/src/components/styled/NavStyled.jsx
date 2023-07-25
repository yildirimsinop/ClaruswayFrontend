import styled from "styled-components";

export const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 700px) {
    flex-direction: column;
  }

  background-color: ${({ theme }) => theme.colors.primary};
`;

export default NavStyled;
