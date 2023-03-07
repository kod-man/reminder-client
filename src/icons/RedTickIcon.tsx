import { Flex } from "@chakra-ui/react";
import React from "react";

const RedTickIcon = (props: any) => {
  return (
    <Flex w="28px" h="28px">
      <svg width="28" height="28" {...props}>
        <path
          fill="currentColor"
          d="M11.23 13.7l-2.15-2a.55.55 0 0 0-.74-.01l.03-.03a.46.46 0 0 0 0 .68L11.24 15l5.4-5.01a.45.45 0 0 0 0-.68l.02.03a.55.55 0 0 0-.73 0l-4.7 4.35z"
        ></path>
      </svg>
    </Flex>
  );
};

export default RedTickIcon;
