import { Axios } from "axios";
import { useEffect, useState } from "react";
import { API } from "../utils/usedApi";

function UseGetAllReminders() {
  const userId = sessionStorage.getItem("userId");
  const [reminders, setReminders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Axios.get(`${API.allReminder}/${userId}`)
      .then((res) => {
        const data = res.data;
        setReminders(data);
        setLoading(false);
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.data.message);
        } else {
          console.log(err);
        }
      });
    setLoading(false);
  }, [userId]);
  return { loading, reminders };
}

export default UseGetAllReminders;
