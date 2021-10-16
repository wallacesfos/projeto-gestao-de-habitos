import styled from "styled-components";

export const ContainerNav = styled.ul`
  @import url("https://fonts.googleapis.com/css2?family=Red+Hat+Text:wght@300;400;600&display=swap");
  text-align: center;
  flex-basis: none !important;
  li {
    display: inline-flex;
    font-family: "Red Hat Text";
    font-weight: 600;
    color: var(--color-cinzaEscuro);
    padding: 5px;
    line-height: 30px;
  }
  @media (min-width: 600px) {
    display: inline-flex;
    li {
      margin: 0px 20px;
      padding: 0px;
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