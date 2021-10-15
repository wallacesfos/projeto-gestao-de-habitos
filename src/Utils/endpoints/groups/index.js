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

export const subscribeToGroup = ({ group_id, token }) => {
  return api.post(
    `/groups/${group_id}/subscribe/`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const editGroup = ({ group_id, body, token }) => {
  return api.patch(`groups/${group_id}/`, body, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const createGroup = ({ body, token }) => {
  return api.post(`groups/`, body, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getGroups = (params = null) => {
  const page = params?.page;
  const category = params?.category;

  let url = "groups/";

  if (page || category) {
    url += "?";
  }

  if (page) {
    url += `page=${page}&`;
  }

  if (category) {
    url += `category=${category}&`;
  }

  return api.get(url);
};

export const getSpecificGroup = (group_id) => {
  return api.get(`/groups/${group_id}/`);
};
