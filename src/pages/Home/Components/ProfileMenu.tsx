import { Flex, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

const ProfileMenu = () => {
  return (
    <Menu>
      <Flex
        as={MenuButton}
        _hover={{ bg: "gray.200" }}
        cursor="pointer"
        padding={1}
        w={8}
        h={8}
        border="1px solid white"
        fontSize="xs"
        color="green"
        alignItems="center"
        justifyContent="center"
        backgroundColor="white"
        borderRadius="50%"
      > MC
      </Flex>

      <MenuList>
        <MenuItem>1</MenuItem>
        <MenuItem>2</MenuItem>
        <MenuItem>3</MenuItem>
        <MenuItem>4</MenuItem>
        <MenuItem>5</MenuItem>
        <MenuItem>6</MenuItem>
        <MenuItem>7</MenuItem>
        <MenuItem>8</MenuItem>
        <MenuItem>9</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ProfileMenu;
