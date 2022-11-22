import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { CakePage } from "./components/CakePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<HomePage />}></Route>
        <Route path={"/cakes/:id"} element={<CakePage />}></Route>
        <Route path={"*"} element={<h1>NOT FOUND</h1>} />
      </Routes>
    </div>
  );
}

export default App;
