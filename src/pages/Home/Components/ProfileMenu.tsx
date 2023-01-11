import {
  Box,
  Divider,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ActivityIcon from "../../../icons/ActivityIcon";
import BusinessIcon from "../../../icons/BusinessIcon";
import DownloadIcon from "../../../icons/DownloadIcon";
import IntegrationIcon from "../../../icons/IntegrationIcon";
import LogoutIcon from "../../../icons/LogoutIcon";
import PrintIcon from "../../../icons/PrintIcon";
import SettingsIcon from "../../../icons/SettingsIcon";
import ThemeIcon from "../../../icons/ThemeIcon";
import UpgradeIcon from "../../../icons/UpgradeIcon";
import { PATHS } from "../../../utils/paths";
import ProfileCards from "./ProfileCards";

const ProfilMenuData = [
  { Icon: ThemeIcon, text: "Theme" },
  { Icon: ActivityIcon, text: "Activity Log" },
  { Icon: PrintIcon, text: "Print" },
  { Icon: IntegrationIcon, text: "Integrations" },
  { Icon: UpgradeIcon, text: "Upgrade to Pro" },
  { Icon: BusinessIcon, text: "Upgarde to Business" },
  { Icon: DownloadIcon, text: "Download apps" },
];
const ProfileMenu = () => {
  const navigate = useNavigate();
  const [render, setRender] = useState(false);

  useEffect(() => {
    if (render) {
      navigate(PATHS.LOGIN);
    }
  }, [render]);

  const onClickLogOut = () => {
    sessionStorage.removeItem("token");
    setRender(true);
    // window.location.reload(); // bad way
  };
  return (
    <Menu>
      <Flex
        as={MenuButton}
        cursor="pointer"
        h="7"
        w="7"
        border="1px solid white"
        fontSize="xs"
        color="#db4c3f"
        alignItems="center"
        justifyContent="center"
        backgroundColor="white"
        borderRadius="50%"
        fontWeight="bold"
      >
        <Text as="b" fontSize="xs">
          MC
        </Text>
      </Flex>
      <MenuList>
        <Flex
          cursor="pointer"
          _hover={{ backgroundColor: "#f3f3f3" }}
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
                p={1}
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
                <SettingsIcon color="#808080" />
              </Box>
              <Text fontSize="small" ml="2">
                Settings
              </Text>
            </Flex>
          </Box>
        </Flex>
        <Divider />

        {ProfilMenuData.map((item) => (
          <ProfileCards key={item.text} text={item.text} Icon={item.Icon} />
        ))}

        <Divider />
        <Box onClick={onClickLogOut}>
          <ProfileCards text="Logout" Icon={LogoutIcon} />
        </Box>
      </MenuList>
    </Menu>
  );
};

export default ProfileMenu;
