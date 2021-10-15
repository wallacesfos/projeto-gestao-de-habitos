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
