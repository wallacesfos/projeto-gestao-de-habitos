import api from "../../api";

export const unsubscribeFromGroup = ({ group_id, token }) => {
  return api.delete(`groups/${group_id}/unsubscribe/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getSubscriptions = (token) => {
  return api.get(`groups/subscriptions/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const subscribeToGroup = (token) => {
  return api.post(`groups/20/subscribe/`, {
    headers: {
      // null: null,
      Authorization: `Bearer ${token}`,
    },
  });
};

export const editGroup = ({ group_id, body, token }) => {
  return api.patch(`groups/${group_id}/`, body, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};
