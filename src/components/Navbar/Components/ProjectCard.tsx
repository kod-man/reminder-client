import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../..";
import { Axios } from "../../../utils/axios";
import { genericErrorToast } from "../../../utils/genericToast";
import { API } from "../../../utils/usedApi";
import ProjectItemCard from "./ProjectItemCard";

type Project = {
  _id: string;
  name: string;
  color: string;
};

function ProjectCard() {
  const [projects, setProjects] = useState<Project[]>([]);
  const isPageRefreshed = useSelector((state: RootState) => state.refresh);
  const toast = useToast();
  const userId = sessionStorage.getItem("userId");

  useEffect(() => {
    if (!userId) {
      return;
    }

    Axios.get(`${API.getAllProjects}/${userId}`)
      .then((response) => {
        setProjects(response.data);
      })
      .catch((err) => {
        genericErrorToast(err, toast);
      });
  }, [userId, toast, isPageRefreshed.project]);

  return (
    <>
      {projects.map(({ _id, name, color }) => (
        <ProjectItemCard key={_id} name={name} color={color} id={_id} />
      ))}
    </>
  );
}

export default ProjectCard;
