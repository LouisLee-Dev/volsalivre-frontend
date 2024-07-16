export const getFromLocalStorage = (key:string) => {
  if (!key || typeof window === 'undefined') {
      return ""
  }
  return localStorage.getItem('token')
}
export const setFromLocalStorage = (key:string) => {
  if (!key || typeof window === 'undefined') {
      return ""
  }
  localStorage.setItem('token', key)
}
export const removeFromLocalStorage = (key:string) => {
  if (!key || typeof window === 'undefined') {
      return ""
  }
  localStorage.removeItem('token')
}