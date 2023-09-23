export const ProjectCard = ({
  projectName,
  projectDescription,
  Heroes,
  Chess,
  ComingSoon,
}) => {
  const tall = Heroes ? "row-span-1 row-start-1 col-start-1 col-span-2" : null;
  const big = Chess ? "row-span-2 row-start-1 col-start-3 col-span-1" : null;
  const comingSoon = ComingSoon
    ? "row-span-1 row-start-2 col-start-1 col-span-4"
    : null;
  const h = Heroes ? "250px" : Chess ? "500px" : "200";

  return (
    <div
      className={`container relative p-4 ${tall ? tall : ""} ${big ? big : ""}${
        comingSoon ? comingSoon : ""
      }`}
    >
      <div
        className="group relative overflow-hidden bg-cover rounded-xl shadow-pages bg-no-repeat bg-center aspect-auto"
        style={{
          backgroundImage: `url('/public/assets/Projects/${projectName}.jpg')`,
          height: h,
        }}
      >
        <div className="absolute h-full w-full group-hover:backdrop-blur-sm group-hover:backdrop-brightness-50">
          <div className="hidden group-hover:block p-6">
            <h5 className="pt-2 mb-6 font-bold text-white hidden group-hover:block">
              {projectName}
            </h5>
            <p className="text-white">{projectDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
