import {
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import BellIcon from "../../../icons/BellIcon";

const Notification = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Menu placement="right">
      <Flex
        bg="#db4c3f"
        as={MenuButton}
        _hover={{ bg: "#e27065" }}
        cursor="pointer"
        borderRadius="20%"
        padding={1}
        onClick={() => setIsOpen(!isOpen)}
      >
        <BellIcon color="white" />
      </Flex>
      {isOpen && (
        <MenuList
          onClick={() => setIsOpen(false)}
          style={{ marginTop: "44px", height: "500px", width: "440px" }}
        >
          Working on ... Coming soon..:)
          <MenuItem>
            <Flex>
              <Flex justifyContent="center" alignItems="center">
                <Image
                  src="https://d3ptyyxy2at9ui.cloudfront.net/assets/images/14ddf84cccca3f09cad7245007a41e09.jpg"
                  srcSet="https://d3ptyyxy2at9ui.cloudfront.net/assets/images/dfd21d376f6b295a42b0e57c810fba7f.jpg 2x, https://d3ptyyxy2at9ui.cloudfront.net/assets/images/f553f26a1275e2d1ea579ab575e7d5ab.jpg 3x"
                />
              </Flex>
            </Flex>
          </MenuItem>
        </MenuList>
      )}
    </Menu>
  );
};

export default Notification;
