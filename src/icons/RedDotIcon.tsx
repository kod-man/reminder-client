import { Flex } from "@chakra-ui/react";
import { IconProps } from "./types";

const RedDotIcon = (props: IconProps) => {
  return (
    <Flex w="20px" h="20px">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 20 20"
        className="project_icon"
        {...props}
      >
        <path d="M12 7a5 5 0 110 10 5 5 0 010-10z" fill="currentColor" />
      </svg>
    </Flex>
  );
};

export default RedDotIcon;
