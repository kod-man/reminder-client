import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import RegisterAndLogin from "./pages/RegisterAndLogin";

export const App = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/register" element={<RegisterAndLogin page="register" />} />
    <Route path="/login" element={<RegisterAndLogin page="login" />} />
    <Route path="/404" element={<NotFoundPage />} />
  </Routes>
);
