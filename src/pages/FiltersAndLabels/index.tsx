import { Flex, useToast } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "../..";
import DropIcon from "../../icons/DropIcon";
import MiniLabelIcon from "../../icons/MiniLabelIcon";
import FiltersAndLabels from "./components/FiltersAndLabels";

import { useEffect, useState } from "react";
import Spinner from "../../components/Spinner";
import { Axios } from "../../utils/axios";
import { genericErrorToast } from "../../utils/genericToast";
import { API } from "../../utils/usedApi";
import Header from "./components/Header";

function FiltersAndLabelsPage() {
  const toast = useToast();
  const isPageRefreshed = useSelector((state: RootState) => state.refresh);
  const [filtersData, setFiltersData] = useState([]);
  const [labelsData, setLabelsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const userId = sessionStorage.getItem("userId");

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
  }, [userId, toast, isPageRefreshed.filter]);

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
  }, [userId, toast, isPageRefreshed.label]);
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="start"
      w="100%"
      h="100%"
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
          />
          {
            <FiltersAndLabels
              cardTitle="Labels"
              data={labelsData}
              Icon={MiniLabelIcon}
            />
          }
        </>
      )}
    </Flex>
  );
}

export default FiltersAndLabelsPage;
