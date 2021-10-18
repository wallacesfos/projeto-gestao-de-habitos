import styled from "styled-components";
import { Button } from "@material-ui/core";

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
