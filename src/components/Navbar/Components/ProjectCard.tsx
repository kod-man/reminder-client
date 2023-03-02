import { Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ColorDotIcon from "../../../icons/ColorDotIcon";
import { Axios } from "../../../utils/axios";
import { API } from "../../../utils/usedApi";

type ProjectCardProps = {
  color: string;
  name: string;
};

type Project = {
  id: number;
  name: string;
  color: string;
};

function ProjectCard({ name, color }: ProjectCardProps) {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const userId = sessionStorage.getItem("userId");
    if (!userId) return;

    Axios.get(`${API.getProject}/${userId}`)
      .then((response) => {
        console.log(response.data);
        setProjects(response.data);
      })
      .catch((err) => {
        console.log(err);
        setProjects([]);
      });
  }, []);

  return (
    <>
      {projects.map((project) => (
        <Flex
          key={project.id}
          m="-5px 10px 0 25px "
          fontSize="sm"
          justifyContent="flex-start"
          alignItems="center"
          h="32px"
          borderRadius="5px"
          p="1px"
          _hover={{ backgroundColor: "#eeeeee", cursor: "pointer" }}
        >
          <ColorDotIcon color={project.color} />
          <Text fontSize="16px">{project.name}</Text>
          <Flex ml="auto">...</Flex>
        </Flex>
      ))}
    </>
  );
}

export default ProjectCard;
