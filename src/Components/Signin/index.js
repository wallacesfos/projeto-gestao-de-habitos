import { TextField, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form, Title, Login, Block, Cadastre } from "./style";
import { login } from "../../Utils/endpoints/user";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginSchema } from "../Yup";
import { useHistory } from "react-router-dom";

export default function SignIn() {
  const history = useHistory();

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
      localStorage.setItem("@Quero_token", JSON.stringify(resp.data.access));
      history.push('/dashboard');
    }
  };

  return (
    <Form className="formRegister" onSubmit={handleSubmit(handleForm)}>
      <ToastContainer />
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
        <p>Não tem cadastro? <Login onClick={() => history.push('./sign-up')}>Cadastre-se</Login></p>
      </Cadastre>
    </Form>
  );
}
