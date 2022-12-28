import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../utils/paths';

type ProtectedRoutesProps = {
  token: string | null;
  children: JSX.Element;
};

function ProtectedRoutes({ children, token }: ProtectedRoutesProps) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate(PATHS.LOGIN);
    }
  }, [token, navigate]);
  return children;
}

export default ProtectedRoutes;
