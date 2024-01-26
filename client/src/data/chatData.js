const chat = [
  {
    name: "Mia",
    avatar: "bot-image.jpg",
    comments: [
      "Hello! \nWhat can I help you with today?",
      "Suggested topics: ",
    ],
    buttons: [
      { text: "End Chat", clicked: false },
      { text: "Family Vacations", clicked: true },
      { text: "Best Places to Visit", clicked: false },
      { text: "Our packages", clicked: false },
      { text: "Best Deals", clicked: false },
      { text: "Popular Destinations", clicked: false },
      { text: "Weekend Getaways", clicked: false },
      { text: "Europe Cruises", clicked: false },
      { text: "Caribbean Cruises", clicked: false },
      { text: "Alaska Cruises", clicked: false },
    ],
  },
  {
    name: "Mia",
    avatar: "",
    comments: ["Great! \nDo you have any questions for me?"],
    buttons: [],
  },
  {
    name: "You",
    avatar: "",
    comments: [
      "Hello, \nI want to book a cruise for my family and we were thinking of going around the 15th or the 31st of May on the West Caribbean cruise.",
    ],
    buttons: [],
  },
  {
    name: "Mia",
    avatar: "bot-image.jpg",
    comments: [
      "You chose an excellent time! \nLet me ask you some questions regarding the type of trip you want.",

      "How many adults and how many children will be going on the cruise?",
    ],
    buttons: [],
  },
  {
    name: "You",
    avatar: "",
    comments: [
      "It’s going to be my wife and I, and our two children 9m and 11m.",
    ],
    buttons: [],
  },
  {
    name: "Mia",
    avatar: "bot-image.jpg",
    comments: [
      "We have a lot of options for you. \n \nBefore I send offers your way is there anything you would like to ask me? Anything we can cover to make you feel comfortable and secure?",
      "Suggested topics:",
    ],
    buttons: [
      { text: "Child Safety", clicked: true },
      { text: "Cleanliness", clicked: true },
      { text: "Best Deals", clicked: false },
      { text: "Our Packages", clicked: false },
    ],
  },
  {
    name: "Mia",
    avatar: "",
    comments: [
      "Great, thank you. \n \n I am sending you 3 possible cruises that fit with the time frame you gave me: 15th to 31st May, I will attach the folders below. \n \nI will also add the Royal Caribbean child safety and cleanliness protocols for you to read, as well as what’s included in which package so you can make a more informed decision.",
      "Package 1: May 18th to May 23rd: Western Caribbean",
      "Package 2: May 23rd to May 27th: Western Caribbean",
      "Package 3: May 27th to May 31st: Western Caribbean",
    ],
    buttons: [],
  },
  {
    name: "You",
    avatar: "",
    comments: [
      "Thank you for all the information, this was very helpful.\n \nI would like to book the Western Caribbean cruise form the 18th to the 23rd of May. \n \nHere is the package we decided to go with at the end.",
      "Package 2: May 18th to May 23rd: Western Caribbean",
    ],
    buttons: [],
  },
  {
    name: "Mia",
    avatar: "bot-image.jpg",
    comments: [
      "That’s great to hear, \n \n If you have no further questions I will go ahead and fill in your information and send you a link to pay. \n \nPlease make sure all the information is correct.",
    ],
    buttons: [],
  },
  {
    name: "You",
    avatar: "",
    comments: ["Thank you. That would be all."],
    buttons: [],
  },
  {
    name: "Mia",
    avatar: "bot-image.jpg",
    comments: [
      "Here is the link: \n http://www.sample.org/cruisebookingpayment",
    ],
    buttons: [],
  },
];

export default chat;