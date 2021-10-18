import jwtDecode from "jwt-decode";
import api from "../../api";

export const createAcount = (body) => {
  return api.post("users/", body, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const login = (body) => {
  return api.post("sessions/", body, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const updateProfile = ({ body, token }) => {
  const { user_id } = jwtDecode(token);

  return api.patch(`users/${user_id}/`, body, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};
