import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../..";
import CreateNewTask from "../../../components/CreateNewTask";
import Spinner from "../../../components/Spinner";
import { Axios } from "../../../utils/axios";
import { genericErrorToast } from "../../../utils/genericToast";
import { API } from "../../../utils/usedApi";
import ReminderCard from "./ReminderCard";
import { Reminder } from "./types";
import Welcome from "./Welcome";

function CreateReminder() {
  const toast = useToast();
  const dispatch = useDispatch();
  const refresh = useSelector((state: RootState) => state.reminder);
  const [reminders, setReminders] = useState<Reminder[]>([]);

  const [loading, setLoading] = useState(true);
  const userId = sessionStorage.getItem("userId");

  useEffect(() => {
    Axios.get(`${API.getAllReminders}/${userId}`)
      .then((res) => {
        setLoading(false);
        setReminders(res.data);
      })
      .catch((err) => {
        genericErrorToast(err, toast);
        setLoading(false);
      });
  }, [userId, refresh, toast, dispatch]);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        reminders.map((reminder: Reminder) => (
          <ReminderCard
            key={reminder._id}
            title={reminder.title}
            description={reminder.description}
            id={reminder._id}
          />
        ))
      )}

      <CreateNewTask />
      {!loading && reminders.length === 0 && <Welcome />}
    </>
  );
}

export default CreateReminder;
