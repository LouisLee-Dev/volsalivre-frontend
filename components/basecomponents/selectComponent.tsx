import React, { useState } from 'react';  

const CustomSelect = ({ items }: { items: any }) => {  
  const [inputValue, setInputValue] = useState('');  
  const [isDropdownVisible, setDropdownVisible] = useState(false);  
  const [selectedItem, setSelectedItem] = useState('');  

  const handleInputChange = (e:any) => {  
    const value = e.target.value;  
    setInputValue(value);  
    
    if (value) {  
      setDropdownVisible(true);  
    } else {  
      setDropdownVisible(false);  
    }  
  };  

  const handleItemClick = (item:any) => {  
    setSelectedItem(item);  
    setInputValue(item);  
    setDropdownVisible(false);  
  };  

  const filteredItems = items.filter((item:any) =>  
    item.toLowerCase().includes(inputValue.toLowerCase())  
  );  

  return (  
    <div className="relative">  
      <input  
        type="text"  
        value={inputValue}  
        onChange={handleInputChange}  
        onClick={() => setDropdownVisible(true)}  
        className="border border-slate-400 px-5 py-2 rounded-lg w-full max-w-xs"  
        placeholder="Select an item"  
      />  
      
      {isDropdownVisible && (  
        <ul className="absolute z-10 border border-slate-400 bg-white w-full max-w-xs rounded-lg shadow-lg">  
          {filteredItems.length > 0 ?   
            filteredItems.map((item:any, index:any) => (  
              <li  
                key={index}  
                onClick={() => handleItemClick(item)}  
                className="px-5 py-2 hover:bg-slate-200 cursor-pointer"  
              >  
                {item}  
              </li>  
            )) : (  
              <li className="px-5 py-2 text-gray-500">No matches found</li>  
            )}  
        </ul>  
      )}  
    </div>  
  );  
};  

export default CustomSelect;