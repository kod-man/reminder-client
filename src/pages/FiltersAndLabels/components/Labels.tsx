import { Flex, useMediaQuery, VStack, Text } from "@chakra-ui/react";
import { useState } from "react";
import PlusIcon from "../../../icons/PlusIcon";
import ToggleIcon from "../../../icons/ToggleIcon";
import LabelItem from "./LabelItem";

const labelsList = ["Read", "İmportant", "Bussiness"];

function Labels() {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const [isToggleOn, setIsToggleOn] = useState(true);

  const onClickHandler = () => {
    setIsToggleOn(!isToggleOn);
  };

  const renderedLabelList = labelsList.map((label) => (
    <LabelItem key={label} label={label} />
  ));

  return (
    <>
      <VStack h="100%" w="100%">
        <Flex
          borderBottom="1px solid"
          borderColor="gray.200"
          w={isLargerThan800 ? "55%" : "80%"}
          justifyContent="space-between"
          mt="6"
          padding={1}
        >
          <Flex>
            <Flex
              ml="-30px"
              mr="3px"
              onClick={onClickHandler}
              w="24px"
              h="24px"
              alignItems="center"
              justifyContent="center"
              color="gray"
              _hover={{ color: "#202020", bg: "#eee" }}
              borderRadius="20%"
              fontSize="2xl"
              transform={isToggleOn ? "rotate(0deg)" : "rotate(270deg)"}
            >
              <ToggleIcon color="gray" />
            </Flex>

            <Text as="b" fontSize="14px" mr="2">
              Labels
            </Text>
          </Flex>
          <Flex
            bg="transparent"
            color="gray"
            _hover={{ color: "#202020", bg: "#eee" }}
            borderRadius="20%"
            fontSize="2xl"
          >
            <PlusIcon color="gray" />
          </Flex>
        </Flex>
        {isToggleOn && renderedLabelList}
      </VStack>
    </>
  );
}

export default Labels;
