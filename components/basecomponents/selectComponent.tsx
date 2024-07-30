import React, { useEffect, useState } from 'react';  
import { isEmpty } from '@/utils/is-empty';  

// Define a generic type for the items and a display function for rendering them  
interface CustomSelectProps<T> {  
  items: T[];  
  setItem: (item: T) => void;  
  // A function to render the item as a string in the dropdown  
  renderItem?: (item: T) => string;
}  

const CustomSelect = <T,>({ items, setItem, renderItem }: CustomSelectProps<T>) => {  
  const [inputValue, setInputValue] = useState<string>('');  
  const [isDropdownVisible, setDropdownVisible] = useState<boolean>(false);    

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {  
    const value = e.target.value;  
    setInputValue(value);  
    setDropdownVisible(true); // Always show dropdown when typing  
  };  

  const handleItemClick = (item: T) => {      
    setInputValue(renderItem ? renderItem(item) : String(item)); // Convert to string based on render function  
    setItem(item);
    setDropdownVisible(false); // Hide dropdown when an item is selected  
  };  

  // Filter items based on input value or show all if input is empty  
  const filteredItems = inputValue.length > 0  
    ? items.filter(item => {  
        const itemString = renderItem ? renderItem(item) : String(item);
        return itemString.toLowerCase().includes(inputValue.toLowerCase());
      })  
    : items; // Show all items if input is empty  

  useEffect(() => {
    setInputValue("");
  }, [items])

  return (  
    <div className="relative">  
      <input  
        type="text"  
        value={inputValue}  
        onChange={handleInputChange}  
        onFocus={() => setDropdownVisible(true)} // Show dropdown when focused  
        className="px-5 py-2 rounded-lg w-full max-w-xs"  
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
                {renderItem ? renderItem(item) : String(item)}  
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