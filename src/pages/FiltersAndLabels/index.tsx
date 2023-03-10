import { Flex, useToast } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "../..";
import DropIcon from "../../icons/DropIcon";
import MiniLabelIcon from "../../icons/MiniLabelIcon";
import FiltersAndLabels from "./components/FiltersAndLabels";

import { useEffect, useState } from "react";
import { Axios } from "../../utils/axios";
import { genericErrorToast } from "../../utils/genericToast";
import Spinner from "../../components/Spinner";
import Header from "./components/Header";
import { API } from "../../utils/usedApi";

function FiltersAndLabelsPage() {
  const toast = useToast();
  const isDrawerOpen = useSelector((state: RootState) => state.drawer.value);
  const [filtersData, setFiltersData] = useState([]);
  const [labelsData, setLabelsData] = useState([]);
  const [refreshGet, setRefreshGet] = useState(false);
  const [loading, setLoading] = useState(true);
  const userId = sessionStorage.getItem("userId");

  const refreshPage = () => {
    setRefreshGet(!refreshGet);
  };

  useEffect(() => {
    Axios.get(`${API.getAllFilters}/${userId}`)
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
  }, [userId, toast, refreshGet]);

  useEffect(() => {
    Axios.get(`${API.getAllLabels}/${userId}`)
      .then((response) => {
        setLoading(false);
        if (response.data) {
          setLabelsData(response.data);
        }
      })
      .catch((err) => {
        genericErrorToast(err, toast);
        setLoading(false);
      });
  }, [userId, toast, refreshGet]);
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      w={isDrawerOpen ? "calc(100% - 20rem)" : "100%"}
      ml="auto"
    >
      <Header />
      {loading ? (
        <Spinner />
      ) : (
        <>
          <FiltersAndLabels
            cardTitle="Filters"
            data={filtersData}
            Icon={DropIcon}
            onRefresh={refreshPage}
          />
          {
            <FiltersAndLabels
              cardTitle="Labels"
              data={labelsData}
              Icon={MiniLabelIcon}
              onRefresh={refreshPage}
            />
          }
        </>
      )}
    </Flex>
  );
}

export default FiltersAndLabelsPage;
