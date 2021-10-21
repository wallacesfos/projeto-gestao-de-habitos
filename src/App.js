import Register from "./Components/Register";
import Routes from "./Routes/";

import { GlobalStyle } from "./Utils/globalStyle.js";
import { GroupsDashboard } from "./Pages/GroupsDashboard/index.js";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes />
      {/* <Register /> */}
      {/* <GroupsDashboard /> */}
    </div>
  );
}

export default App;
