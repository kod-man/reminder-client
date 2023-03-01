import { Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import ColorDotIcon from "../../../icons/ColorDotIcon";
import { Axios } from "../../../utils/axios";
import { API } from "../../../utils/usedApi";

type ProjectCardComponentProps = {
  color: string;
  name: string;
};

function ProjectCardComponent({ name, color }: ProjectCardComponentProps) {
  const userId = sessionStorage.getItem("userId");
  // const [projects, setProjects] = useState({});
 

  Axios.get(`${API.addProject}/${userId}`)
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
    });

    
  return (
    <Flex
      m="-5px 10px 0 25px "
      fontSize="sm"
      justifyContent="flex-start"
      alignItems="center"
      h="32px"
      borderRadius="5px"
      p="1px"
      _hover={{ backgroundColor: "#eeeeee", cursor: "pointer" }}
    >
      <ColorDotIcon color={color} />
      <Text fontSize="16px">{name}</Text>
      <Flex ml="auto">...</Flex>
    </Flex>
  );
}

export default ProjectCardComponent;
