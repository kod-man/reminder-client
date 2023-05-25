import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../..";
import { Flex, Text } from "@chakra-ui/react";
import MiniLabelIcon from "../../../icons/MiniLabelIcon";

type LABEL_PROPS = {
  setShowLabels: React.Dispatch<React.SetStateAction<boolean>>;
  label: {
    name: string;
    color: string;
  };
  setLabel: React.Dispatch<
    React.SetStateAction<{
      name: string;
      color: string;
    }>
  >;
};

function Labels({ setShowLabels, label, setLabel }: LABEL_PROPS) {
  const labelsData = useSelector((state: RootState) => state.labels.labels);
  useEffect(() => {
    if (label.name) {
      setShowLabels(false);
      label.name = "";
      label.color = "";
    }
  }, [label.name]);
  return (
    <Flex
      flexDirection="column"
      h="160px"
      border="1px solid #eee"
      borderRadius="5px"
      position="absolute"
      bgColor="white"
      zIndex="2"
      scrollBehavior="auto"
      w="40%"
      overflowY="scroll"
    >
      {labelsData.map((item) => (
        <Flex
          key={item._id}
          borderBottom="1px solid"
          borderColor="gray.200"
          _hover={{ bgColor: "gray.200" }}
          padding={1}
          cursor="pointer"
          paddingY="5px"
          onClick={() => setLabel({ name: item.name, color: item.color })}
        >
          <MiniLabelIcon color={item.color} />
          <Flex ml="2" color="#333" fontSize="14px">
            <Text>{item.name}</Text>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
}

export default Labels;
