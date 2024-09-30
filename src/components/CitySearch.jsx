import React from "react";
import { useWeatherContext } from "../context/weatherContext";

export default function CitySearch() {
  const { onSubmitHandler, handleSubmit, isLoading, register } = useWeatherContext();

  return (
    <>
      <div className="mr-4">
        {isLoading && (
          <span className="flex justify-center text-center w-10 loading loading-spinner text-gray-200 "></span>
        )}
      </div>

      <form className="w-96" onSubmit={handleSubmit(onSubmitHandler)}>
        <label className="input input-bordered flex items-center justify-center gap-2 rounded-3xl p-2">
          <input
            type="text"
            className="text-gray-700 grow outline-none p-2 rounded-3xl placeholder-gray-500 bg-slate-700"
            {...register("city")}
            placeholder="Please Enter your City Name..."
          />
          <div className="bg-gray-700 rounded-full p-2 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-6 w-6 text-gray-200"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </label>
      </form>
    </>
  );
}
