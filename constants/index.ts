export const categoryOptions = [
  {
    value: "cosmos_persona",
    option: "Cosmos Persona",
  },
];

export const questions = [
  {
    question: "You're taking the bus on your way back home. It's been a loooong day, what are you thinking about?",
    image: "images/Q1.gif",
    answers: [
      {
        text: "I'm just so tired and can't wait to go home. Why does everyday feel the same...",
        scores: { T: 0, F: +1 },
      },
      {
        text: "Should I rest or work first when I get home? Most importantly, what's for dinner?",
        scores: { T: +1, F: 0 },
      },
    ],
  },
  {
    question: "You look outside the windows, seems like it's going to rain soon. Suddenly everything turns into darkness!!",
    image: "images/Q2.gif",
    answers: [
      {
        text: "I don't remember this tunnel. *Pull out your phone to look at the map*",
        scores: { P: 0, J: +1 },
      },
      {
        text: "*Turn around to see the other's reaction* Should I ask the driver what's going on?",
        scores: { P: +1, J: 0 },
      },
    ],
  },
  {
    question: "Before you can do anything, the bus stops and everything around you floats up!",
    image: "images/Q3.gif",
    answers: [
      {
        text: "Ok this is weird, am I dreaming? *pinch your arm*",
        scores: { S: +1, N: 0 },
      },
      {
        text: "Is this a prank? Am I getting kidnapped by aliens?!",
        scores: { S: 0, N: +1 },
      },
    ],
  },
  {
    question: "Amidst the surprise, your eyes catch something drifting past the window.",
    image: "images/Q4.gif",
    answers: [
      {
        text: "Woahhh...so many cats! How cute!! I wanna give them a hug!",
        scores: { T: 0, F: +1 },
      },
      {
        text: "Cats? In space? That's kinda odd... How do they survive out there?!",
        scores: { T: +1, F: 0 },
      },
    ],
  },
  {
    question: "'Welcome Aboard!' a small robot appears and announces, 'We will reach our destination in 5 months 6 days and 2 hours!'",
    image: "images/Q5.gif",
    answers: [
      {
        text: "Cool! A space cruise?! Where are we going? Do I get a spacesuit? This is so exciting!",
        scores: { P: +1, J: 0 },
      },
      {
        text: "Hey uh...Am I in space? How did I get here? When can I go home?! Why..",
        scores: { P: 0, J: +1 },
      },
    ],
  },
  {
    question: "The robot just points to the back of the bus which now looks more like inside of a spaceship! What do you want to see first?",
    image: "images/Q6.gif",
    answers: [
      {
        text: "Solar system themed fountain in the middle. I want to take pictures with it.",
        scores: { I: 0, E: +1 },
      },
      {
        text: "Cozy corner with a massaging chair. I need to sit down and process.",
        scores: { I: +1, E: 0 },
      },
    ],
  },
  {
    question: "On the way back to your seat, you are surrounded by cats! 'Unauthorized passenger detected, CAPTURE CAPTURE!'",
    image: "images/Q7.gif",
    answers: [
      {
        text: "Woah! What do you mean unauthorized? I'm the passenger of this cruise!",
        scores: { S: +1, N: 0 },
      },
      {
        text: "Ok, I have no idea what's going on. How about we calm down and chat for a bit?",
        scores: { S: 0, N: +1 },
      },
    ],
  },
  {
    question: "Suddenly, the robot glides in, it whispers something to the cats that makes them stop.",
    image: "images/Q8.gif",
    answers: [
      {
        text: "Bob!! Thank you! You come to save me, right?",
        scores: { E: +1, I: 0 },
      },
      {
        text: "HA! That's right! Back off, cats! Am I safe to go now?!",
        scores: { E: 0, I: +1 },
      },
    ],
  },
  {
    question: "The robot transforms into a giant vacuum cleaner, the cats use it to point at you!",
    image: "images/Q9.gif",
    answers: [
      {
        text: "Throw your coat at them as distraction, run towards the big green 'EXIT' sign!",
        scores: { J: +1, P: 0 },
      },
      {
        text: "Run in random direction, confuse them, blend in with the crowd!",
        scores: { J: 0, P: +1 },
      },
    ],
  },
  {
    question: "You run past the gift shop. Looks like you got rid of them. It wouldn't hurt to get some souvenirs, right?",
    image: "images/Q10.gif",
    answers: [
      {
        text: "Get the Jupiter headphone, wear it to hear people's thoughts!",
        scores: { F: +1, T: 0 },
      },
      {
        text: "Get the Mars watch, turn it and you can time travel!",
        scores: { F: 0, T: +1 },
      },
    ],
  },
  {
    question: "The giant vacuum cleaner suddenly emerges in front of you! You're sucked into its vortex!!!",
    image: "images/Q11.gif",
    answers: [
      {
        text: "It's ok, this is just a dream! I'll wake up soon! *close your eyes and give up*",
        scores: { S: +1, N: 0 },
      },
      {
        text: "I'll find the way out! Maybe there are some secret doors! *look around for the way out*",
        scores: { S: 0, N: +1 },
      },
    ],
  },
  {
    question: "After a moment of darkness, you find yourself back in the bus. 'Are you alright?' the ticket inspector asks",
    image: "images/Q12.gif",
    answers: [
      {
        text: "Woah! I thought I was captured... Nevermind! I'm alright now, I guess? *panic in silence*",
        scores: { E: 0, I: +1 },
      },
      {
        text: "You won't believe it...I think I just had the wildest dream ever! *tell him about your space adventure*",
        scores: { E: +1, I: 0 },
      },
    ],
  },
];


export const alphabeticNumeral = (index: number) => {
  const asciiCode = index + 65;
  const letter = String.fromCharCode(asciiCode);
  return letter + ". ";
};

export const showCategory = (category: string) => {
  if (category === "general_knowledge") return "General Knowledge";
  else if (category === "science") return "Science";
  else if (category === "sport_and_leisure") return "Sports & Leisure";
  else if (category === "music") return "Music";
  else if (category === "history") return "History";
  else if (category === "geography") return "Geography";
  else if (category === "society_and_culture") return "Society & Culture";
  else if (category === "arts_and_literature") return "Arts & Literture";
  else if (category === "film_and_tv") return "Film & TV";
  else if (category === "food_and_drink") return "Food & Drink";
};
