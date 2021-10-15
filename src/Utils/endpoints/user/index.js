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

export const updateProfile = ({ user_id, body, token }) => {
  return api.patch(`users/${user_id}/`, body, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};
