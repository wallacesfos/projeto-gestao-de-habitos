import api from "../../api";

const createAcount = (username, email, password) => {
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

export default createAcount;
