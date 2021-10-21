import { TextField, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form, Title, Login, Block, Cadastre } from "./style";
import { Schema } from "../Yup";
import { createAcount } from "../../Utils/endpoints/user";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router";

export default function Register() {
  const history = useHistory()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(Schema) });

  const handleForm = async (data) => {
    const formData = {
      username: data.name,
      email: data.email,
      password: data.password,
    };

    const resp = await createAcount(formData);
    console.log(resp);

    if (resp.status === 400) {
      toast.error("Usuário já existe");
    }

    if (resp.status === 201) {
      toast.success("Conta criada com sucesso!");
      history.push('/login')
    }
  };

  return (
    <Form className="formRegister" onSubmit={handleSubmit(handleForm)}>
      <ToastContainer />
      <Title>Registre-se</Title>
      <div className="divTexts">
        <TextField
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

      <div className="divTexts">
        <TextField
          id="outlined-required"
          variant="outlined"
          size="small"
          color="primary"
          margin="normal"
          label="Email"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
          className="inputField"
        />
      </div>

      <div className="divTexts">
        <TextField
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
      <div className="divTexts">
        <TextField
          id="outlined-required"
          variant="outlined"
          size="small"
          color="primary"
          margin="normal"
          label="Confirme senha"
          type="password"
          {...register("passwordConfirmation")}
          error={!!errors.passwordConfirmation}
          helperText={errors.passwordConfirmation?.message}
          className="inputField"
        />
      </div>

      <Block>
        <Button className="btn-primary" type="Submit" variant="contained">
          Cadastrar
        </Button>
      </Block>
      <Cadastre className="text-login">
        <p>Já é cadastrado? <Login onClick={() => history.push('/login')}>Faça login</Login></p>
      </Cadastre>
    </Form>
  );
}
