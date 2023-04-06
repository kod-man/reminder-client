import {
  Box,
  Divider,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  Text,
  useToast,
  VStack
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
import { Axios } from "../../../utils/axios";
import { genericErrorToast } from "../../../utils/genericToast";
import { PATHS } from "../../../utils/paths";
import { API } from "../../../utils/usedApi";
import ConditionallyImage from "./ConditionallyImage";
import ProfileCards from "./ProfileCards";

const ProfilMenuData = [
  { Icon: ThemeIcon, text: "Theme" },
  { Icon: ActivityIcon, text: "Activity Log" },
  { Icon: PrintIcon, text: "Print" },
  { Icon: IntegrationIcon, text: "Integrations" },
  { Icon: UpgradeIcon, text: "Upgrade to Pro" },
  { Icon: BusinessIcon, text: "Upgarde to Business" },
  { Icon: DownloadIcon, text: "Download apps" }
];
const ProfileMenu = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profileImg, setProfileImg] = useState("");

  useEffect(() => {
    const userId = sessionStorage.getItem("userId");
    Axios.get(`${API.getUserDetails}/${userId}`)
      .then((response) => {
        const { userName, email, imageSrc } = response.data.user;
        setName(userName);
        setEmail(email);
        setProfileImg(imageSrc);
      })
      .catch((err) => {
        if (err.response) {
          genericErrorToast(err, toast);
        } else {
          console.log(err);
        }
      });
  }, [toast]);

  const nameInitials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  const onClickLogOut = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userId");
    navigate(PATHS.LOGIN);
  };

  return (
    <Menu>
      <Flex
        as={MenuButton}
        cursor="pointer"
        h="7"
        w="7"
        fontSize="xs"
        color="#db4c3f"
        alignItems="center"
        justifyContent="center"
        backgroundColor="white"
        borderRadius="full"
        fontWeight="bold"
        backgroundImage={profileImg}
      >
        <ConditionallyImage imageSrc={profileImg} initials={nameInitials} />
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
                border="1px solid #db4c3f"
                fontSize="xl"
                color="#db4c3f"
                alignItems="center"
                justifyContent="center"
                backgroundColor="white"
                borderRadius="50%"
              >
                <ConditionallyImage
                  imageSrc={profileImg}
                  initials={nameInitials}
                />
              </Flex>
              <VStack>
                <Flex flexDir="column" m={2}>
                  <Text as="b" fontSize="sm">
                    {name}
                  </Text>
                  <Text fontSize="xs" color="gray">
                    {email}
                  </Text>
                </Flex>
              </VStack>
            </Flex>
            <Flex
              alignItems="center"
              justifyContent="flex-start"
              paddingLeft="10px"
            >
              <SettingsIcon color="#808080" />
              <Text ml="12px" fontSize="small">
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
