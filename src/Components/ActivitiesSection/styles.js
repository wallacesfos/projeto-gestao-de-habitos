import styled, { css } from "styled-components";

export const AsideBar = styled.section`
  ul {
    display: flex;
    flex-direction: column;
  }
`;

export const Item = styled.li`
  text-align: center;
  margin: 10px auto;
  overflow: hidden;
  cursor: pointer;

  width: 95%;

  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  > h4 {
    background-color: #ccc;
    width: 100%;
    padding: 5px;
  }

  transition: transform 0.1s linear;
  &:hover {
    transform: scale(1.01);
  }

  @media (min-width: 800px) {
    &:active {
      transform: scale(0.99);
    }
  }
`;
