import styled from "styled-components";
import card from "../../Utils/Assets/card.png";

export const ContainerCard = styled.div`
  background: url(${card});
  width: 228px;
  height: fit-content;
  /* height: 215px; */
  box-sizing: border-box;
  padding: 15px;
  margin-bottom: 2rem;
  -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.4);
  @media (min-width: 1024px) {
    margin-right: 1rem;
  }
`;

export const H1 = styled.h1`
  font-size: 1.25rem; // 1rem = 16px
  color: var(--color-cinzaEscuro);
  text-align: center;
  font-family: "Red Hat Text";
  font-weight: 600;
`;

export const P = styled.p`
  font-size: 1rem;
  color: #000000;
  font-family: "Red Hat Text";
`;
