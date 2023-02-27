import { Flex, useToast } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "../..";
import DropIcon from "../../icons/DropIcon";
import MiniLabelIcon from "../../icons/MiniLabelIcon";
import FiltersAndLabels from "./components/FiltersAndLabels";

import { useEffect, useState } from "react";
import { Axios } from "../../utils/axios";
import { genericErrorToast } from "../../utils/genericToast";
import { API } from "../../utils/usedApi";
import Header from "./components/Header";

function FiltersAndLabelsPage() {
  const toast = useToast();
  const isDrawerOpen = useSelector((state: RootState) => state.drawer.value);
  const [filtersData, setFiltersData] = useState([]);
  const labelsList = ["Read", "İmportant", "Bussiness"];

  const [loading, setLoading] = useState(true);
  const userId = sessionStorage.getItem("userId");

  useEffect(() => {
    Axios.get(`${API.getAllFilter}/${userId}`)
      .then((response) => {
        setLoading(false);
        if (response.data) {
          setFiltersData(response.data);
        }
      })
      .catch((err) => {
        genericErrorToast(err, toast);
        setLoading(false);
      });
  }, [userId, toast]);
  throw new Error("ufuk malı götürüyor");
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      w={isDrawerOpen ? "calc(100% - 20rem)" : "100%"}
      ml="auto"
    >
      <Header />
      <FiltersAndLabels
        cardTitle="Filters"
        data={filtersData}
        Icon={DropIcon}
      />
      <FiltersAndLabels
        cardTitle="Labels"
        data={labelsList}
        Icon={MiniLabelIcon}
      />
    </Flex>
  );
}

export default FiltersAndLabelsPage;
