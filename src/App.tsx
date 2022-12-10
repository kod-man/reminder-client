import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import RegisterPage from "./pages/RegisterAndLogin";

export const App = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/register" element={<RegisterPage page="register" />} />
    <Route path="/login" element={<RegisterPage page="login" />} />
  </Routes>
);
