import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useStore } from "../store/store";

const apiKey = "fbcb644ec2108ca4cfa088d96409c7c8";

export const useWeather = (city) => { //props city
  const setWeatherData = useStore((state) => state.setWeatherData)


  const fetchWeather = async () => {
    if (!city) return [];
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(url);
    if (!response.ok) {
      toast.error("City not found. Please enter a correct city name.");
    } else {
      toast.success(`Successfully fetched weather information for ${city}!`);
    }
    const data = await response.json();
    setWeatherData(data)
    return data;
  };

  //*old version⚠️
  // return useQuery(['weather', city], fetchWeather);
  //*new version ✅
  return useQuery({
    queryKey: ['weather', city],
    queryFn: fetchWeather,
    enabled: !!city,
  });
};