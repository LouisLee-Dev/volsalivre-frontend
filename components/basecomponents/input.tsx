'use client';  

import React, { useState } from 'react';  

interface CPFInputProps {  
  value: string;  
  onChange: (value: string) => void;  
}  

const CPFInput: React.FC<CPFInputProps> = ({ value, onChange }) => {  
  const [isValid, setIsValid] = useState(true);  

  const validateCPF = (cpf: string): boolean => {  
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;  
    return cpfRegex.test(cpf);  
  };  

  const formatCPF = (input: string): string => {  
    const digits = input.replace(/\D/g, ''); // Remove non-digit characters  
    const match = digits.match(/^(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})$/);  
    if (!match) return input;  

    return `${match[1]}${match[2] ? '.' + match[2] : ''}${match[3] ? '.' + match[3] : ''}${match[4] ? '-' + match[4] : ''}`;  
  };  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {  
    const newValue = formatCPF(e.target.value);  
    setIsValid(validateCPF(newValue));  
    onChange(newValue);  
  };  

  return (  
    <div className="flex flex-col items-center">  
      <input  
        value={value}  
        onChange={handleChange}  
        type="text"  
        aria-describedby="filled_success_help"  
        className={`block text-sm rounded-full px-16 py-2 w-full text-gray-900 bg-gray-50 border focus:outline-purple-500 appearance-none peer ${isValid ? 'border-gray-300' : 'border-red-500'}`}  
        placeholder="000.000.000-00"  
      />  
      {!isValid && <span className="text-red-500 mt-2">Invalid CPF format</span>}  
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
    const phoneRegex = /^\+\d{2} $\d{2}$ \d{5}-\d{4}$/;  
    return phoneRegex.test(phone);  
  };  

  const formatPhone = (input: string): string => {  
    const digits = input.replace(/\D/g, ''); // Remove non-digit characters  
    const match = digits.match(/^(\d{0,2})(\d{0,2})(\d{0,5})(\d{0,4})$/);  
    if (!match) return input;  

    return `${match[1] ? '+' + match[1] : ''} ${match[2] ? '(' + match[2] + ') ' : ''}${match[3]}${match[4] ? '-' + match[4] : ''}`;  
  };  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {  
    const newValue = formatPhone(e.target.value);  
    setIsValid(validatePhone(newValue));  
    onChange(newValue);  
  };  

  return (  
    <div className="flex flex-col items-center">  
      <input  
        value={value}  
        onChange={handleChange}  
        type="text"  
        aria-describedby="filled_success_help"  
        className={`block text-sm rounded-full px-16 py-2 w-full text-gray-900 bg-gray-50 border focus:outline-purple-500 appearance-none peer ${isValid ? 'border-purple-500' : 'border-red-500'}`}  
        placeholder="+55 (35) 98763-4321"  
      />  
      {!isValid && <span className="text-red-500 mt-2">Invalid phone number format</span>}  
    </div>  
  );  
};  

export { CPFInput, PhoneInput };