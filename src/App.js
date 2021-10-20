import Register from "./Components/Register";
import Routes from "./Routes/";

import { GlobalStyle } from "./Utils/globalStyle.js";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes />
      <Register />
    </div>
  );
}

export default App;
