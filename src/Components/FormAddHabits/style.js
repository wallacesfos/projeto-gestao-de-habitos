import styled from "styled-components";
export const Container = styled.ul`
  @import url("https://fonts.googleapis.com/css2?family=Red+Hat+Text:wght@300;400;600&display=swap");
  width: 100%;
  min-height: 100px;
  background-color: var(--background-white);
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  color: var(--color-cinzaEscuro);
  font-family: "Red Hat Text", Arial, Helvetica, sans-serif;
  font-weight: 600;
  display: flex;
  .title {
    flex-basis: 100%;
  }
  li {
    padding: 5px;
    .input {
      border-radius: 150px;
      div {
        border-radius: 150px;
      }
    }
    /* @media (min-width: 800px) {
      flex-basis: 50%;
    } */
  }
  @media (min-width: 800px) {
    justify-content: flex-start;
  }
`;
