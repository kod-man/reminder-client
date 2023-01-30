import {
  Flex,
  HStack,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Tab,
  TabList,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";
import BellIcon from "../../../icons/BellIcon";
import MarkIcon from "../../../icons/MarkIcon";
import QuestionMarkIcon from "../../../icons/QuestionMarkIcon";

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
          style={{
            marginTop: "44px",
            height: "500px",
            width: "440px",
            color: "white",
          }}
        >
          <MenuItem>
            <Flex flexDirection="column">
              <Flex
                h="40px"
                w="200px"
                bg="#f5f5f5"
                borderTopLeftRadius="20"
                borderBottomLeftRadius="20"
                borderBottomRightRadius="20"
                borderTopRightRadius="20"
              >
                <Flex>
                {/* colorScheme='white'  didint worked  */}
                  <Tabs variant="soft-rounded"  color="white" textColor="black"> 
                    <TabList>
                      <Tab
                        style={{
                          fontSize: "0.85em",
                          padding: "5px",
                          margin: "5px",
                        }}
                      >
                        Notifications
                      </Tab>
                      <Tab
                        style={{
                          fontSize: "0.85em",
                          padding: "5px",
                          margin: "5px",
                        }}
                      >
                        Unread
                      </Tab>
                    </TabList>
                  </Tabs>
                </Flex>

                <Flex ml="230px">
                  <MarkIcon color="gray" />
                </Flex>
              </Flex>
            </Flex>
          </MenuItem>
          <MenuItem
            _hover={{ color: "white" }}
            alignItems="center"
            justifyContent="center"
          >
            <Flex box-sizing="border-box" justifyContent="center" margin="auto">
              <Flex mt="10px" justifyContent="center">
                <Image
                  src="https://d3ptyyxy2at9ui.cloudfront.net/assets/images/14ddf84cccca3f09cad7245007a41e09.jpg"
                  srcSet="https://d3ptyyxy2at9ui.cloudfront.net/assets/images/dfd21d376f6b295a42b0e57c810fba7f.jpg 2x, https://d3ptyyxy2at9ui.cloudfront.net/assets/images/f553f26a1275e2d1ea579ab575e7d5ab.jpg 3x"
                />
              </Flex>
            </Flex>
          </MenuItem>
          <MenuItem alignItems="center" justifyContent="center" mb="5px">
            <Stack spacing={1} textAlign="center">
              <Text color="black" fontWeight="medium">
                Stay in the loop
              </Text>
              <Text color="#202020" fontSize="sm">
                Here, you’ll find notifications for any
                <br />
                changes that happen in your shared
                <br />
                projects.
              </Text>
              <HStack
                alignItems="center"
                justifyContent="center"
                marginTop="10px"
              >
                <Flex mt="15px" alignItems="center" justifyContent="center">
                <QuestionMarkIcon color="#d1453b" />
                <Link color="#d1453b" fontSize="sm" ml="5px" textDecoration="underline" >How to share projects</Link>
                </Flex>
               
              </HStack>
            </Stack>
          </MenuItem>
        </MenuList>
      )}
    </Menu>
  );
};

export default Notification;
