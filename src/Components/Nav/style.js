import styled from "styled-components";

export const ContainerNav = styled.ul`
  width: 100%;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0px;
  font-size: 1.2rem;
  justify-content: center;
  a {
    font-family: "Red Hat Text", sans-serif;
    font-weight: 600;
    color: var(--color-cinzaEscuro);
  }
  li {
    font-family: "Red Hat Text", sans-serif;
    font-weight: 600;
    color: var(--color-cinzaEscuro);
    padding: 10px 5px;
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
      padding: 5px 5px;
    }
  }
  .ButtonOut {
    background-color: transparent;
    border: none;
    font-family: "Red Hat Text";
    font-weight: 600;
    font-size: 1.2rem;
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
export const ContainerModal = styled.div`
  z-index: 2;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .Modal {
    width: 100%;
    max-width: 800px;
    min-height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.4);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.4);
  }
`;
