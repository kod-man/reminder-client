import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Flex,
  Text,
} from "@chakra-ui/react";
import ColorDotIcon from "../../../icons/ColorDotIcon";
import MyTooltip from "./MyTooltip";

const ToggleProjects = () => {
  return (
    <Accordion allowToggle border="1px solid red">
      <AccordionItem border="none">
        <MyTooltip label="Toggle list of Projects">
          <AccordionButton
            aria-expanded="true"
            style={{ backgroundColor: "transparent" }}
          >
            <AccordionIcon />
          </AccordionButton>
        </MyTooltip>
        <AccordionPanel pb={4}>
          <Flex justifyContent="center" alignItems="center" flexDirection="row">
            <ColorDotIcon color="gray" />
            <Text>Personal 🙂 </Text>
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default ToggleProjects;
