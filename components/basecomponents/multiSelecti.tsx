import { useState } from 'react';

interface Option {
  label: string;
  value: string;
}

interface MultiSelectProps {
  options: Option[];
  selectedOptions: string[];
  onChange: (selected: string[]) => void;
}

const MultiSelect: React.FC<MultiSelectProps> = ({ options, selectedOptions, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value: string) => {
    if (selectedOptions.includes(value)) {
      onChange(selectedOptions.filter(option => option !== value));
    } else {
      onChange([...selectedOptions, value]);
    }
  };

  return (
    <div className="relative">
      <div
        className="border rounded p-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOptions.length > 0
          ? selectedOptions.map((value) => {
              const option = options.find(opt => opt.value === value);
              return <span key={value} className="px-2 py-1 bg-gray-200 rounded">{option?.label}</span>;
            })
          : 'Select options'}
      </div>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-full bg-white border rounded shadow">
          {options.map(option => (
            <div
              key={option.value}
              className={`p-2 cursor-pointer ${selectedOptions.includes(option.value) ? 'bg-gray-200' : ''}`}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelect;
