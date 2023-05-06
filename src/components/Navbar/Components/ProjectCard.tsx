import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../..";
import { allProjects } from "../../../store/Projects/ProjectsSlice";
import { Axios } from "../../../utils/axios";
import { genericErrorToast } from "../../../utils/genericToast";
import { API } from "../../../utils/usedApi";
import ProjectItemCard from "./ProjectItemCard";

function ProjectCard() {
  const projects = useSelector((state: RootState) => state.projects.projects);

  const dispatch = useDispatch();

  const isPageRefreshed = useSelector((state: RootState) => state.refresh);
  const toast = useToast();
  const userId = sessionStorage.getItem("userId");

  useEffect(() => {
    if (!userId) {
      return;
    }

    Axios.get(`${API.getAllProjects}/${userId}`)
      .then((response) => {
        dispatch(allProjects(response.data));
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
