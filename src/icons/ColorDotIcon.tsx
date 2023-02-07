import { Box } from "@chakra-ui/react";

const ColorDotIcon = ({ color }: { color: string }) => {
  console.log(color)
  return (
    <Box
      backgroundColor={color}
      width="10px"
      height="10px"
      borderRadius="50%"
    />
  );
};

export default ColorDotIcon;


