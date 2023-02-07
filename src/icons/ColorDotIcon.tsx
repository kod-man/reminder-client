import { Box } from "@chakra-ui/react";

const ColorDotIcon = (props: any) => {
    const color = props.color;
  
    return (
      <Box
        backgroundColor={color}
        width="10px"
        height="10px"
        borderRadius="50%"
        {...props}
      />
    );
  };
  
  export default ColorDotIcon;
  
  