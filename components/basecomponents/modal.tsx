/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from "react";
import {
  useAddSchoolMutation,
  useGetAllMutation,
} from "@/lib/features/schools/schoolsApi";
import CustomSelect from "./selectComponent";
import { MultiOption } from "./multiSelect";
import SchoolImage from "./schoolImage";
import { toast } from "react-toastify";
import { getUserId } from "@/utils/localstorage";
import { isEmpty } from "@/utils/is-empty";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  school?: any;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, school }) => {
  const [addSchool] = useAddSchoolMutation();

  const [image, setImage] = useState<any | null>(null);
  const [imagePreview, setImagePreview] = useState<any>(null);
  const [schoolTitle, setSchoolTitle] = useState<string>("");
  const [cities, setCities] = useState<any>([]);
  const [city, setCity] = useState<string>();
  const [neighs, setNeighs] = useState<any>([]);
  const [neigh, setNeigh] = useState<string>();
  const [levels, setLevels] = useState<any>([]);
  const [changeLevel, setChangeLevel] = useState<string>(); // edu level
  const [series, setSeries] = useState<any>([]);
  const [step, setStep] = useState<string>(); // edu series
  const [type, setType] = useState<string>("public");
  const [selectedYears, setSelectedYears] = useState<string[]>([]);
  const [years, setYears] = useState<any>([]);
  const [turno, setTurno] = useState<string[]>([]); // edu shift
  const [turnos, setTurnos] = useState<any>([]);
  const [monthly, setMonthly] = useState<string>("");
  const [monthlyState, setMonthlyState] = useState<string>(""); // monthly fee percentage
  const [regFee, setRegFee] = useState<string>("");
  const [vacancies, setVacancies] = useState<string>("");
  const [fullVacanies, setFullVacancies] = useState<string>("");
  const [commit, setCommit] = useState<string>("");

  const [isValidMonthly, setIsValidMonthly] = useState<boolean>(true);
  const [isValidMonthlyState, setIsValidMonthlyState] = useState<boolean>(true);
  const [isValidRegisterFee, setIsValidRegisterFee] = useState<boolean>(true);

  const [formSwitch, setFormSwitch] = useState<boolean>(false);

  const setCityValue = (city: any) => {
    city && city._id && setCity(city._id);
  }

  const renderCity = (item: any) => {
    return item.city;
  }

  const setNeighValue = (neigh: any) => {
    neigh && neigh._id && setNeigh(neigh._id);
  }

  const renderNeigh = (item: any) => {
    return item.neigh;
  }

  const renderLevel = (item: any) => {
    return item.level;
  }

  const setLevelValue = (item: any) => {
    item && item._id && setChangeLevel(item._id);
  }

  const renderSeries = (item: any) => {    
    return item.series;
  }

  const setSeriesValue = (item: any) => {
    item && item._id && setStep(item._id)
  }

  useEffect(() => {
    // Fetch private school data when component mounts
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

    const fetchYears = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_DEV}/api/periodo`);
        if (!res.ok) {
          throw new Error('Netowrk response was no OK');
        }
        const data = await res.json();
        setYears(data);
      } catch (err) {
        console.log('Error: Years Loading error!!');
      }
    }

    const fetchTurnos = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_DEV}/api/turno`);
        if (!res.ok) {
          throw new Error('Netowrk response was not OK');
        }
        const data = await res.json();
        setTurnos(data);
      } catch (err) {
        console.log('Error: Years Loading error!!');
      }
    }

    fetchCities();
    fetchLevels();
    fetchYears();
    fetchTurnos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array ensures useEffect runs only on mount

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const url = changeLevel ? `${process.env.NEXT_PUBLIC_BACKEND_DEV}/api/series?levelId=${changeLevel}` : `${process.env.NEXT_PUBLIC_BACKEND_DEV}/api/series`;
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        setSeries(data);
      } catch (err) {
        console.error('Error: Level loading error!!!');
      }
    };

    changeLevel && fetchSeries();
  }, [changeLevel])

  useEffect(() => {
    const fetchNeighs = async () => {
      try {
        const url = changeLevel ? `${process.env.NEXT_PUBLIC_BACKEND_DEV}/api/neighs?city=${city}` : `${process.env.NEXT_PUBLIC_BACKEND_DEV}/api/neighs`;
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        setNeighs(data);
      } catch (err) {
        console.error('Error: Level loading error!!!');
      }
    };

    city && fetchNeighs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city])

  useEffect(() => {
    const setInitialvalue = (school:any) => {
      setSchoolTitle(school.title);
      setCity(school.city._id);
      setNeigh(school.neigh._id);
      setChangeLevel(school.level._id)
      setStep(school.series._id);
      setMonthly(school.amount);
      setMonthlyState(school.monthlyState);
      setRegFee(school.regFee);      
      setCommit(school.comments);
      setVacancies(school.vagas);
      setFullVacancies(school.fullvagas);
      setSelectedYears(school.years)
      setTurno(school.turno);
    }
    school && !isEmpty(school) &&
      setInitialvalue(school);
  }, [school])

  const changeImage = (e: any) => {
    setImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
    console.log(imagePreview);
  }

  const SaveAndEdit = async () => {
    const schoolData = {
      user: getUserId(),
      title: schoolTitle,
      years: selectedYears,
      level: changeLevel,
      series: step,
      scholarUnit: "R$",
      amount: monthly,
      monthlyState: monthlyState,
      regFee: regFee,
      vagas: vacancies,
      type: type,
      star: "4",
      city: city,
      neigh: neigh,
      turno: turno,
      comments: commit,
      mark: image
    };

    try {
      const { success } = await addSchool(schoolData).unwrap()

      if (success) {
        toast.success(`Successfully ${formSwitch ? 'Added' : 'Updated'} School ....`);
        setSchoolTitle("");
        setChangeLevel("");
        setTimeout(() => {
          setFormSwitch(true);
        }, 1000);
      } else {
        toast.warning("Try again ...");
      }
    } catch (error: any) {
      toast.error(`Confirm fields value: , ${error}`);
    }
  };


  return (
    <div className={`fixed inset-0 ${isOpen ? 'flex' : 'hidden'} items-center justify-center z-50`}>
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-white p-6 rounded-lg shadow-lg z-10 w-11/12 md:w-1/2 lg:w-1/3 overflow-y-auto max-h-[90vh]">
        <div className="relative flex justify-center items-center">
          <div className="flex justify-center items-center">
            { school && school.title && !imagePreview && <SchoolImage title={school.title} /> }
            <label htmlFor="mark" className="flex w-20 h-20 rounded-full cursor-pointer bg-slate-400 border border-spacing-4 border-purple-700 justify-center items-center">{imagePreview && <img src={imagePreview} alt="" width={200} height={200} className="rounded-full" />}</label>
            <input type="file" id="mark" className="hidden" onChange={changeImage} />
          </div>
        </div>

        <div className="grid grid-cols-2 p-1 gap-3">
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Escola
            </label>
            <input
              type="text"
              className="bg-gray-50 focus:outline-none focus:ring-1 border focus:ring-purple-500 text-gray-900 text-sm rounded-full block w-full p-2.5"
              placeholder="Escola Mamãe Com Açúcar"
              value={schoolTitle}
              onChange={(e) => { setSchoolTitle(e.target.value); }}
              required
            />
          </div>

          <div className="mb-5 col-span-2 grid grid-cols-2 gap-2">
            <div className="flex flex-col">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                City:
              </label>
              <CustomSelect className="border rounded-full px-5"
                items={cities}
                value={school.city}
                setItem={setCityValue}
                renderItem={renderCity}
              />
            </div>
            <div className="flex flex-col">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Bairro:
              </label>
              <CustomSelect className="border rounded-full px-5" items={neighs} value={school.neigh} setItem={setNeighValue} renderItem={renderNeigh} />
            </div>
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              nível
            </label>
            <CustomSelect className="border rounded-full px-5"
              items={levels}
              value={school.level}
              setItem={setLevelValue}
              renderItem={renderLevel}
            />
          </div>
          <div className="mb-5 col-span-2 grap-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Mensalidade sem desconto:
            </label>
            <CustomSelect className="border rounded-full px-5"
              items={series}
              value={school.series}
              setItem={setSeriesValue}
              renderItem={renderSeries}
            />
          </div>
        </div>
        <div className="mb-5 col-span-2">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Ano letivo:
          </label>
          <MultiOption
            options={[...years.map((year: any) => year.year)]}
            selectedOptions={selectedYears}
            onChange={setSelectedYears}
          />
        </div>
        <div className="grid grid-cols-2 p-1 gap-3">
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Mensalidade sem desconto:
            </label>
            <div className="relative">
              <div className="text-gray-500 absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                R$
              </div>
              <input
                type="text"
                className={`${isValidMonthly
                  ? "focus:ring-purple-500"
                  : " focus:ring-red-600"
                  }bg-gray-50 focus:outline-none focus:ring-1 text-gray-900 text-sm rounded-full border block w-full ps-10 p-2.5`}
                placeholder="00.00"
                pattern="^\d{2}\.\d{2}$"
                value={monthly}
                onChange={(e) => {
                  setMonthly(e.target.value);
                  const pattern = /^\d{2}\.\d{2}$/;
                  setIsValidMonthly(pattern.test(e.target.value));
                }}
                required
              />
            </div>
            {!isValidMonthly && (
              <p className="mt-2 text-sm text-red-600" id="email-error">
                Please enter a valid.
              </p>
            )}
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Desconto na mensalidade %
            </label>
            <div className="relative">
              <div className="text-gray-500 absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                %
              </div>
              <input
                type="text"
                className={`${isValidMonthlyState
                  ? "focus:ring-purple-500"
                  : " focus:ring-red-600"
                  }bg-gray-50 focus:outline-none focus:ring-1 text-gray-900 text-sm rounded-full border block w-full ps-10 p-2.5`}
                placeholder="00.00"
                pattern="^\d{2}\.\d{2}$"
                value={monthlyState}
                onChange={(e) => {
                  setMonthlyState(e.target.value);
                  const pattern = /^\d{2}\.\d{2}$/;
                  setIsValidMonthlyState(pattern.test(e.target.value));
                }}
                required
              />
            </div>
            {!isValidMonthlyState && (
              <p className="mt-2 text-sm text-red-600" id="email-error">
                Please enter a valid.
              </p>
            )}
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Mensalidade com desconto:
            </label>
            <input
              type="text"
              className="bg-gray-50 focus:outline-none  border text-gray-900 text-sm rounded-full block w-full p-2.5"
              placeholder="N/A"
              readOnly
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Valor da matricula
            </label>
            <div className="relative">
              <div className="text-gray-500 absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                R$
              </div>
              <input
                type="text"
                className={`${isValidRegisterFee
                  ? "focus:ring-purple-500"
                  : " focus:ring-red-600"
                  }bg-gray-50 focus:outline-none focus:ring-1 text-gray-900 text-sm rounded-full border block w-full ps-10 p-2.5`}
                placeholder="00.00"
                pattern="^\d{2}\.\d{2}$"
                value={regFee}
                onChange={(e) => {
                  setRegFee(e.target.value);
                  const pattern = /^\d{2}\.\d{2}$/;
                  setIsValidRegisterFee(pattern.test(e.target.value));
                }}
                required
              />
            </div>
            {!isValidRegisterFee && (
              <p className="mt-2 text-sm text-red-600" id="email-error">
                Please enter a valid.
              </p>
            )}
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Vagas:
            </label>
            <input
              type="number"
              className="bg-gray-50 focus:outline-none focus:ring-1 border focus:ring-purple-500 text-gray-900 text-sm rounded-full block w-full p-2.5"
              placeholder="Vagas disponíveis"
              value={vacancies}
              onChange={(e) => setVacancies(e.target.value)}
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Type:
            </label>
            <select
              className="bg-gray-50 focus:outline-none focus:ring-1 border focus:ring-purple-500 text-gray-900 text-sm rounded-full block w-full p-2.5"
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
            >
              <option value="public">public</option>
              <option value="private">private</option>
            </select>
          </div>
          <div className="mb-5 col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Shift:
            </label>
            <MultiOption
              options={[...turnos.map((turno: any) => turno.turno)]}
              selectedOptions={turno}
              onChange={setTurno}
            />
          </div>

          <div className="mb-5 col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Informações adicionais
            </label>
            <textarea
              className="bg-gray-50 focus:outline-none focus:ring-1 border focus:ring-purple-500 text-gray-900 text-sm rounded-xl min-h-[50px] block w-full p-2.5"
              required
              value={commit}
              onChange={(e) => setCommit(e.target.value)}
            />
          </div>
        </div>

        <div className="flex gap-5 justify-end">
          <button
            className="bg-purple-500 justify-end text-white px-4 py-2  rounded-full hover:bg-purple-600"
            onClick={SaveAndEdit}
          >
            Salvar
          </button>
          <button
            className="bg-purple-500 justify-end text-white px-4 py-2  rounded-full hover:bg-purple-600"
            onClick={onClose}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
