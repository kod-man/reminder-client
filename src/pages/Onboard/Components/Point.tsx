import { Icon } from "@chakra-ui/react";

const ACTIVE_COLOR = "red.500";
const INACTIVE_COLOR = "red.100";

function Point({ color }: { color: string }) {
  return (
    <Icon viewBox="0 0 200 200" color={color} mr="4">
      <path
        fill="currentColor"
        d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
      />
    </Icon>
  );
}

export default Point;
