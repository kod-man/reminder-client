import { Route, Routes } from "react-router-dom";
import ProtectedPages from "./components/ProtectedPages";
import ProtectedRoutes from "./components/ProtectedRoutes";
import FiltersAndLabels from "./pages/FiltersAndLabels";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Onboard from "./pages/Onboard";
import RegisterAndLogin from "./pages/RegisterAndLogin";
import TodayPage from "./pages/TodayPage";
import { PATHS } from "./utils/paths";

const PROTECTED_ROUTES = [
  { path: PATHS.NOT_FOUND, page: <NotFoundPage />, hasNavbar: false },
  { path: PATHS.ONBOARD, page: <Onboard />, hasNavbar: false },
  { path: PATHS.TODAY, page: <TodayPage />, hasNavbar: true },
  { path: PATHS.FILTERSANDLABELS, page: <FiltersAndLabels />, hasNavbar: true },
];

export const App = () => {
  const token = sessionStorage.getItem("token");

  return (
    <Routes>
      <Route path={PATHS.REGISTER} element={<RegisterAndLogin page="register" />} />
      <Route path={PATHS.LOGIN} element={<RegisterAndLogin page="login" />} />
      {PROTECTED_ROUTES.map(({ path, page, hasNavbar }) => (
        <Route
          key={path}
          path={path}
          element={
            <ProtectedRoutes token={token}>
              <ProtectedPages hasNavbar={hasNavbar} token={token} page={page} />
            </ProtectedRoutes>
          }
        />
      ))}
    </Routes>
  );
};
