import requisitionControler from "../../../Services/requisitionControler";
import api from "../../api";

export const getGroupActivities = ({ group_id, page = 1 }) => {
  const url = `activities/?group=${group_id}&page=${page}`;

  const resp = requisitionControler(api.get(url));

  return resp;
};

export const getSpecificActivity = (activity_id) => {
  const resp = requisitionControler(api.get(`activities/${activity_id}/`));

  return resp;
};

export const createActivity = ({ body, token }) => {
  const resp = requisitionControler(
    api.post(`activities/`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
  );

  return resp;
};

export const updateActivity = ({ activity_id, body, token }) => {
  const resp = requisitionControler(
    api.patch(`activities/${activity_id}/`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
  );

  return resp;
};

export const deleteActivity = ({ activity_id, token }) => {
  const resp = requisitionControler(
    api.delete(`activities/${activity_id}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  );

  return resp;
};
