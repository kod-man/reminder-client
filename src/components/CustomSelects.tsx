import { Flex, Text } from "@chakra-ui/react";
import Select, { components, OptionProps } from "react-select";
import ColorDotIcon from "../icons/ColorDotIcon";

const { Option } = components;
const COLORS = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "teal",
  "purple",
  "gray"
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
      styles={{
        control: (base, state) => ({
          ...base,
          height: "100%",
          borderRadius: "6px",
          padding: "2px 0px",
          borderColor: "gray",
          "&:hover": {
            borderColor: "gray"
          },
          boxShadow: state.isFocused ? "none" : base.boxShadow,
          outline: "none"
        })
      }}
      components={{ Option: CustomOption }}
      options={COLORS.map((color) => ({
        value: color,
        label: color,
        key: color
      }))}
      formatOptionLabel={(selectedOption) => (
        <Flex alignItems="center">
          <ColorDotIcon color={selectedOption.value} />
          <Text color="gray.700" fontWeight="normal">
            {selectedOption.label}
          </Text>
        </Flex>
      )}
      placeholder={
        <Flex alignItems="center">
          <ColorDotIcon color="gray" />
          <Text color="gray.500" fontWeight="normal">
            Gray
          </Text>
        </Flex>
      }
      onChange={props.onChange}
      {...props}
    />
  );
};

export default CustomSelects;
