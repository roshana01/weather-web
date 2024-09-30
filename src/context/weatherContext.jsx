import { createContext, useCallback, useContext, useState } from "react";

import { useStore } from "../store/store";
import { useForm } from "react-hook-form";
import { debounce } from "lodash";
import { useWeather } from "../hooks/api";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const { city, setCity } = useStore();
  const [debounceCity, setDebounceCity] = useState("");
  const { data, isLoading } = useWeather(debounceCity);
  const cityName = data ? data.name : null;
  const temperature =
    data && data.main ? (data.main.temp - 273.15).toFixed(0) : null;
  const windSpeed = data && data.wind ? data.wind.speed : null;
  const humidity = data && data.main ? data.main.humidity : null;

  const { register, handleSubmit, reset } = useForm();

  const debouncedSearch = useCallback(
    debounce((value) => {
      setDebounceCity(value);
    }, 1000),
    []
  );
  const onSubmitHandler = (data) => {
    setDebounceCity(data.city);
    reset();
  };
  const handleCityChange = (e) => {
    setCity(e.target.value);
    debouncedSearch(e.target.value);
  };
console.log(cityName);

  return (
    <WeatherContext.Provider
      value={{
        temperature,
        handleSubmit,
        onSubmitHandler,
        register,
        isLoading,
        city,
        data,
        handleCityChange,
        windSpeed,
        humidity,
        cityName,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeatherContext = () => useContext(WeatherContext);
