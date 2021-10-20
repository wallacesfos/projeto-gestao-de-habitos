import Login from "./Pages/Login";
import Habits from "./Pages/Subscribe";
import { GlobalStyle } from "./Utils/globalStyle.js";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Login />
      <Habits />
    </div>
  );
}

export default App;
