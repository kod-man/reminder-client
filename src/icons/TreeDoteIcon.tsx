import { Flex } from "@chakra-ui/react";

function TreeDoteIcon(props: any) {
  return (
    <Flex {...props}>
      <svg width="15" height="3">
        <path
          d="M1.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
          fill="currentColor"
          fillRule="evenodd"
        ></path>
      </svg>
    </Flex>
  );
}

export default TreeDoteIcon;
