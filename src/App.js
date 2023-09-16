import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/home/index";
import Detail from "../src/pages/detail/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
