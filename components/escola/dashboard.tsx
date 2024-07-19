'use client';

import React, { useState, useEffect, useRef } from "react";
import Filters from "@/components/basecomponents/filters";
import { SearchResultCard } from "@/components/basecomponents/cards";
import Map from "../basecomponents/google_map";

let SearchResults = [
  {
    mark: "https://img.imageboss.me/me/cover:center/48x48/format:auto/20230111134036974.jpg",
    star: 1,
    title: "Santo Antonio College",
    at: "Joinville - SC",
    position: "Iririu",
    amount: "306.57",
    period: "Early Childhood Education - Nursery (0 to 1 year old)",
    schoolYear: [2024, 2025],
    shift: ["full", "morning"],
    originUnit: "R$",
    originPrice: 1000,
    presentUnit: "BRL",
    presentPrice: 500,
  },
];

const Dashboard = () => {
  const [switchMap, setSwitchMap] = useState<boolean>(false);
  const [searchParam, setSearchParam] = useState<any>(null);
  const [schools, setSchools] = useState<any>(null);
  const [timer, setTimer] = useState<boolean>(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_BACKEND_DEV + '/api/schools/all';

    const fetchSchools = async (searchParam: any) => {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(searchParam), // Include data if required (e.g., for POST requests)
      };

      try {
        const result = await fetch(url, requestOptions);
        if (!result.ok) {
          throw new Error(`HTTP error! Status: ${result.status}`);
        }
        const data = await result.json();        
        setSchools(data); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching schools:', error);
      }
    };

    // Clear the previous timeout if it exists
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set a new timeout
    timeoutRef.current = setTimeout(() => {
      fetchSchools(searchParam);
    }, 3000); // 5 seconds

    // Cleanup function to clear the timeout on component unmount or before setting a new timeout
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParam])

  return (
    <div className="flex flex-col bg-slate-100 py-0 space-y-6 items-center">
      <div className="flex border-b pb-2 gap-3 items-center xl:w-[80vw] lg:w-[90vw] max-w-screen-xl px-3 pt-3 w-full">
        <a href="/" className="text-purple-600 ">
          Home page
        </a>
        <span className="pt-2 text-gray-500 text-md">{`/`} Search</span>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between md:flex-row md:justify-between sm:flex-col gap-10 justify-between xl:w-[80vw] lg:w-[90vw] max-w-screen-xl px-3 w-full">
        <p>
          { } bags found in { }
        </p>
        <div className="flex flex-col sm:flex-row justify-around items-center gap-5 w-full sm:w-auto">
          <div className="flex items-center relative text-gray-700 text-sm w-full sm:w-auto">
            <select
              name="order"
              className="rounded-full px-8 py-2 border border-slate-300 focus:ring-2 ring-purple-600 focus:outline-purple-600 w-full sm:w-auto"
            >
              <option value={0}>Relevance</option>
              <option value={1}>Lowest Price</option>
              <option value={2}>Biggest Price</option>
              <option value={3}>Biggest Discount</option>
              <option value={4}>Best Rated</option>
            </select>
            <span className="absolute left-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 512 512"
                className="p-5"
              >
                <path
                  fill="currentColor"
                  d="M111 39c9.4-9.4 24.6-9.4 33.9 0l96 96c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55V456c0 13.3-10.7 24-24 24s-24-10.7-24-24V113.9L49 169c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l96-96zm201 9h48c13.3 0 24 10.7 24 24s-10.7 24-24 24H312c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 128H424c13.3 0 24 10.7 24 24s-10.7 24-24 24H312c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 128H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H312c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 128H552c13.3 0 24 10.7 24 24s-10.7 24-24 24H312c-13.3 0-24-10.7-24-24s10.7-24 24-24z"
                ></path>
              </svg>
            </span>
          </div>
          <div className="flex gap-5 md:items-center sm:justify-between cursor-pointer" onClick={() => setSwitchMap(!switchMap)}>
            <span className="rounded-full bg-orange-600 text-white px-2 py-2 flex items-center cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"
                ></path>
              </svg>
            </span>
            <span className="text-purple-600 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152V422.8c0 9.8-6 18.6-15.1 22.3L416 503V200.4zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6V451.8L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77V504.3L192 449.4V255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
                ></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
      {
        switchMap ?
          <Map /> :
          <div className="pt-0 flex flex-row gap-5 xl:w-[80vw] lg:w-[90vw] max-w-screen-xl px-3 pb-5">
            <div className="max-[1200px]:hidden">
              <Filters type="search" setSearchParam={setSearchParam} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 xl:w-[80vw] lg:w-[90vw] max-w-screen-xl px-3 pb-5">
              {schools?.map((result: any, index: number) => (
                <div
                  key={index}
                  className="bg-white max-w-sm p-4 border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700"
                >
                  <SearchResultCard
                    key={index}
                    mark={result.mark}
                    title={result.title}
                    star={result.star}
                    at={result.at}
                    period={result.period}
                    position={result.position}
                    schoolYear={result.years}
                    shift={result.shift}
                    level = {result.level}
                    originUnit={result.originUnit}
                    originPrice={result.originPrice}
                    presentUnit={result.presentUnit}
                    presentPrice={result.presentPrice}
                  />
                </div>
              ))}
            </div>
          </div>
      }
    </div>
  );
};

export default Dashboard;

