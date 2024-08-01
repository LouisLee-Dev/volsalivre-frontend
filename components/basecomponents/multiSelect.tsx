'use client';

import { useState } from 'react';

interface MultiOptionProps {
  options: any[],
  selectedOptions: any[];
  onChange: (selected: any[]) => void;  
}

const MultiOption: React.FC<MultiOptionProps> = ({ options, selectedOptions = [], onChange }) => {  
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value: string) => {
    if (selectedOptions.includes(value)) {
      onChange(selectedOptions.filter(option => option.trim() !== value.trim()));
    } else {
      onChange([...selectedOptions, value]);
    }
  };

  const closeSelect = (option:any) => {
    onChange(selectedOptions.filter(opt => opt !== option));
  }

  return (
    <div className="relative" onBlur={() => setIsOpen(false)}>
      <div
        className="border rounded p-2 cursor-pointer flex flex-wrap gap-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOptions.length > 0
          ? selectedOptions.map((value, index) => {
            const option = options.find(opt => opt.trim() === value.trim());
            return option ? (
              <div key={index} className="flex gap-1 px-2 py-1 bg-gray-200 rounded-full items-center">
                <span>{option}</span>
                <div onClick={()=>closeSelect(option)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="m289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34Z" /></svg>
                </div>
              </div>
            ) : null;
          })
          : 'Select'}
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} absolute left-0 w-full bg-white border rounded shadow z-50`}>
        {options?.map((option, index) => (
          <div
            key={index}
            className={`p-2 cursor-pointer ${selectedOptions?.includes(option) ? 'hidden' : 'block'}`}
            onClick={() => handleSelect(option)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

const MultiSeries: React.FC<MultiOptionProps> = ({ options, selectedOptions = [], onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value: string) => {
    if (selectedOptions.filter(op => op.trim() === value.trim())[0]) {
      onChange(selectedOptions.filter(option => option.trim() !== value.trim()));
    } else {
      onChange([...selectedOptions, value ]);
    }
  };

  const closeSelect = (option:any) => {
    onChange(selectedOptions.filter(opt => opt !== option));
  }

  return (
    <div className="relative" onBlur={() => setIsOpen(false)}>
      <div
        className="border rounded p-2 cursor-pointer flex flex-wrap gap-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOptions.length > 0
          ? selectedOptions.map((value, index) => {
            const option = options.find(opt => opt.series.trim() === value.trim());
            return option ? (
              <div key={index} className="flex gap-1 px-2 py-1 bg-gray-200 rounded-full items-center">
                <span>{option.series}</span>
                <div onClick={()=>closeSelect(option.series)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="m289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34Z" /></svg>
                </div>
              </div>
            ) : null;
          })
          : 'Select'}
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} absolute left-0 w-full bg-white border rounded shadow z-50`}>
        {options?.map((option, index) => (
          <div
            key={index}
            className={`p-2 cursor-pointer ${selectedOptions?.includes(option.series) ? 'hidden' : 'block'}`}
            onClick={() => handleSelect(option.series)}
          >
            {option.series}
          </div>
        ))}
      </div>
    </div>
  );
};

interface Option {
  level: string;
  _id: string;
  date: string;
  __v: number;
}

interface SelectedOption {
  level: string;
  grade: any;
}

interface MultiSelectProps {
  options: Option[];
  selectedOptions: SelectedOption[];
  onChange: (selected: any[]) => void;
}

const MultiSelect: React.FC<MultiSelectProps> = ({ options = [], selectedOptions = [], onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value: string) => {
    if (selectedOptions.filter(op => op.level.trim() === value.trim())[0]) {
      onChange(selectedOptions.filter(option => option.level.trim() !== value.trim()));
    } else {
      onChange([...selectedOptions, { level: value, grade: 0 }]);
    }
  };

  const closeSelect = (option: any) => {
    onChange(selectedOptions.filter(opt => opt.level.trim() !== option.level.trim()));
  }

  const setGrade = (option: any, grade: any) => {
    onChange([...selectedOptions.filter(opt => opt !== option), { level: option.level, grade: grade }]);
  }

  const ano:any = [];
  for (let i = 1; i <= 12; i++) {
    ano.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  return (
    <div className="relative" onBlur={() => setIsOpen(false)}>
      <div
        className="border rounded p-2 cursor-pointer flex flex-wrap gap-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOptions.length > 0
          ? selectedOptions.map((value, index) => {
            const option = options.find(opt => opt.level.trim() === value.level.trim());
            return option ? (
              <div key={index} className="flex gap-1 px-2 py-1 bg-gray-200 rounded-full items-center">
                <span>{option.level}</span>
                <div onClick={() => closeSelect(option)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="m289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34Z" /></svg>
                </div>
              </div>
            ) : null;
          })
          : 'Select Levels'}
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} absolute left-0 w-full bg-white border rounded shadow z-50`}>
        {options?.map((option, index) => (
          <div
            key={index}
            className={`p-2 cursor-pointer ${selectedOptions?.filter((op: any) => op.level.trim() === option.level.trim())[0] ? 'hidden' : 'block'}`}
            onClick={() => handleSelect(option.level)}
          >
            {option.level}
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2 mt-2">
        {
          selectedOptions?.map((option: any, index: any) => (
            <div className="grid grid-cols-2 items-center" key={index}>
              <span className="text-slate-500">{option.level}</span>
              <div className="flex items-center gap-2">
                <label className="block text-sm font-medium text-gray-900 dark:text-white">
                  Turno
                </label>
                <select
                  onChange={(e) => setGrade(option, e.target.value)}
                  value={option.grade}
                  className="bg-gray-50 focus:outline-none focus:ring-1 border focus:ring-orange-500 text-gray-900 text-sm rounded-full block w-full p-2.5"
                >
                  <option>Escolha os ano</option>
                  {ano}
                </select>
              </div>

            </div>
          ))
        }
      </div>

    </div>
  );
};

export {MultiSelect, MultiOption, MultiSeries}
