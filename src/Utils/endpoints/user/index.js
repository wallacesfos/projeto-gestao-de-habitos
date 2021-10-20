import jwtDecode from "jwt-decode";
import requisitionControler from "../../../Services/requisitionControler";
import api from "../../api";

export const createAcount = (body) => {
  const resp = requisitionControler(
    api.post("users/", body, {
      headers: {
        "Content-Type": "application/json",
      },
    })
  );

  return resp;
};

export const login = (body) => {
  const resp = requisitionControler(
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

  const resp = requisitionControler(
    api.patch(`users/${user_id}/`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
  );

  return resp;
};
