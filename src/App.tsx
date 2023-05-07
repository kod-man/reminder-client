import { Route, Routes } from "react-router-dom";
import ProtectedPages from "./components/ProtectedPages";
import ProtectedRoutes from "./components/ProtectedRoutes";
import FiltersAndLabels from "./pages/FiltersAndLabels";
import LabelFavorite from "./pages/LabelFavorites";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Onboard from "./pages/Onboard";
import ProjectsPage from "./pages/Projects";
import ProjectsDetail from "./pages/ProjectsDetail/ProjectsDetail";
import RegisterAndLogin from "./pages/RegisterAndLogin";
import TodayPage from "./pages/TodayPage";
import { PATHS } from "./utils/paths";
const PROTECTED_ROUTES = [
  { path: PATHS.NOT_FOUND, page: <NotFoundPage />, hasNavbarAndDrawer: false },
  { path: PATHS.ONBOARD, page: <Onboard />, hasNavbarAndDrawer: false },
  { path: PATHS.TODAY, page: <TodayPage />, hasNavbarAndDrawer: true },
  {
    path: PATHS.FILTERS_AND_LABELS,
    page: <FiltersAndLabels />,
    hasNavbarAndDrawer: true
  },
  { path: PATHS.PROJECTS, page: <ProjectsPage />, hasNavbarAndDrawer: true },
  {
    path: PATHS.ITEM_DETAIL,
    page: <LabelFavorite />,
    hasNavbarAndDrawer: true
  },
  {
    path: PATHS.PROJECTS_DETAIL,
    page: <ProjectsDetail />,
    hasNavbarAndDrawer: true
  }
];

export const App = () => {
  const token = sessionStorage.getItem("token");
  return (
    <Routes>
      <Route
        path={PATHS.REGISTER}
        element={<RegisterAndLogin page="register" />}
      />
      <Route path={PATHS.LOGIN} element={<RegisterAndLogin page="login" />} />
      {PROTECTED_ROUTES.map(({ path, page, hasNavbarAndDrawer }) => (
        <Route
          key={path}
          path={path}
          element={
            <ProtectedRoutes token={token}>
              <ProtectedPages
                hasNavbarAndDrawer={hasNavbarAndDrawer}
                page={page}
              />
            </ProtectedRoutes>
          }
        />
      ))}
    </Routes>
  );
};
