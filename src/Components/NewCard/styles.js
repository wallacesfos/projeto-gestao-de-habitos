import styled from "styled-components";
import card from "../../Utils/Assets/add.svg";

export const ContainerCard = styled.div`
  background: url(${card});
  width: 215px;
  height: 215px;
  box-sizing: border-box;
  padding: 15px;
  margin-right: 2rem;
  cursor: pointer;
  pointer-events: all;
`;
