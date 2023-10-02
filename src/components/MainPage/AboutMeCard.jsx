import { BsLinkedin, BsGithub } from "react-icons/bs";

export const AboutMeCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center divide-x">
      <div className="flex-col justify-center">
        <div>
          <h1 className="text-6xl p-6 pb-0 font-Main font-semibold text-gray-700">
            Frontend
          </h1>
          <span className="text-6xl pl-7 font-light text-black font-Main">
            Developer
          </span>
        </div>

        <p className="p-6 pt-6 font-titles">
          I'm Juan, a frontend developer based in Argentina. I love creating web
          and tools using MERN.
        </p>
        <div className="pl-6 flex">
          <a
            href="https://www.linkedin.com/in/juan-giupponi-018a9323b/"
            target="_blank"
            rel="Linkedin profile"
            className="mr-6"
          >
            <BsLinkedin size={24} />
          </a>
          <a
            href="https://www.github.com/joajo13"
            target="_blank"
            rel="Linkedin profile"
            className="mr-6"
          >
            <BsGithub size={24} />
          </a>
        </div>
      </div>
      <div className="hidden md:block p-6">
        <img
          src="https://i.imgur.com/9LcmFac.jpeg"
          alt="Profile img"
          className="rounded-3xl"
        />
      </div>
    </div>
  );
};
