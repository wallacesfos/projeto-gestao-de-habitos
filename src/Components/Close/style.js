import styled from "styled-components";
export const ButtonClose = styled.button`
  display: inline;
  background-color: var(--background-white);
  color: gray;
  width: 30px;
  height: 30px;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  border-radius: 150px;
  border: none;
  transform: translateX(70px);
  cursor: pointer;
  :hover {
    color: var(--orange-main);
  }
`;
