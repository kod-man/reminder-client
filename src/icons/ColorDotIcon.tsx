import { Box } from "@chakra-ui/react";

const ColorDotIcon = ({ color }: { color: string }) => {
  return (
    <Box
      backgroundColor={color}
      width="10px"
      height="10px"
      borderRadius="50%"
      display="block"
      opacity="0.7"
    />
  );
};
export default ColorDotIcon;
