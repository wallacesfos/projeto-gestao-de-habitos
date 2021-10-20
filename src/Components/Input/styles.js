import styled from "styled-components";
import { TextField } from "@material-ui/core";

export const StyledTextField = styled(TextField)`
  && {
    border-radius: 10px;
    min-width: ${(props) => `${props.width}px`};
    max-height: ${(props) => `${props.height}px`};
    -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.4);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.4);
    margin-bottom: 1rem;
    padding: none;
    background-color: var(--background-white);
    @media (min-width: 600px) {
      margin-bottom: 0px;
    }
    :focus {
      border-color: orange;
    }
    > div {
      min-width: ${(props) => `${props.width}px`};
      max-height: ${(props) => `${props.height}px`};
      border-radius: 10px;
      > input {
        ::placeholder {
          font-style: italic;
        }
      }
    }
  }
`;
