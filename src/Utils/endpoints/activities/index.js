import api from "../../api";

export const getGroupActivities = ({ group_id, page = 1 }) => {
  const url = `activities/?group=${group_id}&page=${page}`;

  return api.get(url);
};

export const getSpecificActivitie = (activitie_id) => {
  return api.get(`activities/${activitie_id}/`);
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
