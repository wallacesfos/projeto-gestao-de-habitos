import { Redirect } from "react-router";

export const Out = () => {
  localStorage.clear();
  <Redirect to="/login" />;
};
