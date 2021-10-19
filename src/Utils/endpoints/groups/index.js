import requisitionControler from "../../../Services/requisitionControler";
import api from "../../api";

export const subscribeToGroup = ({ group_id, token }) => {
  const resp = requisitionControler(
    api.post(
      `/groups/${group_id}/subscribe/`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
  );

  return resp;
};

export const unsubscribeFromGroup = ({ group_id, token }) => {
  const resp = requisitionControler(
    api.delete(`groups/${group_id}/unsubscribe/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  );

  return resp;
};

export const getSubscriptions = (token) => {
  const resp = requisitionControler(
    api.get(`groups/subscriptions/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  );

  return resp;
};

export const editGroup = ({ group_id, body, token }) => {
  const resp = requisitionControler(
    api.patch(`groups/${group_id}/`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
  );

  return resp;
};

export const createGroup = ({ body, token }) => {
  const resp = requisitionControler(
    api.post(`groups/`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
  );

  return resp;
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

  const resp = requisitionControler(api.get(url));

  return resp;
};

export const getSpecificGroup = (group_id) => {
  return api.get(`/groups/${group_id}/`);
};
