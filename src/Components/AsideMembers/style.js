import styled from "styled-components";

export const AsideBar = styled.section`
  width: 100%;

  padding: 4px;
  border-radius: 10px;

  background-color: white;

  > div.headerBox {
    background-color: #e09cd1;
    border-radius: 10px 10px 0 0;

    height: 70px;

    display: flex;
    justify-content: center;
    align-items: center;

    > h3 {
      margin-left: 5px;
    }
  }
`;
