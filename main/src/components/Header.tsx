import Audible from "./Audible";
import logo from "../assets/images/logo.svg";
import { usePageStore } from "../store/pageStore";
import { BsFillVolumeUpFill, BsFillVolumeMuteFill } from "react-icons/bs";

const headerLinks = [
  {
    id: "Home",
    name: "Home",
  },
  {
    id: "About",
    name: "About me",
  },
  {
    id: "Projects",
    name: "Projects",
  },
];

const Header = () => {
  const { section, volume, setup } = usePageStore();

  return (
    <header className="relative">
      <nav className="fixed w-full top-0 z-[999]">
        <div className="flex justify-between items-center bg-transparency-black backdrop-filter backdrop-blur-sm px-2 md:px-8 py-6">
          <div className="w-20 sm:w-32 md:w-auto md:pl-5">
            <img
              alt="JustDkill logo w-auto"
              width={220}
              height={150}
              src={logo}
            />
          </div>
          <ul className="flex items-center gap-x-4 md:gap-x-12 sm:gap-x-8 text-white text-xs sm:text-lg font-bold sm:font-bold md:text-2xl">
            {headerLinks.map((el) => (
              <Audible>
                <li
                  key={el.id}
                  onClick={() => setup({ section: el.id })}
                  className={`${
                    section === el.id && "primary-gradient"
                  } hover:cursor-pointer hover:text-[#ee4670e6] duration-100 ease-in-out`}
                >
                  {el.name}
                </li>
              </Audible>
            ))}
            <li>
              <Audible>
                <button
                  onClick={() => setup({ volume: !volume })}
                  className="flex p-2 hover:bg-primary-color hover:cursor-pointer duration-300 ease-in-out rounded-xl"
                >
                  {volume ? <BsFillVolumeUpFill /> : <BsFillVolumeMuteFill />}
                </button>
              </Audible>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
