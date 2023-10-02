import { AboutMeCard } from "../components/MainPage/AboutMeCard";
import { ContactMe } from "../components/MainPage/ContactMe";
import { motion } from "framer-motion";

export const MainPage = () => {
  return (
    <motion.div
      className="container mx-auto shadow-pages rounded-t-pages p-5 bg-white min-h-screen"
      initial={{ y: 200 }}
      animate={{ y: 0 }}
      exit={{ y: 200 }}
    >
      <div className="container mx-auto h-5/6">
        <section>
          <AboutMeCard />
        </section>
        <section className="flex justify-center">
          <ContactMe />
        </section>
      </div>
    </motion.div>
  );
};
