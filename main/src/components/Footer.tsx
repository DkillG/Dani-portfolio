import { ImMail4 } from "react-icons/im";
import ellipse_b from "../assets/images/ellipse_b.svg";
import { BsTelegram, BsDiscord } from "react-icons/bs";
import gradientLine from "../assets/images/footerLine.svg";
import { usePageStore } from "../store/pageStore";

const footerLinks = [
  {
    name: "@ZaksMann",
    link: "https://t.me/ZaksMann",
    icon: <BsTelegram />,
  },
  {
    name: "luisdanielxd07@gmail.com",
    link: "mailto:luisdanielxd07@gmail.com",
    icon: <ImMail4 />,
  },
  {
    name: "DkillGames#4592",
    icon: <BsDiscord />,
  },
];

const Footer = () => {
  const { setup } = usePageStore();

  return (
    <footer className="relative">
      <div className="flex flex-col gap-y-8 justify-center items-center text-white mt-72 py-4">
        <div>
          <ul className="flex gap-x-8">
            {footerLinks.map((el) => (
              <li
                key={el.name}
                onClick={() => {
                  if (el.link) return;

                  navigator.clipboard
                    .writeText(el.name)
                    .then(() => setup({ toast: "Discord nickname copied" }))
                    .catch((error) => {
                      setup({ toast: `Error copy nickname: ${error}` });
                    });
                }}
                className="text-2xl md:text-5xl hover:text-primary-color hover:cursor-pointer hover:scale-110 ease-in-out duration-300"
              >
                {el.link ? (
                  <a href={el.link} target="_blank">
                    {el.icon}
                  </a>
                ) : (
                  el.icon
                )}
              </li>
            ))}
          </ul>
        </div>
        <img alt="Gradient line" src={gradientLine} />
        <div className="flex flex-col justify-center text-center">
          <h3 className="font-semibold text-sm md:text-lg">
            This page was created using React, TypeScript, and Tailwind
          </h3>
          <p className="text-xs md:text-lg">Daniel &#169;2023 all copyright</p>
        </div>
      </div>
      <img className="absolute image-op bottom-0 z-[-1]" src={ellipse_b} />
    </footer>
  );
};

export default Footer;
