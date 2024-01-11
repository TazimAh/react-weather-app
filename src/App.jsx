import "./App.css";
import SideBar from "./components/SideBar";
import Weather from "./components/Weather";

function App() {
  return (
    <>
      <div className=" bg-slate-900 p-6 h-screen flex justify-center">
        <div className=" sm:w-3/12 md:w-2/12 xl:w-1/12 m-2 bg-slate-600 rounded-xl p-3 text-gray-300 text-center ">
          <SideBar />
        </div>
        <div className=" w-11/12 m-2 bg-blue-300 rounded-xl p-3 ">
          <Weather />
        </div>
      </div>
    </>
  );
}

export default App;
