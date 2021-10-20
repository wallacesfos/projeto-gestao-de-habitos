import styled from "styled-components";

export const AsideBar = styled.section`
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    > hr {
      width: 40%;
    }
  }
`;

export const Item = styled.li`
  text-align: center;
  margin: 10px 0;
`;
