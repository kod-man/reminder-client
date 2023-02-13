import { Box } from "@chakra-ui/react";

const ColorDotIcon = ({ color }: { color: string }) => {
  console.log(color);
  return (
    <Box
      backgroundColor={color}
      width="10px"
      height="10px"
      borderRadius="50%"
      display="block"
      marginRight="8px"
      opacity="0.7"
    />
  );
};

export default ColorDotIcon;
