import { Box, Divider, Flex, Menu, MenuButton, MenuList, Text, VStack } from '@chakra-ui/react';
import { AiOutlinePrinter, AiOutlineStar } from 'react-icons/ai';
import { BiGitCompare } from 'react-icons/bi';
import { BsDownload, BsPeople } from 'react-icons/bs';
import { FiActivity, FiSettings } from 'react-icons/fi';
import { IoIosLogOut } from 'react-icons/io';
import { VscSymbolColor } from 'react-icons/vsc';
import ProfileCards from './ProfileCards';

const dataProfileMenu = [
  { Icon: VscSymbolColor, text: 'Theme' },
  { Icon: FiActivity, text: 'Activity Log' },
  { Icon: AiOutlinePrinter, text: 'Print' },
  { Icon: BiGitCompare, text: 'Integrations' },
  { Icon: AiOutlineStar, text: 'Upgrade to Pro' },
  { Icon: BsPeople, text: 'Upgarde to Business' },
  { Icon: BsDownload, text: 'Download apps' },
];

const ProfileMenu = () => {
  return (
    <Menu>
      <Flex
        as={MenuButton}
        _hover={{ bg: 'gray.200' }}
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
      >
        MC
      </Flex>
      <MenuList>
        <Flex
          cursor="pointer"
          _hover={{ backgroundColor: '#f3f3f3' }}
          mx="1"
          mb="2"
          borderRadius="5"
        >
          <Box>
            <Flex>
              <Flex
                m={1}
                w={12}
                h={12}
                border="3px solid #db4c3f"
                fontSize="xl"
                color="#db4c3f"
                alignItems="center"
                justifyContent="center"
                backgroundColor="white"
                borderRadius="50%"
              >
                MC
              </Flex>
              <VStack>
                <Flex flexDir="column" m={2}>
                  <Text as="b" fontSize="sm">
                    Murat Can
                  </Text>
                  <Text fontSize="xs" color="gray">
                    muratal0606@gmail.com
                  </Text>
                </Flex>
              </VStack>
            </Flex>
            <Flex alignItems="center" ml={2} mb="1">
              <Box h={4} w={4} mr="1" justifyContent="flex-start">
                <FiSettings color="gray" />
              </Box>
              <Text fontSize="small" ml="2">
                Settings
              </Text>
            </Flex>
          </Box>
        </Flex>
        <Divider />

        {dataProfileMenu.map((item) => (
          <ProfileCards key={item.text} text={item.text} Icon={item.Icon} />
        ))}

        <Divider />
        <ProfileCards text="Logout" Icon={IoIosLogOut} />
      </MenuList>
    </Menu>
  );
};

export default ProfileMenu;
