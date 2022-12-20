import { Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../../utils/paths";

function Footer2() {
  const navigate = useNavigate();
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      mt="10"
    >
      <Button
        size="inherit"
        height="36px"
        width="90px"
        border="2px"
        color="white"
        backgroundColor="red.500"
        mb="4"
        onClick={() => navigate(PATHS.ONBOARD3)}
      >
        Devam Et
      </Button>
    </Flex>
  );
}

export default Footer2;
