import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="bg-gray-100">
        <Navbar />
        <div className="container mx-auto shadow-pages rounded-t-pages p-5 bg-white min-h-screen">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
