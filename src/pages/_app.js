import {
  ApolloClient,
  ApolloProvider,
  from,
  HttpLink,
  InMemoryCache
} from "@apollo/client";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { DataContextProvider } from "../contexts/dataContext";
import { FromContextProvider } from "../contexts/formContext";
import "../styles/globals.css";

const link = from([
  new HttpLink({ uri: "https://smart-meeting.herokuapp.com/graphql" })
]);

const gqlClient = new ApolloClient({ cache: new InMemoryCache(), link });

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={gqlClient}>
      <DataContextProvider>
        <FromContextProvider>
          <ChakraProvider>
            <Box bg="gray.50">
              <Component {...pageProps} />
            </Box>
          </ChakraProvider>
        </FromContextProvider>
      </DataContextProvider>
    </ApolloProvider>
  );
}

export default MyApp;
