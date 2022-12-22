import {
  Box,
  Button,
  Flex,
  Spacer,
  Link,
  Text,
  ButtonGroup,
} from "@chakra-ui/react";
import { AiFillFolderOpen } from "react-icons/ai";
import { BsAlarm, BsFlag, BsPuzzle } from "react-icons/bs";
import { FaTicketAlt } from "react-icons/fa";
import { IoIosToday } from "react-icons/io";

function Menu() {
  return (
    <Flex
      direction="column"
      border="1px"
      borderColor="gray.300"
      h="124px"
      w="75%"
      borderRadius="12"
    >
      <Flex ml="3" mt="3" color="gray">
        Görev ismi
      </Flex>
      <Flex ml="3" mt="2" color="gray">
        Açıklama
      </Flex>
      <Flex ml="3" mt="2">
        <Box>
          <Button
            size="sm"
            mr="3"
            color="green"
            bg="white"
            border="1px"
            borderColor="gray.300"
          >
            <IoIosToday /> <Text ml="2">Bugün</Text>
          </Button>
          <Button size="sm" bg="white" border="1px" borderColor="gray.300">
            <AiFillFolderOpen color="#63B3ED" /> <Text ml="2">Klasör</Text>
          </Button>
        </Box>
        <Spacer />
        <Flex>
          <Link mr="3">
            <FaTicketAlt size="24" />
          </Link>
          <Link mr="3">
            <BsFlag size="24" />
          </Link>
          <Link mr="3">
            <BsAlarm size="24" />
          </Link>
          <Link mr="3">
            <BsPuzzle size="24" />
          </Link>
        </Flex>
      </Flex>
      <Flex justifyContent="flex-end" mt="10">
        <ButtonGroup variant="outline" spacing="3">
          <Button backgroundColor="#F7FAFC">İptal</Button>
          <Button
            backgroundColor="red.200"
            color="white"
            _hover={{ cursor: "not-allowed" }}
          >
            Görev Ekle
          </Button>
        </ButtonGroup>
      </Flex>
    </Flex>
  );
}

export default Menu;
