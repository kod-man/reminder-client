import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import RegisterAndLogin from "./pages/RegisterAndLogin";

export const App = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/register" element={<RegisterAndLogin page="register" />} />
    <Route path="/login" element={<RegisterAndLogin page="login" />} />
  </Routes>
);
