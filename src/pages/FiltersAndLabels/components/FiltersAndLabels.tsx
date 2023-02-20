import { Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { useState } from "react";
import { IconType } from "react-icons";
import PlusIcon from "../../../icons/PlusIcon";
import ToggleIcon from "../../../icons/ToggleIcon";
import ItemCard from "./ItemCard";

type FiltersAndLabelsProps = {
  data: string[];
  cardTitle: string;
  Icon: IconType;
};

function FiltersAndLabels({ data, cardTitle, Icon }: FiltersAndLabelsProps) {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  const [isToggleOn, setIsToggleOn] = useState(true);

  const onClickHandler = () => {
    setIsToggleOn(!isToggleOn);
  };

  const renderedItemList = data.map((item) => (
    <ItemCard key={item} text={item} Icon={Icon} />
  ));

  return (
    <Flex w={isLargerThan800 ? "55%" : "80%"} flexDirection="column" mb={12}>
      <Flex
        w="100%"
        justifyContent="space-between"
        borderBottom="1px solid"
        borderColor="gray.200"
      >
        <Flex>
          <Flex
            ml="-25px"
            mr="3px"
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
            <ToggleIcon onClick={onClickHandler} color="gray" />
          </Flex>
          <Text as="b" fontSize="14px" mr="2">
            {cardTitle}
          </Text>
        </Flex>
        <PlusIcon color="gray" />
      </Flex>
      {isToggleOn && (
        <Flex flexDirection="column" w="100%">
          {renderedItemList.length > 0
            ? renderedItemList
            : `Your list of ${cardTitle.toLowerCase()} will show up here.`}
        </Flex>
      )}
    </Flex>
  );
}

export default FiltersAndLabels;
