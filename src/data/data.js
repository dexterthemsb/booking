export const DUMMY = {
  Buildings: [
    {
      id: "8263b668-52b3-47a5-a4a3-3b969a1ae3af",
      name: "Slytherin Park North",
      meetingRooms: [
        "93d954bb-bfc1-4763-9d32-138f6967c611",
        "81cc1ee5-7439-44e9-96ab-8b7a436ff7da"
      ]
    },
    {
      id: "4177c853-f205-46a1-9317-a5875bc99df0",
      name: "Platform 9 3/4 East",
      meetingRooms: ["cb616026-0446-46b8-b309-c70a3d7f83a5"]
    }
  ],
  MeetingRooms: [
    {
      id: "93d954bb-bfc1-4763-9d32-138f6967c611",
      name: "Main Hall 01",
      floor: 2,
      building: "8263b668-52b3-47a5-a4a3-3b969a1ae3af",
      meetings: [
        "c4384a76-a208-46d6-8121-5cf904dd8229",
        "708a5a42-4e61-4cea-921c-f236550ff36c"
      ]
    },
    {
      id: "81cc1ee5-7439-44e9-96ab-8b7a436ff7da",
      name: "Side Box 01",
      floor: 3,
      building: "8263b668-52b3-47a5-a4a3-3b969a1ae3af",
      meetings: []
    },
    {
      id: "cb616026-0446-46b8-b309-c70a3d7f83a5",
      name: "Main Hall 04",
      floor: 3,
      building: "4177c853-f205-46a1-9317-a5875bc99df0",
      meetings: []
    }
  ],
  Meetings: [
    {
      id: "c4384a76-a208-46d6-8121-5cf904dd8229",
      title: "Interview with Adam Westcott: Lead Designer",
      date: "2022-06-20",
      startTime: "10:00",
      endTime: "11:00",
      meetingRoom: "93d954bb-bfc1-4763-9d32-138f6967c611",
      building: "8263b668-52b3-47a5-a4a3-3b969a1ae3af"
    },
    {
      id: "708a5a42-4e61-4cea-921c-f236550ff36c",
      title: "Interview with Jawed: Social Media Manager",
      date: "2022-06-25",
      startTime: "11:00",
      endTime: "12:00",
      meetingRoom: "93d954bb-bfc1-4763-9d32-138f6967c611",
      building: "8263b668-52b3-47a5-a4a3-3b969a1ae3af"
    }
  ]
};
