import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { getSessionStorage } from "../browserStorageMethods"
import { addUserDetails } from "../store/userSlice"

function useCustomRouteGaurd(){

    const isUserLoggedIn = !!useSelector(store =>store.user.userData)
    const navigateTo = useNavigate()
    const dispatch = useDispatch()
    
    useEffect(() => {
      const userSessionData = getSessionStorage("userData");
      if (!isUserLoggedIn && !userSessionData) {
        navigateTo("/login");
      } else if(!isUserLoggedIn) {
        dispatch(addUserDetails(userSessionData));
      }
    }, []);
}

export default useCustomRouteGaurd