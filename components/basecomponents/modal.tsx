/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from "react";
import {
  useAddSchoolMutation,
  useGetAllMutation,
} from "@/lib/features/schools/schoolsApi";
import { MultiOption, MultiSeries, MultiSelect } from "./multiSelect";
import { toast } from "react-toastify";

const shifts = [
  "Morning",
  "Afternoon",
  "Full",
  "Semi-integral",
  "Nocturnal",
  "EAD",
  "Saturday",
];

const years = [
  "2023",
  "2024",
  "2025",
  "2026",
];

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [addSchool] = useAddSchoolMutation();
  const [getAll] = useGetAllMutation();

  const [image, setImage] = useState<any | null>(null);
  const [imagePreview, setImagePreview] = useState<any>(null);
  const [schoolTitle, setSchoolTitle] = useState<string>("");
  const [schoolTitleList, setSchoolTitleList] = useState<any>(null);
  const [at, setAt] = useState<string>("");
  const [position, setPosition] = useState<string>("");
  const [selectedYears, setSelectedYears] = useState<string[]>([]);
  const [levels, setLevels] = useState<any>(null);
  const [changeLevels, setChangeLevels] = useState<any>([]);
  const [series, setSeries] = useState<any[]>([]);
  const [steps, setSteps] = useState<any[]>([]);
  const [type, setType] = useState<string>("public");
  const [shift, setShift] = useState<string[]>([]);
  const [monthly, setMonthly] = useState<string>("");
  const [monthlyState, setMonthlyState] = useState<string>("");
  const [regFee, setRegFee] = useState<string>("");
  const [vacancies, setVacancies] = useState<string>("");
  const [commit, setCommit] = useState<string>("");

  const [isValidMonthly, setIsValidMonthly] = useState<boolean>(true);
  const [isValidMonthlyState, setIsValidMonthlyState] = useState<boolean>(true);
  const [isValidRegisterFee, setIsValidRegisterFee] = useState<boolean>(true);

  const [formSwitch, setFormSwitch] = useState<boolean>(false);

  useEffect(() => {
    // Fetch private school data when component mounts
    const fetchLevels = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_DEV}/api/levels/all`);
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        setLevels(data);
      } catch (err) {
        console.error('Error: Level loading error!!!');
      }
    };
    getAll()
      .unwrap()
      .then((fetchedData) => {
        setSchoolTitleList(fetchedData); // Update state with fetched data        
      })
      .catch((err) => {
        console.error("Error fetching private school data:", err);
      });
    const fetchSeries = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_DEV}/api/series/all`);
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        console.log(data)
        setSeries(data);
      } catch (err) {
        console.error('Error: Level loading error!!!');
      }
    };
    fetchLevels();
    fetchSeries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array ensures useEffect runs only on mount

  const changeImage = (e: any) => {
    setImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  }

  const schoolsData =
    schoolTitleList && typeof schoolTitleList === "object"
      ? Object.values(schoolTitleList)
      : [];


  const SaveAndEdit = async () => {
    const schoolData = {
      title: schoolTitle,
      years: selectedYears,
      level: changeLevels,
      series: steps,
      scholarUnit: "R$",
      amount: monthly,
      monthlyState: monthlyState,
      regFee: regFee,
      vagas: vacancies,
      type: type,
      star: "4",
      position: position,
      at: at,
      shift: shift,
      mark: image
    };

    try {      
      const { success } = await addSchool(schoolData).unwrap()

      if (success) {
        toast.success(`Successfully ${formSwitch ? 'Added' : 'Updated'} School ....`);
        setSchoolTitle("");
        setChangeLevels([]);
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
            <label htmlFor="mark" className="flex w-20 h-20 rounded-full cursor-pointer bg-slate-400 border border-spacing-4 border-purple-700 justify-center items-center">{imagePreview && <img src={imagePreview} alt="" width={200} height={200} className="rounded-full" />}</label>
            <input type="file" id="mark" className="hidden" onChange={changeImage} />
          </div>
          <div className="flex absolute right-1 top-1">
            <button
              className="border bg-purple-500 rounded-full p-2 text-white text-sm px-2"
              onClick={() => setFormSwitch(!formSwitch)}
            >
              {!formSwitch ? "Atualização" : "Register"}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 p-1 gap-3">
          {formSwitch ? (
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Escola
              </label>
              <select
                value={schoolTitle}
                onChange={(e) => setSchoolTitle(e.target.value)}
                className="bg-gray-50 focus:outline-none focus:ring-1 border focus:ring-purple-500 text-gray-900 text-sm rounded-full block w-full p-2.5"
              >
                <option>Escolha uma escola</option>
                {schoolsData.map((value: any, index: number) => (
                  <option key={index} value={value.title}>
                    {value.title}
                  </option>
                ))}
              </select>
            </div>
          ) : (
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
          )}
          <div className="mb-5 col-span-2 grid grid-cols-2 gap-2">
            <div className="flex flex-col">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                At:
              </label>
              <select
                onChange={(e) => setAt(e.target.value)}
                value={at}
                className="bg-gray-50 focus:outline-none focus:ring-1 border focus:ring-purple-500 text-gray-900 text-sm rounded-full block w-full p-2.5"
              >
                <option>Select At</option>
                <option value="Juliao-RC">Juliao-RC</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Position:
              </label>
              <select
                onChange={(e) => setPosition(e.target.value)}
                value={position}
                className="bg-gray-50 focus:outline-none focus:ring-1 border focus:ring-purple-500 text-gray-900 text-sm rounded-full block w-full p-2.5"
              >
                <option>Select Position</option>
                <option value="Juliao">Juliao</option>
              </select>
            </div>
          </div>
          <div className="mb-5 col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Ano letivo:
            </label>
            <MultiOption
              options={years}
              selectedOptions={selectedYears}
              onChange={setSelectedYears}
            />
          </div>
          <div className="mb-5 col-span-2 grap-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Mensalidade sem desconto:
            </label>
            <MultiSeries
              options={series}
              selectedOptions={steps}
              onChange={setSteps}
            />
          </div>
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            nível
          </label>
          <MultiSelect
            options={levels}
            selectedOptions={changeLevels}
            onChange={setChangeLevels}
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
              options={shifts}
              selectedOptions={shift}
              onChange={setShift}
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
