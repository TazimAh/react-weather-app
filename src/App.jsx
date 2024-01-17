import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <div className=" bg-slate-900 p-6 h-screen flex justify-center">
        <SideBar />
        <div className=" w-11/12 m-2 bg-blue-300 rounded-xl p-3 ">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
