import {
  Box,
  Button,
  Container,
  Heading,
  SimpleGrid,
  Text
} from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext } from "react";
import {
  Box as BoxIcon,
  Bell as BellIcon,
  Briefcase as BriefcaseIcon
} from "react-feather";
import PageLoader from "../components/pageLoader";
import DataContext from "../contexts/dataContext";
import FromContext from "../contexts/formContext";
export default function Home() {
  const router = useRouter();
  const { Buildings, MeetingRooms, Meetings, loading } =
    useContext(DataContext);
  const { clearAll } = useContext(FromContext);

  const CARDS = [
    {
      name: "Buildings",
      data: Buildings,
      icon: <BoxIcon />,
      bg: "purple"
    },
    {
      name: "Rooms",
      data: MeetingRooms,
      icon: <BriefcaseIcon />,
      bg: "yellow"
    },
    {
      name: "Meetings",
      data: Meetings,
      icon: <BellIcon />,
      bg: "cyan"
    }
  ];

  const handleAddMeeting = () => {
    clearAll();
    router.push("/select-time");
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {loading ? (
          <PageLoader />
        ) : (
          <Container
            px={[4, 8, 8, 16]}
            py={[8, 8, 16]}
            display="flex"
            flexDir="column"
            justifyContent="space-between"
            maxW="container.lg"
            minH="100vh"
          >
            <Box>
              <Heading>Dashboard</Heading>
              <Text mt="2">
                Overview of all the building, meeting rooms and meetings.
              </Text>
              <SimpleGrid mt="8" columns={[1, 2, 2, 3]} gap="4">
                {CARDS.map(card => (
                  <Box key={card.name} bg="white" rounded="xl" p="4" w="full">
                    <Box
                      display="flex"
                      flexDir="row"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Box>
                        <Text fontSize="xl" fontWeight="semibold">
                          {card.name}
                        </Text>
                        <Text>Total {card.data.length}</Text>
                      </Box>
                      <Box
                        p="3"
                        rounded="full"
                        bg={`${card.bg}.400`}
                        color="white"
                      >
                        {card.icon}
                      </Box>
                    </Box>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>

            <Box mt="12" textAlign="right">
              <Button
                w={["full", "fit-content"]}
                ml={[0, 4]}
                variant="solid"
                colorScheme="blue"
                onClick={() => handleAddMeeting()}
              >
                Add New Meeting
              </Button>
            </Box>
          </Container>
        )}
      </main>
    </>
  );
}
