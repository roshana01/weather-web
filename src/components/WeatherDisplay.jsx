import React from "react";
import CitySearch from "./CitySearch";
import { useWeatherContext } from "../context/weatherContext";

import sunIcon from "../assets/img/Sun.svg";
import cloudyIcon from "../assets/img/cloudy.svg";
import rainIcon from "../assets/img/CloudRain.svg";
import fogIcon from "../assets/img/fog.svg";
import defaultIcon from "../assets/img/weather-1.png";

export default function WeatherDisplay() {
  const { temperature, windSpeed, humidity, data, cityName } = useWeatherContext();
  const weatherCondition = data?.weather?.length ? data.weather[0].main : null;
  let iconWeather;
  const today = new Date();
  const options = { weekday: "long" };
  const dayOfWeekEnglish = today.toLocaleDateString("en-US", options);

  switch (weatherCondition) {
    case "Clear":
      iconWeather = sunIcon;
      break;
    case "Clouds":
      iconWeather = cloudyIcon;
      break;
    case "Rain":
    case "Drizzle":
    case "Thunderstorm":
      iconWeather = rainIcon;
      break;
    case "Fog":
    case "Mist":
    case "Haze":
      iconWeather = fogIcon;
      break;
    default:
      iconWeather = defaultIcon;
  }


  return (
    <div className="backdrop-blur-sm bg-black/55 w-2/5 h-[500px] rounded-3xl pt-8">
      <div className="flex justify-center items-center">
        <CitySearch />
      </div>
      <div className="text-white m-20">
        <div>
          {cityName ? (
            <h1 className="text-3xl">Weather in {cityName}</h1>
          ) : (
            <h1 className="text-2xl flex items-center">
              <img
                src="./src/assets/img/lens.png"
                className="w-10 mr-2"
                alt="Search Icon"
              />
              Please enter a city name
            </h1>
          )}
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-[60px] font-semibold">
              {temperature !== null ? (
                `${temperature} °C`
              ) : (
                <span className="text-[40px]">Loading...</span>
              )}
            </p>
            <p>{dayOfWeekEnglish}</p>
            <p>
              {humidity !== null ? (
                <>
                  Humidity: <span>{humidity}%</span>
                </>
              ) : (
                <>
                  Humidity: <span>🌡️</span>
                </>
              )}
            </p>
            <p>
              {windSpeed !== null ? (
                <>
                  Wind Speed: <span>{windSpeed}</span> Km/hr
                </>
              ) : (
                <>
                  Wind Speed: <span>💨</span>
                </>
              )}
            </p>
          </div>
          <div className="w-[50%] mb-10">
            <img src={iconWeather} alt="Weather icon" className="w-[250px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
