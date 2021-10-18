import { TextField } from "@material-ui/core";
import { ContainerNav, Newsletter } from "./style.js";
export default function Nav({ dashboard = false, footer = false }) {
  //props boleanas dashboard e footer
  //menu padrao da pagina home com cadastre-se
  //menu props footer para o navbar footer
  //menuprops dashboard para menu dodashboard
  return (
    <>
      {!dashboard && (
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
          <li>Meus Hábitos</li>
          <li>Suporte</li>
          <li>Sair</li>
        </ContainerNav>
      )}
    </>
  );
}
