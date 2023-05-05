import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../..";
import { allLabels } from "../../../store/Label/LabelsSlice";
import { Axios } from "../../../utils/axios";
import { genericErrorToast } from "../../../utils/genericToast";
import { API } from "../../../utils/usedApi";
import FavoriteItemCard from "./FavoriteItemCard";
function FavoriteCard() {
  const isPageRefreshed = useSelector((state: RootState) => state.refresh);

  const favoriteLabels = useSelector((state: RootState) =>
    state.labels.labels.filter((item) => item.isFavorite === true)
  );
  const [loading, setLoading] = useState(true);
  const userId = sessionStorage.getItem("userId");

  const dispatch = useDispatch();

  const toast = useToast();
  useEffect(() => {
    Axios.get(`${API.getAllLabels}/${userId}`)
      .then((response) => {
        setLoading(false);
        if (response.data) {
          dispatch(allLabels(response.data));
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
        favoriteLabels.map(({ _id, name, color }) => (
          <FavoriteItemCard key={_id} name={name} color={color} id={_id} />
        ))}
    </>
  );
}

export default FavoriteCard;
