import styled from "styled-components";
export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Red+Hat+Text:wght@300;400;600&display=swap");
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`;
export const Main = styled.div`
  width: 100%;
  max-width: 800px;
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
`;
