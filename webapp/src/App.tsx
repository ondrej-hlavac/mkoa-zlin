import { BrowserRouter, Route, Routes } from "react-router-dom";
import ZlinOne from "./ZlinOne";
import { projectorOne } from "./data/projectorOne";
import { projectorTwo } from "./data/projectorTwo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={"/projector-one"}
          element={<ZlinOne projectorData={projectorOne} />}
        />
        <Route
          path={"/projector-two"}
          element={<ZlinOne projectorData={projectorTwo} />}
        />
        <Route path="/" element={<h1>MKOA</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
