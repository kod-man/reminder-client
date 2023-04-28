import { Button, Flex, Text } from "@chakra-ui/react";
import { IconProps } from "./types";

const RisingArrowIcon = (props: IconProps) => {
  return (
    <Flex
      as={Button}
      p="1"
      h={8}
      background="#db4c3f"
      _hover={{ bg: "#e27065" }}
      fontWeight="light"
      textColor="white"
      fontSize="sm"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        {...props}
      >
        <g fill="none" fillRule="evenodd">
          <g fill="currentColor" fillRule="nonzero">
            <g>
              <g>
                <path
                  d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9zm0 1c-4.418 0-8 3.582-8 8 0 .702.09 1.383.26 2.031l2.886-2.885c.196-.195.512-.195.708 0l2.646 2.647 4.793-4.794L13 9c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h3.52l.052.005L16.5 8c.036 0 .071.004.105.011l.046.012.04.015c.014.005.027.012.04.019.013.006.025.013.036.02l.035.025c.014.01.027.02.04.033l.012.011.011.013c.012.012.023.025.033.039l-.044-.052c.026.027.05.056.069.087l.02.034.02.042.014.04c.005.015.009.03.012.046l.006.033.005.051V12c0 .276-.224.5-.5.5s-.5-.224-.5-.5V9.706l-5.146 5.148c-.196.195-.512.195-.708 0L7.5 12.207 4.618 15.09C5.827 17.974 8.677 20 12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8z"
                  transform="translate(-564 -480) translate(528 444) translate(36 36)"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </svg>
      <Text ml={1} fontWeight="light" fontSize="xs">
        0/5
      </Text>
    </Flex>
  );
};

export default RisingArrowIcon;
