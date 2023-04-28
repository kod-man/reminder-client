import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../..";
import { ItemData } from "../../../pages/FiltersAndLabels/components/FiltersAndLabels";
import { Axios } from "../../../utils/axios";
import { genericErrorToast } from "../../../utils/genericToast";
import { API } from "../../../utils/usedApi";
import FavoriteItemCard from "./FavoriteItemCard";
function FavoriteCard() {
  const isPageRefreshed = useSelector((state: RootState) => state.refresh);
  const [loading, setLoading] = useState(true);
  const userId = sessionStorage.getItem("userId");
  const [labelsData, setLabelsData] = useState([]);
  const toast = useToast();
  useEffect(() => {
    Axios.get(`${API.getAllLabels}/${userId}`)
      .then((response) => {
        setLoading(false);
        if (response.data) {
          const favoriteItems = response.data.filter(
            (item: ItemData) => item.isFavorite === true
          );
          setLabelsData(favoriteItems);
        }
      })
      .catch((err) => {
        genericErrorToast(err, toast);
        setLoading(false);
      });
  }, [userId, toast, isPageRefreshed.label]);
  return (
    <>
      {!loading &&
        labelsData.map(({ _id, name, color }) => (
          <FavoriteItemCard key={_id} name={name} color={color} id={_id} />
        ))}
    </>
  );
}

export default FavoriteCard;
