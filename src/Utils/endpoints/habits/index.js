import jwtDecode from "jwt-decode";
import api from "../../api";

export const createHabit = ({ body, token }) => {
  const { user_id } = jwtDecode(token);

  const fullBody = { ...body, user: user_id };

  return api.post(`habits/`, fullBody, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateHabit = ({ habit_id, body, token }) => {
  return api.patch(`habits/${habit_id}/`, body, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getHabits = (token) => {
  return api.get(`habits/personal/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteHabit = ({ habit_id, token }) => {
  return api.delete(`habits/${habit_id}/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
