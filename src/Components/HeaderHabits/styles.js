import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 800px) {
    flex-direction: row;
  }
  .col-left {
    flex-basis: 100%;
    img {
      -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.4);
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.4);
    }
    @media (min-width: 800px) {
      flex-basis: 30%;
    }
  }
  .col-right {
    flex-basis: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    @media (min-width: 800px) {
      flex-basis: 70%;
    }
  }
`;
