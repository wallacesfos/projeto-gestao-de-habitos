import styled from "styled-components";

export const ContainerFooter = styled.div`
  width: 100%;
  min-height: 100px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  background-color: var(--background-escuro);
  .footer-col {
    flex-basis: 100%;
    max-width: 500px;
    color: var(--color-cinzaEscuro);
    font-family: "Red Hat Text", Arial, Helvetica, sans-serif;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.4);
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.4);
    }
  }
  @media (min-width: 600px) {
    flex-direction: row;
    div {
      margin: 0 auto;
    }
  }
`;
