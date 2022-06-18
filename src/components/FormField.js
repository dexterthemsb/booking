import { Box, Input, Text } from "@chakra-ui/react";

const FormField = ({ label, required = false, ...rest }) => {
  return (
    <Box>
      <Text fontSize="sm" color="gray.500">
        {label} {required && "*"}
      </Text>
      <Input required={required} {...rest} />
    </Box>
  );
};

export default FormField;
