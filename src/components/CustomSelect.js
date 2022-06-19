import { Box, Button, Input, Text } from "@chakra-ui/react";
import { ChevronDown as ChevronDownIcon } from "react-feather";

const CustomSelect = ({
  label,
  placeholder,
  value,
  required = false,
  ...rest
}) => {
  return (
    <Box w="full">
      <Text fontSize="sm" color="gray.500">
        {label}
      </Text>
      <Box w="full" position="relative">
        <Input
          opacity={0}
          required={required}
          value={value}
          zIndex="0"
          position="absolute"
        />
        <Button
          {...rest}
          display="flex"
          flexDir="row"
          alignItems="center"
          justifyContent="space-between"
          textAlign="left"
          fontWeight="normal"
          zIndex="1"
          position="absolute"
          color="gray.500"
          rightIcon={<ChevronDownIcon size={20} />}
        >
          <Text color={!!value ? "black" : "gray.500"}>
            {!!value ? value : placeholder}
          </Text>
        </Button>
      </Box>
    </Box>
  );
};

export default CustomSelect;
