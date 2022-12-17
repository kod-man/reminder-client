import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import NoMatchPage from "./pages/NoMatchPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import RegisterAndLogin from "./pages/RegisterAndLogin";
import { PATHS } from "./utils/paths";

export const App = () => {
  const isLoggedIn = localStorage.getItem("token");

  if (!isLoggedIn)
    return (
      <Routes>
        <Route
          path={PATHS.REGISTER}
          element={<RegisterAndLogin page="register" />}
        />
        <Route path={PATHS.LOGIN} element={<RegisterAndLogin page="login" />} />
        <Route path={PATHS.NO_MATCH_FOR_ALL} element={<NoMatchPage />} />
      </Routes>
    );

  return (
    <Routes>
      <Route path={PATHS.HOME} element={<HomePage />} />
      <Route path={PATHS.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
};
