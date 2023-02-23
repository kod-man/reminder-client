import { Flex, Text } from "@chakra-ui/react";
import Select, { components, OptionProps } from "react-select";
import ColorDotIcon from "../../../icons/ColorDotIcon";

const { Option } = components;
const COLORS = [
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
  console.log(props.handleColorChange);

  const handleChange = (item:any) => {
    console.log(item);
  };

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
            borderColor: "gray",
          },
          boxShadow: state.isFocused ? "none" : base.boxShadow,
          outline: "none",
        }),
      }}
      components={{ Option: CustomOption }}
      options={COLORS.map((color) => ({
        value: color,
        label: color,
        key: color,
      }))}
      onChange={handleChange}
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
      {...props}
    />
  );
};

export default CustomSelects;

// Type '(item: {    value: string;    label: string;}) => void' is not assignable to type '(newValue: SingleValue<{ value: string; label: string; }> | MultiValue<{ value: string; label: string; }>, actionMeta: ActionMeta<{ value: string; label: string; }>) => void'.
//   Types of parameters 'item' and 'newValue' are incompatible.
//     Type 'SingleValue<{ value: string; label: string; }> | MultiValue<{ value: string; label: string; }>' is not assignable to type '{ value: string; label: string; }'.
//       Type 'null' is not assignable to type '{ value: string; label: string; }'.

      // (newValue: SingleValue<{ value: string; label: string; }> | MultiValue<{ value: string; label: string; }>, actionMeta: ActionMeta<{ value: string; label: string; }>)