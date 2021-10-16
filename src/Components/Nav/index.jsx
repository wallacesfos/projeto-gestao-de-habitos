import { TextField } from "@material-ui/core";
import { ContainerNav, Newsletter } from "./style.js";
export default function Nav({ footer = false }) {
  return (
    <ContainerNav>
      <li> Quem Somos</li>
      <li>Login</li>
      {!footer && (
        <li>
          <button className="btn-primary btn-primary">Cadastre-se</button>
        </li>
      )}
      {footer && (
        <li>
          <Newsletter>
            <h1>Newsletter</h1>
            <TextField id="outlined-basic" label="Email" variant="outlined" />
            <button className="btn-primary btn-primary">Enviar</button>
          </Newsletter>
        </li>
      )}
    </ContainerNav>
  );
}
