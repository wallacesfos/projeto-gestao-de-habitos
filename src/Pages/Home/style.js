import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 10px;
  background-color: var(--background);
  .column-reverse {
    flex-direction: column-reverse;
  }
`;
export const ContainerNav = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    flex-basis: 100%;
    img {
      -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.4);
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.4);
    }
  }
  @media (min-width: 800px) {
    flex-direction: row;
  }
`;
export const Section = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Red+Hat+Text:wght@300;400;600&display=swap");
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  div {
    flex-basis: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card {
    width: 90%;
    max-width: 300px;
    height: 250px;
    padding: 10px;
    background-color: var(--background-white);
    -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.4);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.4);
    font-size: 1.3rem;
    color: var(--color-cinzaEscuro);
    font-family: "Red Hat Text", Arial, Helvetica, sans-serif;
    font-weight: 600;
  }
  @media (min-width: 800px) {
    flex-direction: row !important;
  }
`;
export const ContainerButton = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-cinzaEscuro);
  font-family: "Red Hat Text", Arial, Helvetica, sans-serif;
  font-weight: 600;
`;
export const ContainerApp = styled.div`
  width: 100%;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    flex-basis: 100%;
    min-height: 50px;
    color: var(--black);
    font-family: "Red Hat Text", Arial, Helvetica, sans-serif;
    font-weight: 600;
    display: flex;
    justify-content: center;
  }
  @media (min-width: 600px) {
    flex-direction: row;
  }
`;
export const ContainerFooter = styled.div`
  width: 100%;
  min-height: 0px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  background-color: var(--background-escuro);

  div {
    flex-basis: 100%;
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
  }
`;
