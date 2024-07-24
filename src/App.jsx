import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/homePage/HomePage";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}
