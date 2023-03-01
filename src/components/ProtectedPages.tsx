import RegisterAndLogin from "../pages/RegisterAndLogin";
import Navbar from "./Navbar";

type Props = {
  hasNavbar: boolean;
  page: React.ReactNode;
  token: string | null;
};

function ProtectedPages({ hasNavbar, page, token }: Props) {
  return (
    <>
      {hasNavbar ? <Navbar /> : null}
      {token ? page : <RegisterAndLogin page="login" />}
    </>
  );
}

export default ProtectedPages;
