"use client";

"use client";

import React, { useState, useEffect } from "react";
import {
  useAddSchoolMutation,
  useGetAllMutation,
} from "@/lib/features/schools/schoolsApi";
import { toast } from "react-toastify";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const options = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
];

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [addSchool] = useAddSchoolMutation();
  const [getAll] = useGetAllMutation();

  const [schoolTitle, setSchoolTitle] = useState<string>("");
  const [schoolTitleList, setSchoolTitleList] = useState<any>(null);  
  const [years, setYears] = useState<string>("");
  const [levels, setLevels] = useState<any>(null);
  const [series, setSeries] = useState<any>(null);
  const [changeLevels, setChangeLevels] = useState<string>("");
  const [grade, setGrade] = useState<string>("");
  const [step, setStep] = useState<string>("");
  const [monthly, setMonthly] = useState<string>("");
  const [monthlyState, setMonthlyState] = useState<string>("");
  const [discount, setDiscount] = useState<number>(0);
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
        toast.error('Error: Level loading error!!!');
      }
    };
    getAll()
      .unwrap()
      .then((fetchedData) => {
        setSchoolTitleList(fetchedData); // Update state with fetched data
        // console.log('Fetched private school data:', fetchedData);
      })
      .catch((err) => {
        console.error("Error fetching private school data:", err);
      });
    const fetchSeries = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/series/all`);
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        setSeries(data);
      } catch (err) {
        toast.error('Error: Level loading error!!!');
      }
    };
    fetchLevels();
    fetchSeries();    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array ensures useEffect runs only on mount
  const levelData =
    levels && typeof levels === "object" ? Object.values(levels) : [];
  const schoolsData =
    schoolTitleList && typeof schoolTitleList === "object"
      ? Object.values(schoolTitleList)
      : [];

  const ano = [];
  for (let i = 1; i <= 12; i++) {
    ano.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  const SaveAndEdit = async () => {
    const schoolData = {
      title: schoolTitle,
      years: [years],
      level: [{ level: changeLevels, grade: grade }],
      step: step,
      scholarUnit: "R$",
      amount: monthly,
      type: "public",
      star: "4",
      position: "Juliao Ramos",
      at: "Joinville - SC",
      shift: ["morning", "Afternoon"],
    };
  
    try {
      const { success } = await addSchool(schoolData).unwrap()
  
      if (success) {
        toast.success(`Successfully ${formSwitch ? 'Added' : 'Updated'} School ....`);
        setSchoolTitle("");
        setLevels("");
        setTimeout(() => {
          setFormSwitch(true);
        }, 1000);
      } else {
        toast.warning("Try again ...");
      }
    } catch (error:any) {      
      toast.error("Confirm fields value");
    }
  };
  
  //multi Selected start
  // const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  // const handleMultiSelectChange = (selected: string[]) => {
  //   setSelectedOptions(selected);
  //   const selectedJson = selected.map(value => {
  //     const option = options.find(opt => opt.value === value);
  //     return option ? { label: option.label, value: option.value } : null;
  //   }).filter(option => option !== null);
  //   console.log("Selected options as JSON:", JSON.stringify(selectedJson, null, 2)); // JSON formatted selected values

  // };
  //end
  return (
    <div className={`fixed inset-0 ${isOpen ? 'flex' : 'hidden'} items-center justify-center z-50`}>
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-white p-6 rounded-lg shadow-lg z-10 w-11/12 md:w-1/2 lg:w-1/3 overflow-y-auto max-h-96">
        <div className="flex justify-between items-center">
          <div className="flex flex-col ">
            <h2 className="text-xl font-bold mb-1">Adicionar Oferta</h2>
            <p className="mb-4 text-sm text-gray-700">
              Preecha os campos abaixo
            </p>
          </div>
          <div className="flex">
            <button
              className="border bg-orange-500 rounded-full p-2 text-white"
              onClick={() => setFormSwitch(!formSwitch)}
            >
              {!formSwitch ? "atualização" : "register"}
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
                className="bg-gray-50 focus:outline-none focus:ring-1 border focus:ring-orange-500 text-gray-900 text-sm rounded-full block w-full p-2.5"
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
                className="bg-gray-50 focus:outline-none focus:ring-1 border focus:ring-orange-500 text-gray-900 text-sm rounded-full block w-full p-2.5"
                placeholder="Escola Mamãe Com Açúcar"
                value={schoolTitle}
                onChange={(e) => {setSchoolTitle(e.target.value); console.log(schoolTitle);}}
                required
              />
            </div>
          )}
          <div className="mb-5"></div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Ano letivo:
            </label>
            <select
              onChange={(e) => setYears(e.target.value)}
              value={years}
              className="bg-gray-50 focus:outline-none focus:ring-1 border focus:ring-orange-500 text-gray-900 text-sm rounded-full block w-full p-2.5"
            >
              <option>Escolha o ano</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
            </select>
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              nível
            </label>
            <select
              onChange={(e) => setChangeLevels(e.target.value)}
              value={changeLevels}
              className="bg-gray-50 focus:outline-none focus:ring-1 border focus:ring-orange-500 text-gray-900 text-sm rounded-full block w-full p-2.5"
            >
              <option>Escolha os níveis</option>
              {levelData.map((value: any, index: number) => (
                <option key={index} value={value.level}>
                  {value.level}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Serie:
            </label>
            <select              
              className="bg-gray-50 focus:outline-none focus:ring-1 border focus:ring-orange-500 text-gray-900 text-sm rounded-full block w-full p-2.5"              
              value={step}
              onChange={(e) => setStep(e.target.value)}
              required
            >
              <option value="0">Select Serie</option>
              {series?.map((serie:any) => (
                <option key={serie._id} value={serie._id}>{serie.series}</option>
              ))}
            </select>
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Turno
            </label>
            <select
              onChange={(e) => setGrade(e.target.value)}
              value={grade || ""}
              className="bg-gray-50 focus:outline-none focus:ring-1 border focus:ring-orange-500 text-gray-900 text-sm rounded-full block w-full p-2.5"
            >
              <option>Escolha os ano</option>
              {ano}
            </select>
          </div>
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
                    ? "focus:ring-orange-500"
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
                    ? "focus:ring-orange-500"
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
                    ? "focus:ring-orange-500"
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
              type="text"
              className="bg-gray-50 focus:outline-none focus:ring-1 border focus:ring-orange-500 text-gray-900 text-sm rounded-full block w-full p-2.5"
              placeholder="Vagas disponíveis"
              value={vacancies}
              onChange={(e) => setVacancies(e.target.value)}
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Informações adicionais
            </label>
            <textarea
              className="bg-gray-50 focus:outline-none focus:ring-1 border focus:ring-orange-500 text-gray-900 text-sm rounded-xl min-h-[50px] block w-full p-2.5"
              required
              value={commit}
              onChange={(e) => setCommit(e.target.value)}
            />
          </div>
          {/* <MultiSelect
            options={options}
            selectedOptions={selectedOptions}
            onChange={handleMultiSelectChange}
          /> */}
        </div>
        <div className="flex gap-5 justify-end">
          <button
            className="bg-orange-500 justify-end text-white px-4 py-2  rounded-full hover:bg-orange-600"
            onClick={SaveAndEdit}
          >
            Salvar
          </button>
          <button
            className="bg-orange-500 justify-end text-white px-4 py-2  rounded-full hover:bg-orange-600"
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
