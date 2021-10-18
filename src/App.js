import { GlobalStyle } from "./Utils/globalStyle.js";
import { GroupsDashboard } from "./Pages/GroupsDashboard/index.js";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <GroupsDashboard />
    </div>
  );
}

export default App;
