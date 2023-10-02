import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <>
      <div className="bg-gray-100">
        <Navbar />
        <AnimatePresence mode="wait">
          <Outlet location={location} key={location.pathname} />
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
