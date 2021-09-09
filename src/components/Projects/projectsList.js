import dashboard from "../../assets/dashboard.png";
import miniGames from "../../assets/MiniGames.png";
import flags from "../../assets/flag.png";
import nba from "../../assets/nba.png";
import landscape from "../../assets/landscape.png";

export const projectsList = [
  {
    id: 1,
    title: "React Dashboard",
    description:
      "Create your own profile or login by default data and get access to few functionality tools, such as: \n ✔️ to-do-list - you can set your goals, check, edit or delete,\n ☁️ weather forecast - find weather for intersts cities,\n 🗺️ news and sports results - check most popular daily articles or result in prime football leagues or basketball + watch highlights,\n 📺 description of movies, serials and acting professions - search data of interesting film or cast,\n 🔢 financial and healthy calculator - calculate and save result in financial calculator or check that your healhy is in good condition\n Note: Mobile version is in progress.",
    img: dashboard,
    git: "https://github.com/dulko-dev/react_dashboard",
    live: "https://dulko-dashboard.netlify.app/",
    tech: ["React.js", "Firebase", "Sass", "API"],
  },
  {
    id: 2,
    title: "React MiniGames",
    description:
      "You can play in 3 browser games create in React, such as:\n ➡️ rock - paper - scissors - lizard - spock,\n ➡️ memory game,\n ➡️ quiz\n Note: This is full responsivity version",
    img: miniGames,
    git: "https://github.com/dulko-dev/react_miniGames",
    live: "https://dulko-react-minigames.netlify.app/",
    tech: ["React.js", "Sass", "LocalStorage"],
  },
  {
    id: 3,
    title: "React Flags",
    description:
      "You are looking at simple page where user can find information about country. We can find it by searching input or selecting options to find region you are interested in.\n App has dark and light mode.\n Note: This is full responsivity version",
    img: flags,
    git: "https://github.com/dulko-dev/react_rest_flag",
    live: "https://dulko-countries.netlify.app/",
    tech: ["React.js", "Sass", "LocalStorage"],
  },
  {
    id: 4,
    title: "Next NBA",
    description:
      "This is the NBA page, where you can find information, such as:\n 🏀 short history about teams,\n 🏀 research players and played games.\n 🏀 you can contact with me by email\n Note: This is the desktop version",
    img: nba,
    git: "https://github.com/dulko-dev/nba_next_api",
    live: "https://dulko-nba-next.vercel.app/",
    tech: ["Next.js", "FontAwesome", "API"],
  },
  {
    id: 5,
    title: "Landing Page",
    description:
      "Simple landing page where I focused on styles and animations\n Note: Mobile version is in progress.",
    img: landscape,
    git: "https://github.com/dulko-dev/landing_page",
    live: "https://dulko-landing-page.netlify.app/",
    tech: ["React.js", "styled-component", "API"],
  },
];
