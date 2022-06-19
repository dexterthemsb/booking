import { createContext, useEffect, useState } from "react";

const initial = {
  title: "",
  date: "",
  startTime: "",
  endTime: "",
  buildingID: "",
  roomID: ""
};

const FromContext = createContext(initial);

export const FromContextProvider = ({ children }) => {
  const [mounting, setMounting] = useState(true);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [buildingID, setBuildingID] = useState("");
  const [roomID, setRoomID] = useState("");

  const keys = [
    { label: "title", callback: setTitle },
    { label: "date", callback: setDate },
    { label: "startTime", callback: setStartTime },
    { label: "endTime", callback: setEndTime },
    { label: "buildingID", callback: setBuildingID },
    { label: "roomID", callback: setRoomID }
  ];

  const setToLocal = () => {
    localStorage.setItem("title", title);
    localStorage.setItem("date", date);
    localStorage.setItem("startTime", startTime);
    localStorage.setItem("endTime", endTime);
    localStorage.setItem("buildingID", buildingID);
    localStorage.setItem("roomID", roomID);
  };

  const clearAll = () => {
    keys.forEach(key => key.callback(""));
    localStorage.clear();
  };

  useEffect(() => {
    keys.forEach(key => {
      const val = localStorage.getItem(key.label);
      key.callback(!!val ? val.toString() : "");
    });
    setMounting(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => setRoomID(""), [buildingID]);

  useEffect(() => localStorage.setItem("roomID", roomID), [roomID]);

  return (
    <FromContext.Provider
      value={{
        title,
        setTitle,
        date,
        setDate,
        startTime,
        setStartTime,
        endTime,
        setEndTime,
        buildingID,
        setBuildingID,
        roomID,
        setRoomID,
        setToLocal,
        clearAll,
        mounting
      }}
    >
      {children}
    </FromContext.Provider>
  );
};

export default FromContext;
