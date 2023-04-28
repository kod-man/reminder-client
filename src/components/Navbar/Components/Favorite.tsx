import { Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import React from "react";
import ToggleIcon from "../../../icons/ToggleIcon";
import MyTooltip from "./MyTooltip";
import FavoriteCard from "./FavoriteCard";

function Favorite() {
  const [isFavoriteListOpen, setIsFavoriteListOpen] = useState(true);
  return (
    <div>
      <Flex
        w="90%"
        justifyContent="space-between"
        alignItems="center"
        m={5}
        paddingY={2}
        borderRadius={5}
        _hover={{ backgroundColor: "#eeeeee", cursor: "pointer" }}
      >
        <Text w="100%" color="gray">
          Favorite
        </Text>
        <Flex>
          <MyTooltip label="Toggle list of Favorite">
            <Flex
              transform={!isFavoriteListOpen ? "rotate(90deg)" : "rotate(0deg)"}
              onClick={() => setIsFavoriteListOpen(!isFavoriteListOpen)}
              ml={3}
            >
              <ToggleIcon />
            </Flex>
          </MyTooltip>
        </Flex>
      </Flex>
      {isFavoriteListOpen && <FavoriteCard />}
    </div>
  );
}

export default Favorite;
