import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiSolidity,
  SiLua,
  SiCplusplus,
  SiRust,
  SiNodedotjs,
  SiDjango,
  SiNextdotjs,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiExpress,
  SiDiscord,
  SiSocketdotio,
  SiWeb3Dotjs,
  SiTrpc,
  SiServerless,
  SiGraphql,
  SiSass,
  SiTailwindcss,
  SiChakraui,
  SiAmazonaws
} from "react-icons/si";
import React from "react";

import { FaReact } from "react-icons/fa";

interface ITeh {
  icon: any;
  name: string;
  color: string;
}

interface IExperience {
  title: string;
  stack: ITeh[];
}

export const experience: IExperience[] = [
  {
    title: "Languages",
    stack: [
      {
        name: "TypeScript",
        icon: React.createElement(SiTypescript),
        color: "#2d79c7",
      },
      {
        name: "JavaScript",
        icon: React.createElement(SiJavascript),
        color: "#ebd64b",
      },
      {
        name: "Python",
        icon: React.createElement(SiPython),
        color: "#fed142",
      },
      {
        name: "Solidity",
        icon: React.createElement(SiSolidity),
        color: "#1d1d1d",
      },
      {
        name: "Lua",
        icon: React.createElement(SiLua),
        color: "#01007f",
      },
      {
        name: "C++/C (Middle-begginer)",
        icon: React.createElement(SiCplusplus),
        color: "#035a9a",
      },
      {
        name: "Rust (Begginer)",
        icon: React.createElement(SiRust),
        color: "#f74a00",
      },
    ],
  },
  {
    title: "Technologies",
    stack: [
      {
        name: "Node.JS",
        icon: React.createElement(SiNodedotjs),
        color: "#8bc03e",
      },
      {
        name: "React",
        icon: React.createElement(FaReact),
        color: "#00d3f8",
      },
      {
        name: "AWS",
        icon: React.createElement(SiAmazonaws),
        color: "#fe9900",
      },
      {
        name: "DJango",
        icon: React.createElement(SiDjango),
        color: "#0f3d2d",
      },
      {
        name: "NextJS",
        icon: React.createElement(SiNextdotjs),
        color: "",
      },
      {
        name: "mongoDB",
        icon: React.createElement(SiMongodb),
        color: "#7ec061",
      },
      {
        name: "MySQL",
        icon: React.createElement(SiMysql),
        color: "#006094",
      },
      {
        name: "PostgreSQL",
        icon: React.createElement(SiPostgresql),
        color: "#336691",
      },
      {
        name: "Express",
        icon: React.createElement(SiExpress),
        color: "",
      },
      {
        name: "DiscordJS",
        icon: React.createElement(SiDiscord),
        color: "#8697f6",
      },
      {
        name: "WebSockets",
        icon: React.createElement(SiSocketdotio),
        color: "",
      },
      {
        name: "Web3",
        icon: React.createElement(SiWeb3Dotjs),
        color: "",
      },
      {
        name: "gRPC",
        icon: React.createElement(SiTrpc),
        color: "#47bbb8",
      },
      {
        name: "REST API",
        icon: React.createElement(SiServerless),
        color: "",
      },
      {
        name: "GraphQL",
        icon: React.createElement(SiGraphql),
        color: "#dc31a4",
      },
      
      {
        name: "TailwindCSS",
        icon: React.createElement(SiTailwindcss),
        color: "#07b6d5",
      },
      {
        name: "SASS",
        icon: React.createElement(SiSass),
        color: "#bb6695",
      },
      {
        name: "ChakraUI",
        icon: React.createElement(SiChakraui),
        color: "#4ac9be",
      },
    ],
  },
];