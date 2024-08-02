/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useState, useEffect } from "react";
import CustomSelect from "./selectComponent";
import { isEmpty } from "@/utils/is-empty";

const checkedData = [
  ["2022", "2023", "2024", "2025"],
  ["Manhã", "Tarde", "Noite"],
  ["Super School"],
];

interface SearchButtonProps {
  disp: number;
  className?: string;
  checkedLabel?: string;
  filters?: any;
  setFilters?: any;
};

const SearchCity: React.FC<SearchButtonProps> = ({ disp, className, filters, setFilters }) => {
  const [city, setCity] = useState<string>();
  const [cities, setCities] = useState<any[]>([]);

  const setSelectedCity = (city: any) => {
    city && city._id && setCity(city._id);
  }

  const renderItem = (item: any) => {
    return item.city;
  }

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_DEV}/api/cities`);
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        setCities(data);
      } catch (err) {
        console.error('Error: Level loading error!!!');
      }
    }

    fetchCities();
  }, [])

  useEffect(() => {
    setFilters && setFilters({ ...filters, city: city });
  }, [city]);


  return (
    <div className={`${className}`}>
      {disp === 0 ? (
        <>
          <div className="flex gap-1 items-center">
            <span>
              <svg
                className="w-5 h-5 text-slate-600 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                />
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"
                />
              </svg>
            </span>
            <CustomSelect
              items={cities}
              setItem={setSelectedCity}
              renderItem={renderItem}
            />
          </div>
        </>
      ) : (
        <>
          {
            disp === 1 && (
              <label htmlFor="" className="font-semibold text-lg">
                City:
              </label>
            )
          }
          <div className="flex items-center relative rounded-full border">
            <CustomSelect
              items={cities}
              setItem={setSelectedCity}
              renderItem={renderItem}
              className="px-2"
            />
            {
              disp === 1 && (

                <span className="absolute left-2">
                  <svg
                    className="w-5 h-5 text-slate-600 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    />
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"
                    />
                  </svg>
                </span>
              )
            }
          </div>
        </>
      )}

    </div>
  );
};

const Neighborhood: React.FC<SearchButtonProps> = ({ disp, className, filters, setFilters }) => {
  const [neigh, setNeigh] = useState<string>();
  const [neighs, setNeighs] = useState<any[]>();

  const setSelectedNeigh = (neigh: any) => {
    neigh && neigh._id && setNeigh(neigh._id);
  }

  const renderItem = (item: any) => {
    return item.neigh;
  }

  useEffect(() => {
    const fetchNeighs = async () => {
      const url = filters && filters.city && !isEmpty(filters.city) ?
        `${process.env.NEXT_PUBLIC_BACKEND_DEV}/api/neighs?cityId=${filters.city}`
        : `${process.env.NEXT_PUBLIC_BACKEND_DEV}/api/neighs`

      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        setNeighs(data);
      } catch (err) {
        console.error('Error: Neigh loading error!!!');
      }
    }
    fetchNeighs();
  }, [filters && filters.city && filters.city])

  useEffect(() => {
    setFilters && setFilters({ ...filters, neigh: neigh });
  }, [neigh]);

  return (
    <div className={`${className} relative`}>
      {disp === 0 ? (
        <>
          <div className="flex gap-1 items-center px-2">
            <span>
              <svg
                className="w-6 h-6 text-slate-500 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.891 15.107 15.11 8.89m-5.183-.52h.01m3.089 7.254h.01M14.08 3.902a2.849 2.849 0 0 0 2.176.902 2.845 2.845 0 0 1 2.94 2.94 2.849 2.849 0 0 0 .901 2.176 2.847 2.847 0 0 1 0 4.16 2.848 2.848 0 0 0-.901 2.175 2.843 2.843 0 0 1-2.94 2.94 2.848 2.848 0 0 0-2.176.902 2.847 2.847 0 0 1-4.16 0 2.85 2.85 0 0 0-2.176-.902 2.845 2.845 0 0 1-2.94-2.94 2.848 2.848 0 0 0-.901-2.176 2.848 2.848 0 0 1 0-4.16 2.849 2.849 0 0 0 .901-2.176 2.845 2.845 0 0 1 2.941-2.94 2.849 2.849 0 0 0 2.176-.901 2.847 2.847 0 0 1 4.159 0Z"
                />
              </svg>
            </span>
            <CustomSelect
              items={neighs}
              setItem={setSelectedNeigh}
              renderItem={renderItem}
            />
          </div>
        </>
      ) : (
        <>
          <label htmlFor="" className="font-semibold text-sm">
            Bairro:
          </label>
          <div className="pt-1 flex items-center relative rounded-full">
            <CustomSelect
              className="px-10"
              items={neighs}
              setItem={setSelectedNeigh}
              renderItem={renderItem}
            />
            <span className="absolute left-2">
              <svg
                className="w-6 h-6 text-slate-500 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.891 15.107 15.11 8.89m-5.183-.52h.01m3.089 7.254h.01M14.08 3.902a2.849 2.849 0 0 0 2.176.902 2.845 2.845 0 0 1 2.94 2.94 2.849 2.849 0 0 0 .901 2.176 2.847 2.847 0 0 1 0 4.16 2.848 2.848 0 0 0-.901 2.175 2.843 2.843 0 0 1-2.94 2.94 2.848 2.848 0 0 0-2.176.902 2.847 2.847 0 0 1-4.16 0 2.85 2.85 0 0 0-2.176-.902 2.845 2.845 0 0 1-2.94-2.94 2.848 2.848 0 0 0-.901-2.176 2.848 2.848 0 0 1 0-4.16 2.849 2.849 0 0 0 .901-2.176 2.845 2.845 0 0 1 2.941-2.94 2.849 2.849 0 0 0 2.176-.901 2.847 2.847 0 0 1 4.159 0Z"
                />
              </svg>
            </span>
          </div>
        </>
      )}
    </div>
  );
};

const SearchSchool: React.FC<SearchButtonProps> = ({
  disp,
  className,
  filters,
  setFilters,
}) => {
  const [schools, setSchools] = useState<any[]>([]);
  const [school, setSchool] = useState<string>("");

  const setSelectedSchool = (school: any) => {
    school && school._id && setSchool(school._id);
  }

  const renderItem = (item: any) => {
    return item.title;
  }

  useEffect(() => {
    const fetchSchools = async () => {
      let body;
      if (filters && filters.neigh) {
        body = JSON.stringify({ neigh: filters.neigh });
      }
      if (filters && filters.city) {
        body = JSON.stringify({ city: filters.city });
      }
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_DEV}/api/schools`, {
          method: 'get',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        });
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        setSchools(data);
      } catch (err) {
        console.error('Error: School loading error!!!');
      }
    };
    fetchSchools();
  }, [filters && filters.neigh, filters && filters.city]);

  useEffect(() => {
    setFilters && setFilters({ ...filters, school: school });
  }, [school]);

  return (
    <div className={`${className} relative`} >
      {disp === 0 ? (
        <>
          <div className="flex gap-1 items-center">
            <span>
              <svg
                className="w-6 h-6 text-slate-500 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.891 15.107 15.11 8.89m-5.183-.52h.01m3.089 7.254h.01M14.08 3.902a2.849 2.849 0 0 0 2.176.902 2.845 2.845 0 0 1 2.94 2.94 2.849 2.849 0 0 0 .901 2.176 2.847 2.847 0 0 1 0 4.16 2.848 2.848 0 0 0-.901 2.175 2.843 2.843 0 0 1-2.94 2.94 2.848 2.848 0 0 0-2.176.902 2.847 2.847 0 0 1-4.16 0 2.85 2.85 0 0 0-2.176-.902 2.845 2.845 0 0 1-2.94-2.94 2.848 2.848 0 0 0-.901-2.176 2.848 2.848 0 0 1 0-4.16 2.849 2.849 0 0 0 .901-2.176 2.845 2.845 0 0 1 2.941-2.94 2.849 2.849 0 0 0 2.176-.901 2.847 2.847 0 0 1 4.159 0Z"
                />
              </svg>
            </span>
            <CustomSelect
              items={schools}
              setItem={setSelectedSchool}
              renderItem={renderItem}
            />
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col">
            <label htmlFor="" className="font-semibold text-sm">
              School:
            </label>
            <div className="flex pt-1.5 items-center relative rounded-full">
              <CustomSelect
                className="px-10"
                items={schools}
                setItem={setSelectedSchool}
                renderItem={renderItem}
              />
              <span className="absolute left-2">
                <svg
                  className="w-6 h-6 text-slate-500 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.891 15.107 15.11 8.89m-5.183-.52h.01m3.089 7.254h.01M14.08 3.902a2.849 2.849 0 0 0 2.176.902 2.845 2.845 0 0 1 2.94 2.94 2.849 2.849 0 0 0 .901 2.176 2.847 2.847 0 0 1 0 4.16 2.848 2.848 0 0 0-.901 2.175 2.843 2.843 0 0 1-2.94 2.94 2.848 2.848 0 0 0-2.176.902 2.847 2.847 0 0 1-4.16 0 2.85 2.85 0 0 0-2.176-.902 2.845 2.845 0 0 1-2.94-2.94 2.848 2.848 0 0 0-.901-2.176 2.848 2.848 0 0 1 0-4.16 2.849 2.849 0 0 0 .901-2.176 2.845 2.845 0 0 1 2.941-2.94 2.849 2.849 0 0 0 2.176-.901 2.847 2.847 0 0 1 4.159 0Z"
                  />
                </svg>
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const SearchSeries: React.FC<SearchButtonProps> = ({
  disp,
  className,
  filters,
  setFilters,
}) => {
  const [sereiesList, setSeriesList] = useState<any>();
  const [series, setSeries] = useState<string | any>('');

  const setSelectedSeries = (series: any) => {
    series && series._id && setSeries(series._id);
  }

  const renderItem = (item: any) => {
    return item.series;
  }

  useEffect(() => {
    const fetchSeries = async () => {      
      const level = filters && filters.level;
      const school = filters && filters.school;
      const url = school ? `${process.env.NEXT_PUBLIC_BACKEND_DEV}/api/series?schoolId=${school}`: level ? `${process.env.NEXT_PUBLIC_BACKEND_DEV}/api/series?levelId=${level}` : `${process.env.NEXT_PUBLIC_BACKEND_DEV}/api/series`;
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error('Network response was not ok');
        } const data = await res.json();
        setSeriesList(data);
      } catch (err) {
        console.error('Error: Level loading error!!!');
      }
    };
    fetchSeries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters && filters.level, filters && filters.school]);

  useEffect(() => {
    setFilters && setFilters({ ...filters, series: series });
  }, [filters && filters.series]);

  return (
    <div className={`${className} relative`} >
      {disp === 0 ? (
        <>
          <div className="flex gap-1 items-center justify-center">
            <span>
              <svg
                className="w-6 h-6 text-slate-500 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h2m10 1a3 3 0 0 1-3 3m3-3a3 3 0 0 0-3-3m3 3h1m-4 3a3 3 0 0 1-3-3m3 3v1m-3-4a3 3 0 0 1 3-3m-3 3h-1m4-3v-1m-2.121 1.879-.707-.707m5.656 5.656-.707-.707m-4.242 0-.707.707m5.656-5.656-.707.707M12 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </span>
            <CustomSelect
              items={sereiesList}
              setItem={setSelectedSeries}
              renderItem={renderItem}
            />
            <span className="bg-orange-500 rounded-full p-[7px]">
              <svg
                className="w-5 h-5 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>
            </span>
          </div>
        </>
      ) : (
        <>
          {
            disp === 1 && (
              <label htmlFor="" className="font-semibold text-sm">
                Series:
              </label>
            )
          }
          <div className={`flex pt-1 items-center relative rounded-full`}>
            <CustomSelect
              className="px-10"
              items={sereiesList}
              setItem={setSelectedSeries}
              renderItem={renderItem}
            />
            {
              disp === 1 && (

                <span className="absolute left-2">
                  <svg
                    className="w-6 h-6 text-slate-500 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="square"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h2m10 1a3 3 0 0 1-3 3m3-3a3 3 0 0 0-3-3m3 3h1m-4 3a3 3 0 0 1-3-3m3 3v1m-3-4a3 3 0 0 1 3-3m-3 3h-1m4-3v-1m-2.121 1.879-.707-.707m5.656 5.656-.707-.707m-4.242 0-.707.707m5.656-5.656-.707.707M12 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                </span>
              )
            }
          </div>
        </>
      )}

    </div>
  );
};

const TeachingState: React.FC<SearchButtonProps> = ({
  className,
  filters,
  setFilters,
}) => {
  const [levels, setLevels] = useState<string[]>([]);
  const [level, setLevel] = useState<string | any>();
  const [showValue, setShowValue] = useState<boolean>(false);

  const setselectedLevel = (level: any) => {
    level && level._id && setLevel(level._id);
  }

  const renderItem = (item: any) => {
    return item.level;
  }

  useEffect(() => {
    const fetchLevels = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_DEV}/api/levels`);
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        setLevels(data);
      } catch (err) {
        console.error('Error: Level loading error!!!');
      }
    };
    fetchLevels();
  }, []);

  useEffect(() => {
    setFilters({ ...filters, level: level });
  }, [level])

  return (
    <div className={`${className} relative`}>
      <>
        <label htmlFor="" className="font-semibold text-sm">
          Etapa de ensino:
        </label>
        <div className={`flex pt-1 items-center relative rounded-full`}>
          <CustomSelect
            items={levels}
            setItem={setselectedLevel}
            renderItem={renderItem}
          />
          <span className="absolute left-2">
            <svg
              className="w-6 h-6 text-slate-500 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="square"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h2m10 1a3 3 0 0 1-3 3m3-3a3 3 0 0 0-3-3m3 3h1m-4 3a3 3 0 0 1-3-3m3 3v1m-3-4a3 3 0 0 1 3-3m-3 3h-1m4-3v-1m-2.121 1.879-.707-.707m5.656 5.656-.707-.707m-4.242 0-.707.707m5.656-5.656-.707.707M12 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </span>
        </div>
      </>
    </div>
  )
};

const SearchRadius: React.FC<SearchButtonProps> = ({
  disp,
  className,
  filters,
  setFilters,
}) => {
  const [radiusValue, setRadiusValue] = useState<number | any>();

  const handleFilters = () => {
    setFilters({ ...filters, radius: radiusValue });
  }
  return (
    <div className={`${className} relative`}>
      {disp === 1 ?
        <>
          <label htmlFor="" className="font-semibold text-sm" >
            Search radius
          </label>
          <p>Up to {radiusValue} km</p>
          <input
            type="range"
            onChange={(e) => { setRadiusValue(e.target.value); handleFilters(); }}
            value={radiusValue}
            id="currency-input"
            className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer dark:bg-gray-700 accent-indigo-600"
            placeholder="Enter amount" />
        </> :
        ''
      }
    </div>
  )
};

const SearchChecked: React.FC<SearchButtonProps> = ({ disp, className, checkedLabel, filters, setFilters }) => {
  const [selectedData, setSelectedData] = useState<string[]>([]);
  const [dataList, setDataList] = useState<any>([]);
  const checkedDisp: JSX.Element[] = [];

  const handleFilters = (value: string, buffer: string[], setAction: React.Dispatch<React.SetStateAction<string[]>>) => {
    if (buffer.includes(value)) {
      setAction(buffer.filter((val) => val !== value));
    } else {
      setAction([...buffer, value]);
    }
  };

  useEffect(() => {
    if (disp === 1) {
      setFilters({ ...filters, years: selectedData });
    } else if (disp === 2) {
      setFilters({ ...filters, shift: selectedData });
    } else {
      setFilters({ ...filters, benefit: selectedData });
    }
  }, [selectedData]);

  useEffect(() => {
    let url;
    if (disp === 1) {      
      url = `${process.env.NEXT_PUBLIC_BACKEND_DEV}/api/periodo`;
    } else if (disp === 2) {
      url = `${process.env.NEXT_PUBLIC_BACKEND_DEV}/api/turno`;
    } else {
      url = `${process.env.NEXT_PUBLIC_BACKEND_DEV}/api/benefits`;
    }

    const fetchData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        setDataList(data)        
      } catch (err) {
        console.error('Error: Level loading error!!!');
      }
    }
    fetchData();
  }, [])

  const length = dataList.length;
  for (let i = 0; i < length; i++) {
    const element = dataList[i];
    
    if (disp === 1 || disp === 2)
      checkedDisp.push(
        <div key={i} className="flex items-center mb-4">
          <input
            id={`default-checkbox${i}-${disp - 1}`}
            type="checkbox"
            value={element._id}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onChange={(e) => handleFilters(e.target.value, selectedData, setSelectedData)}
          />
          <label htmlFor={`default-checkbox${i}-${disp - 1}`} className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            { element.year || element.turno}
          </label>
        </div>
      );
    else if (disp === 3) {
      checkedDisp.push(
        <div key={disp} className="flex items-center mb-4">
          <input
            id={`default-checkbox${i}-${disp - 1}`}
            type="checkbox"
            value={element}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onChange={(e) => handleFilters(e.target.value, selectedData, setSelectedData)}
          />
          <label htmlFor={`default-checkbox${i}-${disp - 1}`} className="flex justify-between ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            {element}
          </label>
          <a className="pl-3 flex text-purple-700 hover:bg-purple-50">
            <svg className="w-[24px] h-[24px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 13V8m0 8h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </a>
        </div>
      );
    }
  }

  return (
    <div className={`${className} relative`} key={checkedLabel}>
      <label className="font-semibold text-sm">{checkedLabel}</label>
      {checkedDisp}
    </div>
  );
};

export { SearchCity, Neighborhood, SearchSchool, SearchSeries, TeachingState, SearchRadius, SearchChecked };
