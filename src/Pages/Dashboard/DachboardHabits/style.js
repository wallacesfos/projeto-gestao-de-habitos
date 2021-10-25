import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`;
export const Main = styled.div`
  width: 100%;
  max-width: 800px;
  height: 100%;
  min-height: 700px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Section = styled.div`
  width: 100%;
  text-align: center;
  h1 {
    font-family: "Red Hat Text";
    font-weight: 600;
    color: var(--color-cinzaEscuro);
  }
  .Section-ButtonAdd {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0px;
    flex-direction: column;
  }
  .Section-Cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 50px;
    padding: 10px 0px;
    @media (min-width: 600px) {
      justify-content: flex-start;
    }
  }
  .Empty {
    width: 100%;
    text-align: center;
    img {
      width: 100%;
      max-width: 300px;
    }
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
    background-color: var(--backgroun-white);
    -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.4);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.4);
  }
`;
