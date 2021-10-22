import { TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import { ContainerNav, ContainerModal } from "./style.js";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import ClosePage from "../ClosePage";
import { updateProfile } from "../../Utils/endpoints/user/index.js";
import { toast } from "react-toastify";
export default function Nav({ dashboard = false, footer = false }) {
  const history = useHistory();
  const Out = () => {
    localStorage.clear();
    history.push("/");
  };
  const [isView, setIsView] = useState(false);
  const handleIsView = () => {
    setIsView(!isView);
  };
  const [userName, setUserName] = useState("");
  const handleUpdateName = async () => {
    const token = JSON.parse(localStorage.getItem("@Quero_token"));
    const body = {
      username: userName,
    };
    const resp = await updateProfile({ body, token });
    if (resp.status === 200) {
      toast.success("Alterado com Sucesso!");
    } else {
      toast.error("Erro ao tentar alterar!");
    }
    handleIsView();
  };
  return (
    <>
      {!dashboard && (
        <ContainerNav>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          {!footer && (
            <li>
              <Link to="/sign-up">
                <button className="btn-primary btn-primary">Cadastre-se</button>
              </Link>
            </li>
          )}
        </ContainerNav>
      )}
      {dashboard && (
        <ContainerNav>
          <li>
            <button onClick={() => handleIsView()} className="ButtonOut">
              Meu Perfil
            </button>
          </li>
          <li>
            <Link to="/group-dashboard">Meus Grupos</Link>
          </li>
          <li>
            <Link to="/dashboard">Meus Hábitos</Link>
          </li>
          <li>
            <button onClick={() => Out()} className="ButtonOut">
              Sair
            </button>
          </li>
        </ContainerNav>
      )}
      {isView && (
        <ContainerModal>
          <ClosePage delet callback={() => handleIsView()} />
          <div className="Modal">
            <TextField
              className="input"
              id="outlined-required"
              variant="outlined"
              size="small"
              color="primary"
              margin="normal"
              label="Novo Nome de Usuário"
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
            />
            <button className="btn-primary" onClick={() => handleUpdateName()}>
              Atualizar
            </button>
          </div>
        </ContainerModal>
      )}
    </>
  );
}
