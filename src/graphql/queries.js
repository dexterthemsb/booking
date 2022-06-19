import { gql } from "@apollo/client";

export const LOAD_ALL = gql`
  query {
    Meetings {
      id
      title
      date
      startTime
      endTime
    }
    MeetingRooms {
      id
      name
      floor
      building {
        id
      }
      meetings {
        id
      }
    }
    Buildings {
      id
      name
      meetingRooms {
        id
      }
    }
  }
`;

export const LOAD_BUILDINGS = gql`
  query {
    Buildings {
      id
      name
      meetingRooms {
        id
      }
    }
  }
`;

export const LOAD_ROOMS = gql`
  query {
    MeetingRooms {
      id
      name
      floor
      building {
        id
      }
      meetings {
        id
      }
    }
  }
`;

export const LOAD_MEETINGS = gql`
  query {
    Meetings {
      id
      title
      date
      startTime
      endTime
    }
  }
`;
