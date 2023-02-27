import { Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { FC, useState } from "react";
import ToggleIcon from "../../../icons/ToggleIcon";
import AddItemModal from "../../../modals/AddItemModal";
import ItemCard from "./ItemCard";

type FiltersAndLabelsProps = {
  data: string[];
  cardTitle: string;
  Icon: FC<any>;
};

function FiltersAndLabels({ data, cardTitle, Icon }: FiltersAndLabelsProps) {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  const [isToggleOn, setIsToggleOn] = useState(true);

  const onToggleHandler = () => {
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
        paddingY="5px"
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
            <ToggleIcon onClick={onToggleHandler} color="gray" />
          </Flex>
          <Text as="b" fontSize="14px" mr="2">
            {cardTitle}
          </Text>
        </Flex>
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
          cursor="pointer"
        >
          <AddItemModal tooltipLabel={cardTitle} />
        </Flex>
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
