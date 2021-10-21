import { StyledTextField } from "./styles";

export const NewInput = ({ placeholder, height, width, ...rest }) => {
  return (
    <StyledTextField
      {...rest}
      variant="outlined"
      {...{ placeholder, height, width }}
    />
  );
};
