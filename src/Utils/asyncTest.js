import { toast, ToastContainer } from "react-toastify";
import { deleteActivity } from "./endpoints/activities";

const AsyncButtonTest = () => {
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM1MDgzNDE2LCJqdGkiOiJlNDRiZjNiZTI5Yzg0NzU4YWMwMTg0ZjkzZGI3OWY2NyIsInVzZXJfaWQiOjI4MX0.-7EtcSsxHywuRPqQGm23yo1RYl_08u2Xvg9KXjpW4ms";

  const body = {
    title: "Crossfit Atualizado",
  };

  const handle = async () => {
    const resp = await deleteActivity({ activity_id: 193, token });

    if (resp.status === 400) {
      toast.error("Apenas o criador edita");
    }

    if (resp.status === 204) {
      toast.success("Atividade atualizada");
    }

    console.log(resp);
  };

  return (
    <>
      <ToastContainer />
      <button onClick={handle}> Enviar </button>
    </>
  );
};

export default AsyncButtonTest;
