import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes";
import HomePage from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Onboard from "./pages/Onboard";
import RegisterAndLogin from "./pages/RegisterAndLogin";
import TodayPage from "./pages/TodayPage";
import { PATHS } from "./utils/paths";

export const App = () => {
  const token = sessionStorage.getItem("token");
  const protectedRoutes = [
    { path: PATHS.HOME, component: <HomePage /> },
    { path: PATHS.NOT_FOUND, component: <NotFoundPage /> },
    { path: PATHS.ONBOARD, component: <Onboard /> },
    { path: PATHS.TODAY, component: <TodayPage /> },
  ];

  const Pages = protectedRoutes.map((item) => (
    <Route
      key={item.path}
      path={item.path}
      element={
        <ProtectedRoutes token={token}>{item.component}</ProtectedRoutes>
      }
    />
  ));
  return (
    <Routes>
      <Route
        path={PATHS.REGISTER}
        element={<RegisterAndLogin page="register" />}
      />
      <Route path={PATHS.LOGIN} element={<RegisterAndLogin page="login" />} />
      {Pages}
    </Routes>
  );
};
