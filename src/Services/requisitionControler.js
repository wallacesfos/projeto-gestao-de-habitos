const respConstructor = ({ data, status, statusText }) => {
  return { data, status, statusText };
};

const requisitionControler = async (promise) => {
  let resp = {};

  await promise
    .then((data) => {
      resp = { ...respConstructor(data) };
    })
    .catch((err) => {
      resp = { ...respConstructor(err.response) };
    });

  return resp;
};

export default requisitionControler;
