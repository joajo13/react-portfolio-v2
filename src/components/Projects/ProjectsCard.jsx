import { IconBrandGithub } from "@tabler/icons-react";

export const ProjectCard = ({}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 my-6 gap-4 ">
      <div className={"container relative "}>
        <div className="group hover:scale-110 duration-500 relative overflow-hidden bg-cover rounded-xl shadow-pages bg-no-repeat bg-ChessCounterApp bg-center h-48 md:h-96">
          <div className="absolute h-full w-full hidden group-hover:block p-4 group-hover:backdrop-blur-sm group-hover:backdrop-brightness-50">
            <h5 className="pt-2 mb-2 font-bold text-white hidden group-hover:block">
              Reloj de Ajedrez
            </h5>
            <p className="text-white">Aplicacion de Reloj de Ajedrez</p>
            <a href="https://react-chess-joajo13.vercel.app/" target="_blank">
              <p className="relative bg-primary rounded-lg p-2 text-white hover:bg-white hover:text-primary duration-500 mt-2 w-fit">
                Open
              </p>
            </a>
            <a href="https://github.com/joajo13/react-chess" target="_blank">
              <IconBrandGithub
                color="#4299e1"
                size={36}
                className="absolute bottom-4 bg-white rounded-full p-1 hover:scale-110 duration-500 hover:bg-gray-200 cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="container relative md:col-span-2">
        <div className="group relative hover:scale-110 duration-500 overflow-hidden bg-cover rounded-xl shadow-pages bg-HeroesApp bg-no-repeat bg-center h-48">
          <div className="absolute h-full w-full group-hover:backdrop-blur-sm group-hover:backdrop-brightness-50 hidden group-hover:block p-4">
            <h5 className="pt-2 mb-2 font-bold text-white hidden group-hover:block">
              HeroesApp
            </h5>
            <p className="text-white">Aplicacion de heroes</p>
            <a href="https://heores-spa.vercel.app/" target="_blank">
              <p className="relative bg-primary rounded-lg p-2 text-white hover:bg-white hover:text-primary duration-500 mt-2 w-fit">
                Open
              </p>
            </a>
            <a href="https://github.com/joajo13/react-chess" target="_blank">
              <IconBrandGithub
                color="#4299e1"
                size={36}
                className="absolute bottom-4 bg-white rounded-full p-1 hover:scale-110 duration-500 hover:bg-gray-200 cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
