import { useQuery } from "@apollo/client/react";
import { createContext, useEffect, useState } from "react";
import { LOAD_ALL } from "../graphql/queries";

const initial = {
  mounting: true,
  Buildings: [],
  MeetingRooms: [],
  Meetings: []
};

const DataContext = createContext(initial);

export const DataContextProvider = ({ children }) => {
  const { loading, data } = useQuery(LOAD_ALL);

  const [Buildings, setBuildings] = useState(initial.Buildings);
  const [MeetingRooms, setMeetingRooms] = useState(initial.MeetingRooms);
  const [Meetings, setMeetings] = useState(initial.Meetings);

  const findEntity = (name, id) => {
    const temp = { Buildings, MeetingRooms, Meetings };
    const res = temp[name].filter(obj => obj.id.toString() === id.toString());

    return !!res.length ? res[0] : null;
  };

  const setAll = data => {
    const { Buildings, MeetingRooms, Meetings } = data;

    setBuildings([...Buildings]);
    setMeetingRooms([...MeetingRooms]);
    setMeetings([...Meetings]);
  };

  useEffect(() => {
    if (!loading) setAll(data);
  }, [loading, data]);

  return (
    <DataContext.Provider
      value={{
        Buildings,
        setBuildings,
        MeetingRooms,
        setMeetingRooms,
        Meetings,
        setMeetings,
        setAll,
        findEntity,
        loading
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
