import { Flex } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import ToggleCard from "./ToggleCard";

const PROJECTS_STATUS = ["Active", "Archived"];

function ProjectStatus() {
  const [order, setOrder] = useState(0);
  return (
    <>
      <Flex
        bgColor="#F5F5F5"
        borderLeftRadius="full"
        borderRightRadius="full"
        p="2px"
        alignItems="center"
      >
        {PROJECTS_STATUS.map((item, index) => (
          <ToggleCard
            text={item}
            order={order}
            index={index}
            setOrder={setOrder}
          />
        ))}
      </Flex>
    </>
  );
}

export default ProjectStatus;
