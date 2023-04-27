import { Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "..";
import Navbar from "./Navbar";
import DrawerComponent from "./Navbar/Components/DrawerComponent";

type Props = {
  hasNavbarAndDrawer: boolean;
  page: React.ReactNode;
};

function ProtectedPages({ hasNavbarAndDrawer, page }: Props) {
  const isDrawerOpen = useSelector((state: RootState) => state.drawer.value);
  return (
    <>
      {hasNavbarAndDrawer ? <Navbar /> : null}
      <Flex width="100%" height="90vh">
        {hasNavbarAndDrawer && isDrawerOpen ? <DrawerComponent /> : null}
        <Flex alignItems="center" width="100%" mx={isDrawerOpen ? "7%" : "15%"}>
          {page}
        </Flex>
      </Flex>
    </>
  );
}

export default ProtectedPages;
