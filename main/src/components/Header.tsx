import logo from "../assets/images/logo.svg";
import { usePageStore } from "../store/pageStore";

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
  const { section, setup } = usePageStore();

  const scollTo = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      setup({ section: id });
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="relative">
      <nav className="fixed w-full top-0 z-[999]">
        <div className="flex justify-between items-center bg-transparency-black backdrop-filter backdrop-blur-sm px-2 md:px-8 py-6">
          <div className="w-28 sm:w-32 md:w-auto pl-5">
            <img alt="JustDkill logo" src={logo} />
          </div>
          <ul className="flex gap-x-4 md:gap-x-12 sm:gap-x-8 text-white text-xs sm:text-lg font-bold sm:font-bold md:text-2xl">
            {headerLinks.map((el) => (
              <li
                key={el.id}
                onClick={() => scollTo(el.id)}
                className={`${
                  section === el.id && "primary-gradient"
                } hover:cursor-pointer hover:text-[#e5a3b5]`}
              >
                {el.name}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
