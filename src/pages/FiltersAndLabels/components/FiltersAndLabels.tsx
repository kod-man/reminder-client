import { Flex, Text } from "@chakra-ui/react";
import { FC, useState } from "react";
import SmallPlusIcon from "../../../icons/SmallPlusIcon";
import ToggleIcon from "../../../icons/ToggleIcon";
import AddItemModal from "../../../modals/AddItemModal";
import ItemCard from "./ItemCard";

type ItemData = {
  _id: string;
  name: string;
  color: string;
  userId: string;
  isFavorite: boolean;
};

type FiltersAndLabelsProps = {
  data: ItemData[];
  cardTitle: string;
  Icon: FC<any>;
};

function FiltersAndLabels({ data, cardTitle, Icon }: FiltersAndLabelsProps) {
  const [isToggleOn, setIsToggleOn] = useState(true);

  const onToggleHandler = () => {
    setIsToggleOn(!isToggleOn);
  };

  const renderedItemList = data.map((item) => (
    <ItemCard
      key={item._id}
      id={item._id}
      text={item.name}
      Icon={Icon}
      tooltipLabel={cardTitle}
      color={item.color}
    />
  ));
  return (
    <Flex w="100%" flexDirection="column" mb={12}>
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
          <AddItemModal
            ModalOpenComponent={SmallPlusIcon}
            tooltipLabel={cardTitle}
          />
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
