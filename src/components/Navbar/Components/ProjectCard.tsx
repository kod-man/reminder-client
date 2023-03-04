import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Axios } from "../../../utils/axios";
import { genericErrorToast } from "../../../utils/genericToast";
import { API } from "../../../utils/usedApi";
import ProjectItemCard from "./ProjectItemCard";


type Project = {
  id: number;
  name: string;
  color: string;
};

function ProjectCard( ) {
  const [projects, setProjects] = useState<Project[]>([]);
  const toast = useToast();
  const userId = sessionStorage.getItem("userId");
  useEffect(() => {
   
    if (!userId) return;

    Axios.get(`${API.getProject}/${userId}`)
      .then((response) => {
        setProjects(response.data);
      })
      .catch((err) => {
        genericErrorToast(err, toast);
      });

  }, [userId , toast]);

  return (
    <>
      {projects.map((project) => (
        <ProjectItemCard
          key={project.id}
          id={project.id}
          name={project.name}
          color={project.color}
        />
      ))}
    </>
  );
}

export default ProjectCard;
