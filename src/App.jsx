import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Players from "./pages/players";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/players" element={<Players />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
