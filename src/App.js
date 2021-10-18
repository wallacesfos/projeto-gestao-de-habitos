import Search from "./Components/Search/index.jsx";
import Subscribe from "./Pages/Subscribe/index.jsx";
import "./Utils/globalStyle.js";
import { GlobalStyle } from "./Utils/globalStyle.js";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Search />
      <Subscribe />
    </div>
  );
}

export default App;
