import { useState } from "react";
import NewTask from "../../../components/Navbar/Components/NewTask";
import { Reminder } from "./types";
import Welcome from "./Welcome";

function CreateReminder() {
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [showWelcome, setShowWelcome] = useState(true);
  const [loading, setLoading] = useState(true);

  return (
    <>
      <NewTask
        loading={loading}
        reminders={reminders}
        setLoading={setLoading}
        setReminders={setReminders}
        setShowWelcome={setShowWelcome}
      />
      {!loading && reminders.length === 0 && showWelcome && <Welcome />}
    </>
  );
}

export default CreateReminder;
