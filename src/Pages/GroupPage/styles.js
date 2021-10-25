import styled from "styled-components";

export const Container = styled.div`
  padding: 0 10px;
  max-width: 1238px;
  margin: 0 auto;

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
`;

export const HeaderBox = styled.header`
  margin: 30px 10px 10px;
  text-align: center;

  > h2 {
    background-color: var(--background-escuro);
    padding: 10px;
    border-radius: 10px 10px 0 0;
  }

  > p {
    font-size: 22px;
  }

  > button.unsubscribeButton {
    width: fit-content;
    padding: 0 10px;
    margin-left: auto;
    font-size: 15px;
  }
`;

export const SectonBox = styled.section`
  display: flex;
  flex-direction: column;
`;

export const BoxMain = styled.main`
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    flex-direction: row;

    .rightSection {
      flex: 1;

      .sectionBox {
        @media (min-width: 1024px) {
          max-width: 90%;

          ul {
            flex-wrap: wrap;
            justify-content: space-around;
            flex-direction: row;
          }
        }
      }
    }
  }
`;
