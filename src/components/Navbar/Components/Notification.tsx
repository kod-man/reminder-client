import { Box, Button, Flex, Image, Menu, MenuButton } from "@chakra-ui/react";
import { MenuList } from "@material-ui/core";
import BellIcon from "../../../icons/BellIcon";

const Notification = () => {
    return (
      <Menu>
        <MenuButton as={BellIcon} color="white" h="7" w="7" />
        <MenuList>
          <Flex>
            <Box boxSize="300px 275px">
              <Image
                src="https://d3ptyyxy2at9ui.cloudfront.net/assets/images/14ddf84cccca3f09cad7245007a41e09.jpg"
                srcSet="https://d3ptyyxy2at9ui.cloudfront.net/assets/images/dfd21d376f6b295a42b0e57c810fba7f.jpg 2x, https://d3ptyyxy2at9ui.cloudfront.net/assets/images/f553f26a1275e2d1ea579ab575e7d5ab.jpg 3x"
              />
            </Box>
          </Flex>
        </MenuList>
      </Menu>
    );
  };
  

export default Notification;
