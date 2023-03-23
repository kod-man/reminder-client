import RegisterAndLogin from "../pages/RegisterAndLogin";

type Props = {
  page: React.ReactNode;
  token: string | null;
};

function ProtectedPages({ page, token }: Props) {
  return <>{token ? page : <RegisterAndLogin page="login" />}</>;
}

export default ProtectedPages;
