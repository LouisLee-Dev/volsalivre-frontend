export const getFromLocalStorage = (key: string) => {
  if (!key || typeof window === 'undefined') {
    return ""
  }
  return localStorage.getItem('token')
}
export const setFromLocalStorage = (key: string) => {
  if (!key || typeof window === 'undefined') {
    return ""
  }
  localStorage.setItem('token', key)
}
export const removeFromLocalStorage = (key: string) => {
  if (!key || typeof window === 'undefined') {
    return ""
  }
  localStorage.removeItem('token')
}

export const setUserRole = (key: string) => {
  if (!key || typeof window === 'undefined') {
    return ""
  }
  localStorage.setItem('role', key)
}

export const getUserRole = () => {  
  return localStorage.getItem('role')
}

export const removeUserRole = (key: string) => {
  if (!key || typeof window === 'undefined') {
    return ""
  }
  localStorage.removeItem('role')
}

export const getUserId = () => {
  return localStorage.getItem('user_id');
}

export const setUserId = (key: string) => {
  if (!key || typeof window === 'undefined') {
    return ""
  }
  localStorage.setItem('user_id', key);
}

export const removeUerId = () => {
  localStorage.removeItem('user_id');
}