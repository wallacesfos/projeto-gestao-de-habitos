import Register from "./Components/Register";

import { GlobalStyle } from "./Utils/globalStyle.js";
import { GroupsDashboard } from "./Pages/GroupsDashboard/index.js";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <GroupsDashboard />
      {/* <Register /> */}
    </div>
  );
}

export default App;
