import styled from "styled-components";

export const SectionBox = styled.div`
  width: 100%;
  max-width: 430px;

  padding: 4px;
  margin: 20px auto;
  border-radius: 10px;

  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  > div.headerBox {
    border-radius: 10px 10px 0 0;
    background-color: ${({ color }) => color};
    height: 70px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    padding: 0 10px;

    > img {
      height: 50px;
      width: 50px;
    }

    > h3 {
      margin-left: 5px;
      font-size: 28px;
      text-align: center;

      flex: 1;
    }

    .AddButton {
      height: 40px;
      width: 40px;
      cursor: pointer;

      color: ${({ color }) => color};
      filter: brightness(0.6);
    }
  }
`;

export const AddButton = styled.div`
  background-color: red;
`;
