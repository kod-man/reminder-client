import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Onboard from "./pages/Onboard";
import RegisterAndLogin from "./pages/RegisterAndLogin";

export const App = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/register" element={<RegisterAndLogin page="register" />} />
    <Route path="/login" element={<RegisterAndLogin page="login" />} />
    <Route path="/404" element={<NotFoundPage />} />
    <Route path="/onboard" element={<Onboard />} />
   
  </Routes>
);
