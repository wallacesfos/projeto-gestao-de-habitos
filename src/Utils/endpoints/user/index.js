import jwtDecode from "jwt-decode";
import api from "../../api";

const respConstructor = ({ data, status, statusText }) => {
  return { data, status, statusText };
};

const requisitionControler = async (promise) => {
  let resp = {};

  await promise
    .then((data) => {
      resp = { ...respConstructor(data) };
    })
    .catch((err) => {
      resp = { ...respConstructor(err.response) };
    });

  return resp;
};

export const createAcount = (body) => {
  let resp = requisitionControler(
    api.post("users/", body, {
      headers: {
        "Content-Type": "application/json",
      },
    })
  );

  return resp;
};

export const login = (body) => {
  let resp = requisitionControler(
    api.post("sessions/", body, {
      headers: {
        "Content-Type": "application/json",
      },
    })
  );

  return resp;
};

export const updateProfile = ({ body, token }) => {
  const { user_id } = jwtDecode(token);

  let resp = requisitionControler(
    api.patch(`users/${user_id}/`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
  );

  return resp;
};
