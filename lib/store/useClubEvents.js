import { create } from "zustand";

// const enigma = {
//   name: "Enigma",
//   about: "",
//   poc: [
//     {
//       name: "",
//       position: "",
//       contact_no: "",
//     },
//   ],
//   events: [
//     {
//       title: "Nox Code3",
//       about: "About contest",
//       venue: "Elearning Center",
//       time: "9.30AM",
//     },
//   ],
// };

// const c = {
//   enigma: [
//     {
//       title: "Nox Code3",
//       about: "About contest",
//       venue: "Elearning Center",
//       time: "9.30AM",
//     },
//     {
//       title: "Nox Code3",
//       about: "About contest",
//       venue: "Elearning Center",
//       time: "9.30AM",
//     },
//     {
//       title: "Nox Code3",
//       about: "About contest",
//       venue: "Elearning Center",
//       time: "9.30AM",
//     },
//   ],
//   ecell: [
//     {
//       title: "Trading Pro",
//       about: "About contest",
//       venue: "Elearning Center",
//       time: "9.30AM",
//     },
//     {
//       title: "Trading Pro",
//       about: "About contest",
//       venue: "Elearning Center",
//       time: "9.30AM",
//     },
//   ],
// };
//Departement of Civil enigneering,Department of CSE,Department EE,EMoticaDept OF ETC,DEPt of MME,DEpt of PRod
//
const data = {
  emotica: {
    name: "Emotica",
    about: "official dramatics club",
    poc: [
      {
        name: "FA",
        contactNo: "abc@gmail.com",
        designation: "Faculty Advisor",
      },
      {
        name: "P2",
        contactNo: 1234757588,
        designation: "lead",
      },
      {
        name: "P2",
        contactNo: 1234757588,
        designation: "lead",
      },
    ],
    events: [
      {
        title: "Nukkad",
        about: "About contest",
        venue: "Elearning Center",
        time: "9.30AM",
        date: "4/3/23",
      },
      {
        title: "Nukkad1",
        about: "About contest",
        venue: "Elearning Center",
        time: "9.30AM",
        date: "4/3/23",
      },
      {
        title: "Nukkad2",
        about: "About contest",
        venue: "Elearning Center",
        time: "9.30AM",
        date: "4/3/23",
      },
    ],
  },
  litsoc: {
    name: "Literary society",
    about: "Litreauture society",
    poc: [
      {
        name: "FA",
        contactNo: "abc@gmail.com",
        designation: "Faculty Advisor",
      },
      {
        name: "P1",
        contactNo: 1234757588,
        designation: "lead",
      },
      {
        name: "P2",
        contactNo: 1234757588,
        designation: "lead",
      },
    ],
    events: [
      {
        title: "Debate contest",
        about: "About contest",
        venue: "Elearning Center",
        time: "9.30AM",
        date: "4/3/23",
      },
      {
        title: "Debate contest1",
        about: "About contest",
        venue: "Elearning Center",
        time: "9.30AM",
        date: "4/3/23",
      },
      {
        title: "Debate contest2",
        about: "About contest",
        venue: "Elearning Center",
        time: "9.30AM",
        date: "4/3/23",
      },
    ],
  },
  avc: {
    name: "Audio visual club",
    about: "official cinematics club",
    poc: [
      {
        name: "FA",
        contactNo: "abc@gmail.com",
        designation: "Faculty Advisor",
      },
      {
        name: "P1",
        contactNo: 1234757588,
        designation: "lead",
      },
      {
        name: "P2",
        contactNo: 1234757588,
        designation: "lead",
      },
    ],
    events: [
      {
        title: "Guftagu",
        about: "About contest",
        venue: "Elearning Center",
        time: "9.30AM",
        date: "4/3/23",
      },
      {
        title: "Guftagu1",
        about: "About contest",
        venue: "Elearning Center",
        time: "9.30AM",
        date: "4/3/23",
      },
      {
        title: "Guftagu2",
        about: "About contest",
        venue: "Elearning Center",
        time: "9.30AM",
        date: "4/3/23",
      },
    ],
  },
  pixel: {
    name: "Pixel",
    about: "official photography club",
    poc: [
      {
        name: "FA",
        contactNo: "abc@gmail.com",
        designation: "Faculty Advisor",
      },
      {
        name: "P1",
        contactNo: 1234757588,
        designation: "lead",
      },
      {
        name: "P2",
        contactNo: 1234757588,
        designation: "lead",
      },
    ],
    events: [
      {
        title: "Photography",
        about: "About contest",
        venue: "Elearning Center",
        time: "9.30AM",
        date: "4/3/23",
      },
      {
        title: "Photography1",
        about: "About contest",
        venue: "Elearning Center",
        time: "9.30AM",
        date: "4/3/23",
      },
      {
        title: "photography2",
        about: "About contest",
        venue: "Elearning Center",
        time: "9.30AM",
        date: "4/3/23",
      },
    ],
  },
  quizzine: {
    name: "Quizzine",
    about: "official quizzing club",
    poc: [
      {
        name: "FA",
        contactNo: "abc@gmail.com",
        designation: "Faculty Advisor",
      },
      {
        name: "P1",
        contactNo: 1234757588,
        designation: "lead",
      },
      {
        name: "P2",
        contactNo: 1234757588,
        designation: "lead",
      },
    ],
    events: [
      {
        title: "Quiz contest",
        about: "About contest",
        venue: "Elearning Center",
        time: "9.30AM",
        date: "4/3/23",
      },
      {
        title: "Quiz contest1",
        about: "About contest",
        venue: "Elearning Center",
        time: "9.30AM",
        date: "4/3/23",
      },
      {
        title: "Quiz contest2",
        about: "About contest",
        venue: "Elearning Center",
        time: "9.30AM",
        date: "4/3/23",
      },
    ],
  },
  supra: {
    name: "Supra",
    about: "Veer Racer and Veer Racing",
    poc: [
      {
        name: "FA",
        contactNo: "abc@gmail.com",
        designation: "Faculty Advisor",
      },
      {
        name: "P1",
        contactNo: 1234757588,
        designation: "lead",
      },
      {
        name: "P2",
        contactNo: 1234757588,
        designation: "lead",
      },
    ],
    events: [
      {
        title: "Car racing",
        about: "About contest",
        venue: "Elearning Center",
        time: "9.30AM",
        date: "4/3/23",
      },
      {
        title: "Car racing1",
        about: "About contest",
        venue: "Elearning Center",
        time: "9.30AM",
        date: "4/3/23",
      },
      {
        title: "Car racing2",
        about: "About contest",
        venue: "Elearning Center",
        time: "9.30AM",
        date: "4/3/23",
      },
    ],
  },
  souls: {
    name: "Souls",
    about: "official music club",
    poc: [
      {
        name: "FA",
        contactNo: "abc@gmail.com",
        designation: "Faculty Advisor",
      },
      {
        name: "P1",
        contactNo: 1234757588,
        designation: "lead",
      },
      {
        name: "P2",
        contactNo: 1234757588,
        designation: "lead",
      },
    ],
    events: [
      {
        title: "SaReGaMa",
        about: "About contest",
        venue: "Elearning Center",
        time: "9.30AM",
        date: "4/3/23",
      },
      {
        title: "SaReGaMa1",
        about: "About contest",
        venue: "Elearning Center",
        time: "9.30AM",
        date: "4/3/23",
      },
      {
        title: "SaReGaMa2",
        about: "About contest",
        venue: "Elearning Center",
        time: "9.30AM",
        date: "4/3/23",
      },
    ],
  },
  vibranz: {
    name: "Vibranz",
    about: "official dance club",
    poc: [
      {
        name: "FA",
        contactNo: "abc@gmail.com",
        designation: "Faculty Advisor",
      },
      {
        name: "P1",
        contactNo: 1234757588,
        designation: "lead",
      },
      {
        name: "P2",
        contactNo: 1234757588,
        designation: "lead",
      },
    ],
    events: [
      {
        title: "Dance battle",
        about: "About contest",
        venue: "Elearning Center",
        time: "9.30AM",
        date: "4/3/23",
      },
      {
        title: "Dance battle1",
        about: "About contest",
        venue: "Elearning Center",
        time: "9.30AM",
        date: "4/3/23",
      },
      {
        title: "Dance battle2",
        about: "About contest",
        venue: "Elearning Center",
        time: "9.30AM",
        date: "4/3/23",
      },
    ],
  },
  enigma: {
    name: "Enigma",
    about: "Coding CLub of VSSUT",
    poc: [
      {
        name: "FA",
        contactNo: "abc@gmail.com",
        designation: "Faculty Advisor",
      },
      {
        name: "P1",
        contactNo: 1234757588,
        designation: "lead",
      },
      {
        name: "P2",
        contactNo: 1234757588,
        designation: "lead",
      },
      {
        name: "P3",
        contactNo: 1234757588,
        designation: "lead",
      },
    ],
    events: [
      {
        title: "Nox Code3",
        about:
          "'No one can win every battle, but no man should fall without a struggle' Are you valiant to take the stake to conquer the wrong? Put forth the ardour and get ready to tackle the erroneous code!  Get yourself with the tech-zeal in you to debug for ENIGMA brings you DEBUG BATTLE. Here you get to tackle the code by detecting the fault and amending it with the veracious replacement.So, put your armours on and prepare your best to debug in the quest at 11:00 am on 5th March in the E learning Labs.",
        venue: "Elearning Center",
        time: "9.30AM",
        date: "4/3/23",
      },
      {
        title: "Nox Code3",
        about: "About contest",
        venue: "Elearning Center",
        time: "9.30AM",
        date: "4/3/23",
      },
      {
        title: "Nox Code3",
        about: "About contest",
        venue: "Elearning Center",
        time: "9.30AM",
        date: "4/3/23",
      },
    ],
  },
  ecell: {
    name: "E-Cell",
    about: "Entrepreneurship Cell of VSSUT",
    poc: [
      {
        name: "FA",
        contactNo: "abc@gmail.com",
        designation: "Faculty Advisor",
      },
      {
        name: "P1",
        contactNo: 1234757588,
        designation: "lead",
      },
      {
        name: "P2",
        contactNo: 1234757588,
        designation: "lead",
      },
      {
        name: "P3",
        contactNo: 1234757588,
        designation: "lead",
      },
    ],
    events: [
      {
        title: "Trading Pro",
        about: "About contest",
        venue: "Elearning Center",
        time: "9.30AM",
        date: "4/3/23",
      },
      {
        title: "Trading Pro",
        about: "About contest",
        venue: "Elearning Center",
        time: "9.30AM",
        date: "4/3/23",
      },
      {
        title: "Trading Pro",
        about: "About contest",
        venue: "Elearning Center",
        time: "9.30AM",
        date: "4/3/23",
      },
    ],
  },
  iic: {
    name: "Idea and Innovation cell",
    about: "Space exploration club",
    poc: [
      {
        name: "FA",
        contactNo: "abc@gmail.com",
        designation: "Faculty Advisor",
      },
      {
        name: "P1",
        contactNo: 1234757588,
        designation: "lead",
      },
      {
        name: "P2",
        contactNo: 1234757588,
        designation: "lead",
      },
    ],
    events: [
      {
        title: "Space Expo",
        about: "About contest",
        venue: "Elearning Center",
        time: "9.30AM",
        date: "4/3/23",
      },
      {
        title: "Space Expo1",
        about: "About contest",
        venue: "Elearning Center",
        time: "9.30AM",
        date: "4/3/23",
      },
      {
        title: "Space expo2",
        about: "About contest",
        venue: "Elearning Center",
        time: "9.30AM",
        date: "4/3/23",
      },
    ],
  },
  robotics: {
    name: "Robotics Society",
    about: "Modern robotics technology",
    poc: [
      {
        name: "FA",
        contactNo: "abc@gmail.com",
        designation: "Faculty Advisor",
      },
      {
        name: "P1",
        contactNo: 1234757588,
        designation: "lead",
      },
      {
        name: "P2",
        contactNo: 1234757588,
        designation: "lead",
      },
    ],
    events: [
      {
        title: "Robo soccer",
        about: "About contest",
        venue: "Elearning Center",
        time: "9.30AM",
        date: "4/3/23",
      },
      {
        title: "Robo soccer1",
        about: "About contest",
        venue: "Elearning Center",
        time: "9.30AM",
        date: "4/3/23",
      },
      {
        title: "Robo soccer2",
        about: "About contest",
        venue: "Elearning Center",
        time: "9.30AM",
        date: "4/3/23",
      },
    ],
  },
  aerotech: {
    name: "Aerotech",
    about: "Modern robotics technology",
    poc: [
      {
        name: "FA",
        contactNo: "abc@gmail.com",
        designation: "Faculty Advisor",
      },
      {
        name: "P1",
        contactNo: 1234757588,
        designation: "lead",
      },
      {
        name: "P2",
        contactNo: 1234757588,
        designation: "lead",
      },
    ],
    events: [
      {
        title: "Robo soccer",
        about: "About contest",
        venue: "Elearning Center",
        time: "9.30AM",
        date: "4/3/23",
      },
      {
        title: "Drone show1",
        about: "About contest",
        venue: "Elearning Center",
        time: "9.30AM",
        date: "4/3/23",
      },
      {
        title: "Robo soccer2",
        about: "About contest",
        venue: "Elearning Center",
        time: "9.30AM",
        date: "4/3/23",
      },
    ],
  },
};

const useClubEvents = create((set, get) => ({
  club: {},
  getClubData: (club) => {
    // TODO: fetch events from backend
    set({
      club: data[club],
    });
  },
}));

export default useClubEvents;
