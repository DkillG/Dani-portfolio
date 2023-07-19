import { workPictures } from "./workPictures";

export type TWorkCardSide = "right" | "left";

export interface IOldWorksProps {
  position: string;
  organization: string;
  description: string;
  url: string;
  image: string;
  time: string;
  side: TWorkCardSide;
}

export const OldWorks: IOldWorksProps[] = [
  {
    url: "https://mymetaverse.io/",
    position: "Full-Stack JR",
    organization: "MyMetaverse",
    image: workPictures.myMetaverse.src,
    side: "right",
    time: "09-2022 - 07-2023",
    description: `I worked at MyMetaverse as a Full-Stack developer, 
    starting as a Junior. I handled various back-end tasks like 
    managing MongoDB, using BloomRPC and RabbitMQ for services, 
    and following Domain-Driven Design (DDD) principles. We utilized 
    TypeScript and design patterns. For data serialization, we used 
    Protocol Buffers. On the front-end, I developed diverse pages 
    using Next.JS and TypeScript.`,
  },
  {
    url: "#",
    position: "Front-End JR",
    organization: "Darling Waifu",
    image: workPictures.darlingWaifu.src,
    side: "left",
    time: "01-2022 - 07-2022",
    description: `I started my career at DarlingWaifu as a Front-End JR, 
    gaining valuable experience in React and JavaScript. 
    The role also provided me with an exciting entry into the blockchain 
    domain, where I mastered Web3 interaction, token handling, 
    and smart contracts. Additionally, I honed my design skills using 
    Figma and became well-versed in optimization techniques and SEO practices.`,
  },
  {
    url: "#",
    position: "Leader Back-End",
    organization: "Goomy Wallet",
    image: workPictures.goomyWallet.src,
    side: "right",
    time: "",
    description: `During my time at DarlingWaifu, I contributed to the 
    Goomy Wallet project. I focused on creating and managing cryptographic 
    accounts and developing the provider-engine for seamless RPC connections 
    to blockchain nodes. This hands-on experience gave me valuable insights 
    into the blockchain industry, enhancing my skills in TypeScript, web3, ethers.js, 
    as well as design patterns and Solidity.`,
  },
  {
    url: "#",
    position: "Full-Stack",
    organization: "Libra Token",
    image: workPictures.cryptoStake.src,
    side: "left",
    time: "",
    description: `I developed a staking website using TypeScript, React,
    TailwindCSS and Web3. Additionally, I created the smart
    contract in Solidity for this website.`,
  },
  {
    url: "https://www.roblox.com/games/9240108258/Chainsaw-Man-Devil-Hunters",
    position: "Lua Scripter/Builder",
    organization: "Chainsaw Man",
    image: workPictures.chainsawMan.src,
    side: "right",
    time: "",
    description: `I created an exciting Chainsaw Man game using Lua language in
    the Roblox platform. The game is still in Alpha version, but have many enemies and missions`,
  },
  {
    url: "https://rbxwow.com/",
    position: "Back-End Ssr",
    organization: "RbxWow",
    image: workPictures.rbxWow.src,
    side: "left",
    time: "",
    description: `I developed RbxWow, a platform where users can
    complete offers to earn Robux. Utilizing TypeScript, React, and
    SCSS, I crafted a user-friendly interface. Behind the scenes, I
    also use MongoDB for the database, and a RESTful API.
    Leveraging various Roblox APIs, users can seamlessly connect
    their accounts and earn Robux by completing offers`,
  },
];
