import jwtDecode from "jwt-decode";
import requisitionControler from "../../../Services/requisitionControler";
import api from "../../api";

export const createHabit = ({ body, token }) => {
  const { user_id } = jwtDecode(token);

  const fullBody = { ...body, user: user_id };

  const resp = requisitionControler(
    api.post(`habits/`, fullBody, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
  );

  return resp;
};

export const updateHabit = ({ habit_id, body, token }) => {
  const resp = requisitionControler(
    api.patch(`habits/${habit_id}/`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
  );

  return resp;
};

export const getHabits = (token) => {
  const resp = requisitionControler(
    api.get(`habits/personal/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  );

  return resp;
};

export const deleteHabit = ({ habit_id, token }) => {
  const resp = requisitionControler(
    api.delete(`habits/${habit_id}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  );

  return resp;
};
