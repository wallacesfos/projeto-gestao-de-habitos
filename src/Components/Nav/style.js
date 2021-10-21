import styled from "styled-components";

export const ContainerNav = styled.ul`
  @import url("https://fonts.googleapis.com/css2?family=Red+Hat+Text:wght@300;400;600&display=swap");
  width: 100%;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0px;
  justify-content: center;
  li {
    /* flex-basis: 50%; */
    font-family: "Red Hat Text";
    font-weight: 600;
    color: var(--color-cinzaEscuro);
    padding: 10px 10px;
    line-height: 30px;
  }
  li a {
    font-family: "Red Hat Text";
    font-weight: 600;
    color: var(--color-cinzaEscuro);

    :hover {
      text-decoration: underline;
    }
  }
  @media (min-width: 800px) {
    li {
      /* flex-basis: 40%; */
      padding: 5px 10px;
    }
  }
  .ButtonOut {
    background-color: transparent;
    border: none;
    font-family: "Red Hat Text";
    font-weight: 600;
    color: var(--color-cinzaEscuro);
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }
`;
export const Newsletter = styled.div`
  width: 230px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  min-height: 150px;
  background-color: var(--background-white);
  -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.4);
  .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root {
    border-radius: 150px;
    padding: 0 !important;
  }
  button {
    width: 90%;
  }
  h1 {
    font-size: 1.2rem;
    font-family: "Red Hat Text";
    font-weight: 600;
    color: var(--color-cinzaEscuro);
    color: var(--color-cinzaEscuro);
  }
`;
