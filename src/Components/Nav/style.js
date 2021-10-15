import styled from "styled-components";

export const ContainerNav = styled.ul`
  @import url("https://fonts.googleapis.com/css2?family=Red+Hat+Text:wght@300;400;600&display=swap");
  text-align: center;
  li {
    display: inline-flex;
    font-family: "Red Hat Text";
    font-weight: 600;
    color: var(--color-cinzaEscuro);
    padding: 5px;
  }
  @media (min-width: 600px) {
    display: inline-flex;
    li {
      margin: 0px 20px;
    }
  }
`;
