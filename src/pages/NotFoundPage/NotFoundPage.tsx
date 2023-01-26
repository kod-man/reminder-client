import { Button, Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../utils/paths";

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center" h="100vh">
      <Text fontSize="2xl" color="teal.400">
        404
      </Text>
      <Text fontSize="1.5xl" mt="4">
        Page Not Found
      </Text>
      <Text fontSize="1xl" color="gray.400" mt="4">
        The page you're looking for does not seem to exist
      </Text>
      <Button
        onClick={() => navigate(PATHS.TODAY)}
        colorScheme="teal"
        variant="solid"
        width="250px"
        size="lg"
        mt="8"
        height="72px"
        border="2px"
        color="white"
        borderRadius="9"
      >
        Go To Today Page
      </Button>
    </Flex>
  );
}

export default NotFoundPage;
