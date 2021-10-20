import { TextField, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form, Title, Login, Block, Cadastre } from "./style";
import { login } from "../../Utils/endpoints/user";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginSchema } from "../Yup";

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(LoginSchema) });

  const handleForm = async (data) => {
    const resp = await login({
      username: data.name,
      password: data.password,
    });

    console.log(resp);
    if (resp.status === 401) {
      toast.error("A conta não existe");
    }

    if (resp.status === 200) {
      localStorage.clear();
      localStorage.setItem("@token", JSON.stringify(resp.data.access));
    }
  };

  return (
    <>
      <ToastContainer />
      <Form className="formRegister" onSubmit={handleSubmit(handleForm)}>
        <Title>Usuário</Title>
        <div className="divTexts">
          <TextField
            required
            id="outlined-required"
            variant="outlined"
            size="small"
            color="primary"
            margin="normal"
            label="Usuário"
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message}
            className="inputField"
          />
        </div>

        <Title>Senha</Title>
        <div className="divTexts">
          <TextField
            required
            id="outlined-required"
            variant="outlined"
            size="small"
            color="primary"
            margin="normal"
            label="Senha"
            type="password"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
            className="inputField"
          />
        </div>

        <Block>
          <Button className="btn-primary" type="Submit" variant="contained">
            Entrar
          </Button>
        </Block>
        <Cadastre className="text-login">
          Não tem cadastro? <Login>Cadastre-se</Login>
        </Cadastre>
      </Form>
    </>
  );
}
