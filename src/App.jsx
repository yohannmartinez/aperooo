import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Players from "./pages/players";
import  GamesSelect  from "./pages/gamesSelect/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/players" element={<Players />} />
        <Route index path="/games-selection" element={<GamesSelect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
