import styled from "styled-components";
import { TextField, Button } from "@material-ui/core";

export const Header = styled.div`
  display: flex;
  min-width: 100vw;
  padding: 5rem;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  justify-content: space-around;
`;

export const PictureContainer = styled.div`
  margin-right: 2rem;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-height: fit-content;
`;

export const StyledTextField = styled(TextField)`
  && {
    border-radius: 10px;
    min-width: 550px;
    max-height: 35px;
    box-shadow: 5px 5px 15px 5px #000000;
    margin-right: 1.5rem;
    padding: none;
    background-color: var(--background-white);
    :focus {
      border-color: orange;
    }
    > div {
      max-height: 35px;
      border-radius: 10px;
      min-width: 550px;
      > input {
        ::placeholder {
          font-style: italic;
        }
      }
    }
  }
`;

export const StyledButton = styled(Button)`
  && {
    max-width: 100px;
    max-height: 35px;
    background-color: var(--orange-main);
    border-radius: 10px;
    color: var(--background-white);
    :hover {
      background-color: var(--orange-main);
    }
  }
`;
