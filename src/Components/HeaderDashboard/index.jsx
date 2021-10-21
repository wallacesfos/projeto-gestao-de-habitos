import { Container } from "./styles.js";
import logo from "../../Utils/Assets/logo.png";
import Nav from "../Nav";
import Search from "../Search";
export default function Header({
  callback,
  param,
  placeHolder,
  variavel,
  setVariavel,
}) {
  return (
    <Container>
      <div className="col-left">
        <img src={logo} alt="Logo Quero!" />
      </div>
      <div className="col-right">
        <Nav dashboard />
        <Search
          callback={callback}
          placeHolder={placeHolder}
          variavel={variavel}
          setVariavel={setVariavel}
        />
      </div>
    </Container>
  );
}
