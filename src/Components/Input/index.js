import { StyledTextField } from "./styles";

export const NewInput = ({ placeholder, height, width }) => {
  return (
    <StyledTextField
      variant="outlined"
      placeholder={placeholder}
      height={height}
      width={width}
    />
  );
};
