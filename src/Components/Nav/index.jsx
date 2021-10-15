import { ContainerNav } from "./style.js";
export default function Nav({ footer = false }) {
  return (
    <ContainerNav>
      <li> Quem Somos</li>
      <li>Login</li>
      {!footer && <li>Button de Cadastre-se</li>}
      {footer && <li>Formulario Newsletter</li>}
    </ContainerNav>
  );
}
