import {
  Flex,
  HStack,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuList,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import BellIcon from "../../../icons/BellIcon";
import MarkIcon from "../../../icons/MarkIcon";
import QuestionMarkIcon from "../../../icons/QuestionMarkIcon";

const Notification = () => {
  return (
    <Menu>
      <Flex
        bg="#db4c3f"
        as={MenuButton}
        _hover={{ bg: "#e27065" }}
        cursor="pointer"
        borderRadius="7px"
        padding={1}
      >
        <BellIcon color="white" />
      </Flex>
      <MenuList>
        <Tabs variant="soft-rounded" colorScheme="whiteAlpha">
          <Flex justifyContent="space-between" alignItems="center" p={2}>
            <TabList backgroundColor="gray.400" borderRadius={20}>
              <Tab
                style={{
                  fontSize: "14px",
                  padding: "5px",
                  margin: "5px",
                }}
              >
                Notifications
              </Tab>
              <Tab
                style={{
                  fontSize: "14px",
                  padding: "5px",
                  margin: "5px",
                }}
              >
                Unread
              </Tab>
            </TabList>
            <Tooltip
              hasArrow
              label="Mark all as Read"
              bg="black"
              placement="top"
            >
              <Flex
                cursor="pointer"
                _hover={{ bg: "gray.100" }}
                borderRadius="3px"
              >
                <MarkIcon color="gray" />
              </Flex>
            </Tooltip>
          </Flex>
          <TabPanels>
            <TabPanel w="440px">
              <Flex
                boxSizing="border-box"
                justifyContent="center"
                margin="auto"
              >
                <Flex mt="10px" justifyContent="center">
                  <Image
                    src="https://d3ptyyxy2at9ui.cloudfront.net/assets/images/14ddf84cccca3f09cad7245007a41e09.jpg"
                    srcSet="https://d3ptyyxy2at9ui.cloudfront.net/assets/images/dfd21d376f6b295a42b0e57c810fba7f.jpg 2x, https://d3ptyyxy2at9ui.cloudfront.net/assets/images/f553f26a1275e2d1ea579ab575e7d5ab.jpg 3x"
                  />
                </Flex>
              </Flex>

              <Stack spacing={1} textAlign="center">
                <Text color="black" fontWeight="medium">
                  Stay in the loop
                </Text>
                <Text color="gray" fontSize="sm">
                  Here, you’ll find notifications for any changes that happen in
                  your shared projects.
                </Text>
                <HStack
                  alignItems="center"
                  justifyContent="center"
                  marginTop="10px"
                >
                  <Flex mt="15px" alignItems="center" justifyContent="center">
                    <QuestionMarkIcon color="#d1453b" />
                    <Link
                      color="#d1453b"
                      fontSize="sm"
                      ml="5px"
                      textDecoration="underline"
                    >
                      How to share projects
                    </Link>
                  </Flex>
                </HStack>
              </Stack>
            </TabPanel>
            <TabPanel w="440px">
              <Flex
                boxSizing="border-box"
                justifyContent="center"
                margin="auto"
              >
                <Flex mt="10px" justifyContent="center">
                  <Image
                    src="https://d3ptyyxy2at9ui.cloudfront.net/assets/images/14ddf84cccca3f09cad7245007a41e09.jpg"
                    srcSet="https://d3ptyyxy2at9ui.cloudfront.net/assets/images/dfd21d376f6b295a42b0e57c810fba7f.jpg 2x, https://d3ptyyxy2at9ui.cloudfront.net/assets/images/f553f26a1275e2d1ea579ab575e7d5ab.jpg 3x"
                  />
                </Flex>
              </Flex>
              <Flex alignItems="center" justifyContent="center">
                <Text color="gray" fontSize="sm">
                  Nice work! You’re all caught up.
                </Text>
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </MenuList>
    </Menu>
  );
};

export default Notification;
