export const setSessionStorage = (key, value) => {
    sessionStorage.setItem(key, JSON.stringify(value))
}

export const getSessionStorage = (key) => {
    return JSON.parse(sessionStorage.getItem(key))
}

export const setLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export const getLocalStorage = (key) =>{
    return JSON.parse(localStorage.getItem(key))
}