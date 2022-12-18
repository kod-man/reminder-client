import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes";
import HomePage from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import RegisterAndLogin from "./pages/RegisterAndLogin";
import { PATHS } from "./utils/paths";

export const App = () => {
  const token = localStorage.getItem("token");

  return (
    <Routes>
      <Route
        path={PATHS.REGISTER}
        element={<RegisterAndLogin page="register" />}
      />
      <Route path={PATHS.LOGIN} element={<RegisterAndLogin page="login" />} />
      <Route
        path={PATHS.HOME}
        element={
          <ProtectedRoutes token={token}>
            <HomePage />
          </ProtectedRoutes>
        }
      />
      <Route path={PATHS.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
};
