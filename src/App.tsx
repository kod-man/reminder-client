import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import RegisterPage from "./pages/Register";

export const App = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/register" element={<RegisterPage />} />
  </Routes>
);
