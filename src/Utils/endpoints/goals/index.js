import api from "../../api";

export const getGroupGoals = ({ group_id, page = 1 }) => {
  const url = `goals/?group=${group_id}&page=${page}`;

  return api.get(url);
};

export const getSpecificGoal = (goal_id) => {
  return api.get(`goals/${goal_id}/`);
};

export const createGoal = ({ body, token }) => {
  return api.post(`goals/`, body, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateGoal = ({ goal_id, body, token }) => {
  return api.patch(`goals/${goal_id}/`, body, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteGoal = ({ goal_id, token }) => {
  return api.delete(`goals/${goal_id}/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
