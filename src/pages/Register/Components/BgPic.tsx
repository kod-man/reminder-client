import { Box, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";

const BgPics = () => {
  return (
    <Grid
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(2, 1fr)"
      maxWidth="400"
      maxH="700"
    >
      <Box padding="1">
        <Image src="https://d3ptyyxy2at9ui.cloudfront.net/assets/images/ae01c415678c90d0c606bc6917758502.jpg" />
        <Box mt="5" ml="10">
          <Text as="b" fontSize="sm">
            30 million+{" "}
          </Text>
          <Text fontSize="sm">app dowloads </Text>
        </Box>
      </Box>

      <Box padding="1">
        <Image src="https://d3ptyyxy2at9ui.cloudfront.net/assets/images/573fa908fbccdf1600f90f16a0c2e311.jpg" />
        <Box margin="5" ml="10">
          <Text as="b" fontSize="sm">
            {" "}
            15 years+{" "}
          </Text>
          <Text fontSize="sm"> in business </Text>
        </Box>
      </Box>

      <Box padding="1">
        <Image src="https://d3ptyyxy2at9ui.cloudfront.net/assets/images/87ded242639ba32ef4d0e6c21c9f30aa.jpg" />
        <Box margin="5" ml="10">
          <Text as="b" fontSize="sm">
            2 billion+
          </Text>
          <Text fontSize="sm">tasks completed</Text>
        </Box>
      </Box>

      <Box padding="1">
        <Image src="https://d3ptyyxy2at9ui.cloudfront.net/assets/images/ba90575091d9eafd60f851f7297cb202.jpg" />
        <Box margin="5" ml="10">
          <Text as="b" fontSize="sm">
            1 million+{" "}
          </Text>
          <Text fontSize="sm">pro users </Text>
        </Box>
      </Box>
    </Grid>
  );
};

export default BgPics;
