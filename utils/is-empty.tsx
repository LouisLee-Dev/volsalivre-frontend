// utils/isEmpty.ts  
export const isArrayEmpty = (arr: any[]): boolean => {  
    return Array.isArray(arr) && arr.length === 0;  
  };  
  
  export const isObjectEmpty = (obj: object): boolean => {  
    return obj && typeof obj === 'object' && Object.keys(obj).length === 0;  
  };  
  
  export const isEmpty = (input: any): boolean => {  
    if (Array.isArray(input)) {  
      return isArrayEmpty(input); // Check for empty array  
    } else if (input && typeof input === 'object') {  
      return isObjectEmpty(input); // Check for empty object  
    } else if (input && typeof input === 'string') {
      return input.trim().length === 0; // Check for empty
    }
    return !input; // Treat anything other than arrays and objects as empty  
  };