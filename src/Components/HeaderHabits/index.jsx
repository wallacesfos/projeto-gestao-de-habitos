import { Container } from "./styles.js";
import logo from "../../Utils/Assets/logo.png";
import Nav from "../Nav";
import SearchHabits from "../SearchHabits/index.jsx";
export default function HeaderHabits({
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
        <SearchHabits
          callback={callback}
          placeHolder={placeHolder}
          variavel={variavel}
          setVariavel={setVariavel}
        />
      </div>
    </Container>
  );
}
