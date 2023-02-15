import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import ColorDotIcon from "../../../icons/ColorDotIcon";
import MyTooltip from "./MyTooltip";

const ToggleProjects = () => {
  return (
    <Accordion allowMultiple>
      <AccordionItem border="none">
        <MyTooltip label="Toggle list of Projects">
          <AccordionButton
            aria-expanded="true"
            style={{ backgroundColor: "transparent" }}
          >
            <Box as="span" flex="1" textAlign="left"></Box>
            <AccordionIcon />
          </AccordionButton>
        </MyTooltip>
        <AccordionPanel pb={4}>
          <Flex justifyContent="center" alignItems="center">
            <ColorDotIcon color="gray" />
            <Text>Personal 🙂 </Text>
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default ToggleProjects;
