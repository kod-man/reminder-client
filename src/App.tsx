import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Onboard from "./pages/Onboard";
import RegisterAndLogin from "./pages/RegisterAndLogin";
import { PATHS } from "./utils/paths";

export const App = () => (
  <Routes>
    <Route path={PATHS.HOME} element={<HomePage />} />
    <Route
      path={PATHS.REGISTER}
      element={<RegisterAndLogin page="register" />}
    />
    <Route path={PATHS.LOGIN} element={<RegisterAndLogin page="login" />} />
    <Route path={PATHS.NOT_FOUND} element={<NotFoundPage />} />
    <Route path={PATHS.ONBOARD} element={<Onboard />} />
  </Routes>
);
