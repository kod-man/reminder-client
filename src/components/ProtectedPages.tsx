import Navbar from "./Navbar";

type Props = {
  hasNavbar: boolean;
  page: React.ReactNode;
};

function ProtectedPages({ hasNavbar, page }: Props) {
  return (
    <>
      {hasNavbar ? <Navbar /> : null}
      {page}
    </>
  );
}

export default ProtectedPages;
