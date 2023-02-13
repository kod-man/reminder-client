import { Flex, Text } from "@chakra-ui/react";
import Select, { components, OptionProps } from "react-select";
import ColorDotIcon from "../../../icons/ColorDotIcon";

const { Option } = components;
const colors = [
  "Red",
  "Orange",
  "Yellow",
  "Green",
  "Blue",
  "Teal",
  "Purple",
  "Gray",
];

const CustomOption = (props: OptionProps<{ value: string; label: string }>) => (
  <Option {...props}>
    <Flex alignItems="center">
      <ColorDotIcon color={props.data.value} />
      <Text color="gray.700" fontWeight="normal">
        {props.data.label}
      </Text>
    </Flex>
  </Option>
);

const CustomSelects = ({ ...props }) => {
  return (
    <Select
      components={{ Option: CustomOption }}
      options={colors.map((color) => ({
        value: color,
        label: color,
        key: color,
      }))}
      formatOptionLabel={(selectedOption) => (
        <Flex alignItems="center">
          <ColorDotIcon color={selectedOption.value} />
          <Text color="gray.700" fontWeight="normal">
            {selectedOption.label}
          </Text>
        </Flex>
      )}
      {...props}
    />
  );
};

export default CustomSelects;
