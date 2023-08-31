import { BrowserRouter, Route, Routes } from "react-router-dom";
import ZlinOne from "./ZlinOne";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/projector-one"} element={<ZlinOne />} />
        <Route path="/" element={<h1>MKOA</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
