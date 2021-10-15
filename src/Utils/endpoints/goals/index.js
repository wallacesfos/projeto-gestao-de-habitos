import api from "../../api";

export const getGroupGoal = ({ group_id, page = 1 }) => {
  let url = `goals/?group=${group_id}&page=${page}`;

  return api.get(url);
};
