// components/CustomSelect.tsx  
import React, { useState } from 'react';  
import { isEmpty } from '@/utils/is-empty';  

interface CustomSelectProps {  
  items: string[]; // Keeping it as string[] for this case  
}  

const CustomSelect: React.FC<CustomSelectProps> = ({ items }) => {  
  const [inputValue, setInputValue] = useState<string>('');  
  const [isDropdownVisible, setDropdownVisible] = useState<boolean>(false);  
  const [selectedItem, setSelectedItem] = useState<string>('');  

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {  
    const value = e.target.value;  
    setInputValue(value);  
    setDropdownVisible(true); // Always show dropdown when typing  
  };  

  const handleItemClick = (item: string) => {  
    setSelectedItem(item);  
    setInputValue(item);  
    setDropdownVisible(false); // Hide dropdown when an item is selected  
  };  

  // Filter items based on input value or show all if input is empty  
  const filteredItems = inputValue.length > 0  
    ? items.filter(item => item.toLowerCase().includes(inputValue.toLowerCase()))  
    : items; // Show all items if input is empty  

  return (  
    <div className="relative">  
      <input  
        type="text"  
        value={inputValue}  
        onChange={handleInputChange}  
        onFocus={() => setDropdownVisible(true)} // Show dropdown when focused  
        className="border border-slate-400 px-5 py-2 rounded-lg w-full max-w-xs"  
        placeholder="Select an item"  
      />  

      {isDropdownVisible && (  
        <ul className="absolute z-10 border border-slate-400 bg-white w-full max-w-xs rounded-lg shadow-lg">  
          {!isEmpty(filteredItems) ? (  
            filteredItems.map((item, index) => (  
              <li  
                key={index}  
                onClick={() => handleItemClick(item)}  
                className="px-5 py-2 hover:bg-slate-200 cursor-pointer"  
              >  
                {item}  
              </li>  
            ))  
          ) : (  
            <li className="px-5 py-2 text-gray-500">No matches found</li>  
          )}  
        </ul>  
      )}  
    </div>  
  );  
};  

export default CustomSelect;