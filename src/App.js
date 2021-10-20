import Header from "./Components/HeaderDashboard/index.jsx";
import { GlobalStyle } from "./Utils/globalStyle.js";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header placeHolder="Digite o nome do habito..." />
    </div>
  );
}

export default App;
