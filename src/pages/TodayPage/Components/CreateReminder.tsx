import { Flex, Text, useMediaQuery } from "@chakra-ui/react";

import { useEffect, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

import { Axios } from "../../../utils/axios";

import { API } from "../../../utils/usedApi";

import Welcome from "./Center";

import Inputs from "./Inputs";

function CreateReminder() {
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);

  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const userId = sessionStorage.getItem("userId");

  useEffect(() => {
    Axios.get(`${API.allReminder}/${userId}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.data.message);
        } else {
          console.log(err);
        }
      });
  });
  return (
    <>
      {!isAddTaskOpen && (
        <>
          <Flex
            w={isLargerThan800 ? "60%" : "80%"}
            mt='2'
            alignItems='center'
            cursor='pointer'
          >
            <Text
              _hover={{ bg: "red", color: "white" }}
              onClick={() => setIsAddTaskOpen(!isAddTaskOpen)}
              borderRadius='100%'
              color='red'
            >
              <AiOutlinePlusCircle />
            </Text>
            <Flex
              color='gray'
              ml='2'
              _hover={{ color: "red" }}
              onClick={() => setIsAddTaskOpen(!isAddTaskOpen)}
            >
              Görev Ekle
            </Flex>
          </Flex>
          <Welcome />
        </>
      )}
      {isAddTaskOpen && <Inputs />}
    </>
  );
}

export default CreateReminder;
