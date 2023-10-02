import { ActivateLink } from "./ActivateLink";

export const Navbar = () => {
  return (
    <header>
      <nav className="bg-gray-100">
        <div className="container flex justify-between items-center mx-auto">
          <div className="shrink-0">
            <ActivateLink to="/main">
              <img
                className="m-3 h-20 w-20 rounded-2xl shadow-pages"
                src="https://i.imgur.com/9LcmFac.jpeg"
                alt="Profile"
              />
            </ActivateLink>
          </div>
          <div className="space-x-4 text-lg font-medium px-3">
            <ActivateLink
              to="/main"
              className={(isActive) => (isActive ? "text-green-800" : "")}
            >
              Main
            </ActivateLink>
            <ActivateLink to="/"></ActivateLink>
            <ActivateLink to="/projects">Projects</ActivateLink>
          </div>
        </div>
      </nav>
    </header>
  );
};
