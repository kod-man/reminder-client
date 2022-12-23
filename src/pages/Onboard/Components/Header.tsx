import { Flex, Box, Spacer, Button } from "@chakra-ui/react";
import Todoist from "../../RegisterAndLogin/Components/Todoist";
import Point from "./Point";
function Header() {
  return (
    <Flex h={28}>
      <Box p="4" mt="13" ml="83">
        <Todoist />
      </Box>
      <Spacer />
      <Box p="2" mt="30" mr="83">
        {[1, 2, 3].map((item) => (
          <Point key={item} index={item} />
        ))}

        <Button ml="5" variant="ghost" color="red.300">
          Atla
        </Button>
      </Box>
    </Flex>
  );
}

export default Header;
