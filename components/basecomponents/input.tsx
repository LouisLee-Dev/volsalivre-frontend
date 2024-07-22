import React, { useState } from 'react';
import InputMask from 'react-input-mask';

interface CPFInputProps {
  value: any;
  onChange: any;
}

const CPFInput: React.FC<CPFInputProps> = ({ value, onChange }) => {
  const [isValid, setIsValid] = useState(true);

  const validateCPF = (cpf: any) => {
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return cpfRegex.test(cpf);
  };

  const handleChange = (e: any) => {
    const newValue = e.target.value;
    setIsValid(validateCPF(newValue));
    onChange(newValue);
  };

  return (
    <div className="flex flex-col items-center">
      <InputMask
        mask="999.999.999-99"
        value={value}
        onChange={handleChange}
      >
        {(props:any) => (
          <input
            {...props}
            type="text"
            aria-describedby="filled_success_help"
            className={`block text-sm rounded-full px-16 py-2 w-full text-gray-900 bg-gray-50 border focus:outline-purple-500 appearance-none peer ${isValid ? 'border-gray-300' : 'border-red-500'
              }`}
            placeholder="000.000.000-00"
          />
        )}
      </InputMask>
      {/* {!isValid && <span className="text-red-500 mt-2">Invalid CPF format</span>} */}
    </div>
  );
};

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
}

const PhoneInput: React.FC<PhoneInputProps> = ({ value, onChange }) => {
  const [isValid, setIsValid] = useState(true);

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^\+\d{2} \(\d{2}\) \d{5}-\d{4}$/;
    return phoneRegex.test(phone);
  };

  const handleChange = (e: any): void => {
    const newValue = e.target.value;
    setIsValid(validatePhone(newValue));
    onChange(newValue);
  };

  return (
    <div className="flex flex-col items-center">
      <InputMask
        mask="+55 (99) 99999-9999"
        value={value}
        onChange={handleChange}
      >
        {(inputProps) => (
          <input
            {...inputProps}
            type="text"
            aria-describedby="filled_success_help"
            className={`block text-sm rounded-full px-16 py-2 w-full text-gray-900 bg-gray-50 border focus:outline-purple-500 appearance-none peer ${
              isValid ? 'border-purple-500' : 'border-red-500'
            }`}
            placeholder="+55 (35) 98763-4321"
          />
        )}
      </InputMask>
      {/* {!isValid && <span className="text-red-500 mt-2">Invalid phone number format</span>} */}
    </div>
  );
};

export { CPFInput, PhoneInput };
