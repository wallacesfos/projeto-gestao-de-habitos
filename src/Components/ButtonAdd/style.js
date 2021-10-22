import styled from "styled-components";
import add from "../../Utils/Assets/add.svg";
export const ButtonNew = styled.button`
  background-color: transparent;
  background-image: url(${add});
  width: 150px;
  height: 150px;
  border: none;
  cursor: pointer;
`;
export const Container = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  @media (min-width: 800px) {
    flex-direction: row;
    align-items: flex-start;
  }
  .Container-col {
  }
`;
export const Conversation = styled.div`
  width: 200px;
  padding: 10px;
  border-radius: 7px 7px 7px 0px;
  margin-top: 20px;
  -webkit-box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.4);
  color: var(--color-cinzaEscuro);
  background-color: var(--background-white);
  display: flex;
  justify-content: flex-start;
  color: var(--color-cinzaEscuro);
  text-align: center;
  font-family: "Red Hat Text";
  font-weight: 600;
`;
