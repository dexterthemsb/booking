import { Box, CircularProgress } from "@chakra-ui/react";

const PageLoader = () => {
  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      w="full"
      h="100vh"
      display="flex"
      flexDir="row"
      alignItems="center"
      justifyContent="center"
      bg="gray.100"
    >
      <CircularProgress isIndeterminate />
    </Box>
  );
};

export default PageLoader;
