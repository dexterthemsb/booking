import { createContext, useEffect, useState } from "react";
import { DUMMY } from "../data/data";

const initial = {
  Buildings: [],
  MeetingRooms: [],
  Meetings: []
};

const DataContext = createContext(initial);

export const DataContextProvider = ({ children }) => {
  const [Buildings, setBuildings] = useState(initial.Buildings);
  const [MeetingRooms, setMeetingRooms] = useState(initial.MeetingRooms);
  const [Meetings, setMeetings] = useState(initial.Meetings);

  const recommendRooms = filters => {
    const rooms = MeetingRooms.filter(
      room => room.building === filters.buildingID
    );

    return rooms;
  };

  const addMeeting = data => {
    setMeetings([...Meetings, data]);
  };

  // fx not required after reducing states array -> objects
  const findEntity = (name, id) => {
    if (!id) return null;

    const temp = { Buildings, MeetingRooms, Meetings };
    const res = temp[name].filter(obj => obj.id.toString() === id.toString());

    return !!res.length ? res[0] : null;
  };

  const setAll = data => {
    const { Buildings, MeetingRooms, Meetings } = data;

    // reduce arrays -> objects
    setBuildings([...Buildings]);
    setMeetingRooms([...MeetingRooms]);
    setMeetings([...Meetings]);
  };

  useEffect(() => setAll(DUMMY), []);

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
        recommendRooms,
        addMeeting,
        loading: false
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
