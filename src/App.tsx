import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Onboard from "./pages/Onboard";
import Onboard2 from "./pages/Onboard-2";
import RegisterAndLogin from "./pages/RegisterAndLogin";
import { PATHS } from "./utils/paths";
import Onboard3 from "./pages/Onboard-3";

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
    <Route path={PATHS.ONBOARD2} element={<Onboard2 />} />
    <Route path={PATHS.ONBOARD3} element={<Onboard3 />} />
  </Routes>
);
