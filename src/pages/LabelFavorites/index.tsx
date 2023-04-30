import { Divider, Flex } from "@chakra-ui/react";
import { useState } from "react";
import NewTask from "../../components/Navbar/Components/NewTask";
import { Reminder } from "../TodayPage/Components/types";
import FavoritePage from "./components/FavoritePage";
import Header from "./components/Header";

function LabelFavorite() {
  const [loading, setLoading] = useState(true);
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [showWelcome, setShowWelcome] = useState(true);
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="start"
      w="100%"
      h="100%"
    >
      <Header />
      <Divider w="100%" />
      <Flex w="100%" flexDirection="column">
        <NewTask
          loading={loading}
          reminders={reminders}
          setLoading={setLoading}
          setReminders={setReminders}
          setShowWelcome={setShowWelcome}
        />
        {!loading && reminders.length === 0 && <FavoritePage />}
      </Flex>
    </Flex>
  );
}

export default LabelFavorite;
