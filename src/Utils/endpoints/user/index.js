import api from "../../api";

export const createAcount = (username, email, password) => {
  return api.post(
    "users/",
    {
      username: username,
      email: email,
      password: password,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export const login = (username, password) => {
  return api.post(
    "sessions/",
    {
      username: username,
      password: password,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export const updateProfile = (id, newUsername, token) => {
  return api.patch(
    `users/${id}/`,
    {
      username: newUsername,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
