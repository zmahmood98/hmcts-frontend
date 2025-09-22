import { BrowserRouter, Routes, Route} from "react-router-dom";
import Board from "./src/pages/Board";
import Toolbar from "./src/components/Toolbar";

function App() {

  return (
    <BrowserRouter>
      <Toolbar />
      <Routes>
        <Route
          path="/"
          element={<Board />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
