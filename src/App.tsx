import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes";
import HomePage from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Onboard from "./pages/Onboard";
import RegisterAndLogin from "./pages/RegisterAndLogin";
import TodayPage from "./pages/TodayPage";
import { PATHS } from "./utils/paths";

const PROTECTED_ROUTES = [
  { path: PATHS.HOME, page: <HomePage /> },
  { path: PATHS.NOT_FOUND, page: <NotFoundPage /> },
  { path: PATHS.ONBOARD, page: <Onboard /> },
  { path: PATHS.TODAY, page: <TodayPage /> },
];

export const App = () => {
  const token = sessionStorage.getItem("token");

  return (
    <Routes>
      <Route path={PATHS.REGISTER} element={<RegisterAndLogin page="register" />} />
      <Route path={PATHS.LOGIN} element={<RegisterAndLogin page="login" />} />
      {PROTECTED_ROUTES.map(({ path, page }) => (
        <Route
          key={path}
          path={path}
          element={<ProtectedRoutes token={token}>{page}</ProtectedRoutes>}
        />
      ))}
    </Routes>
  );
};
