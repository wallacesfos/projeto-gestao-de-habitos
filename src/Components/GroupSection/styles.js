import styled from "styled-components";

export const SectionBox = styled.div`
  width: 100%;

  padding: 4px;
  margin: 20px 0;
  border-radius: 10px;

  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  > div.headerBox {
    border-radius: 10px 10px 0 0;
    background-color: ${({ color }) => color};
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;

    > img {
      height: 50px;
      width: 50px;
    }

    > h3 {
      margin-left: 5px;
      font-size: 28px;
    }
  }
`;
