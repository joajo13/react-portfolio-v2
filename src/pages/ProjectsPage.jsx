import { ProjectCard } from "../components/Projects/ProjectsCard";
import { MessageCard } from "../components/Projects/MessageCard";
import { motion } from "framer-motion";

export const ProjectsPage = () => {
  return (
    <motion.div
      className="container mx-auto shadow-pages rounded-t-pages p-5 bg-white min-h-screen"
      initial={{ y: 200 }}
      animate={{ y: 0 }}
      exit={{ y: 200 }}
    >
      <div className="container mx-auto w-full lg:w-8/12">
        <div className="justify-start flex">
          <h1 className="text-6xl p-6 mt-10 col-span-full font-titles pl-0">
            Projects
          </h1>
          <hr />
        </div>
        <section>
          <MessageCard />
        </section>

        <section>
          <div className="bg-gradient-to-r from-green-100 to-blue-200 rounded-3xl shadow-xl p-6 mt-16">
            <ProjectCard />
          </div>
        </section>
      </div>
    </motion.div>
  );
};
