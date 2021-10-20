import requisitionControler from "../../../Services/requisitionControler";
import api from "../../api";

export const getGroupGoals = ({ group_id, page = 1 }) => {
  const url = `goals/?group=${group_id}&page=${page}`;
  const resp = requisitionControler(api.get(url));

  return resp;
};

export const getSpecificGoal = (goal_id) => {
  const resp = requisitionControler(api.get(`goals/${goal_id}/`));

  return resp;
};

export const createGoal = ({ body, token }) => {
  const resp = requisitionControler(
    api.post(`goals/`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
  );

  return resp;
};

export const updateGoal = ({ goal_id, body, token }) => {
  const resp = requisitionControler(
    api.patch(`goals/${goal_id}/`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
  );

  return resp;
};

export const deleteGoal = ({ goal_id, token }) => {
  const resp = requisitionControler(
    api.delete(`goals/${goal_id}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  );

  return resp;
};
