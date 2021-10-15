import api from "../../api";

export const getGroupActivities = ({ group_id, page = 1 }) => {
  const url = `activities/?group=${group_id}&page=${page}`;

  return api.get(url);
};

export const getSpecificActivity = (activity_id) => {
  return api.get(`activities/${activity_id}/`);
};

export const createActivity = ({ body, token }) => {
  return api.post(`activities/`, body, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateActivity = ({ activity_id, body, token }) => {
  return api.patch(`activities/${activity_id}/`, body, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteActivity = ({ activity_id, token }) => {
  return api.delete(`activities/${activity_id}/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
