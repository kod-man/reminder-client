import { useEffect, useState } from "react";
import { Axios } from "../../../utils/axios";
import { API } from "../../../utils/usedApi";
import ProjectItemCard from "./ProjectItemCard";


type Project = {
  id: number;
  name: string;
  color: string;
};

function ProjectCard( ) {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const userId = sessionStorage.getItem("userId");
    if (!userId) return;

    Axios.get(`${API.getProject}/${userId}`)
      .then((response) => {
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
