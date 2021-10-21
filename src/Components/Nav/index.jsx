import { TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import { ContainerNav, Newsletter } from "./style.js";
import { useHistory } from "react-router-dom";
export default function Nav({ dashboard = false, footer = false }) {
  const history = useHistory();
  const Out = () => {
    localStorage.clear();
    history.push("/");
  };

  return (
    <>
      {!dashboard && (
        <ContainerNav>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/quem-somos">Quem Somos</Link>
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
          {footer && (
            <li>
              <Newsletter>
                <h1>Newsletter</h1>
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                />
                <button className="btn-primary btn-primary">Enviar</button>
              </Newsletter>
            </li>
          )}
        </ContainerNav>
      )}
      {dashboard && (
        <ContainerNav>
          <li>Meu Perfil</li>
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
    </>
  );
}
