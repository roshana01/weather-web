import { ToastContainer } from "react-toastify";
import WeatherDisplay from "./components/WeatherDisplay";
import { WeatherProvider } from "./context/weatherContext.jsx";

export default function App() {
  return (
    <>
      <WeatherProvider>
        <ToastContainer />
        <div className="w-full h-screen grid grid-cols-1 grid-rows-[1fr] place-items-center back-image">
          <WeatherDisplay />
        </div>
      </WeatherProvider>
    </>
  );
}
