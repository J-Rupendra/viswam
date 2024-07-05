import { useEffect, useRef } from "react"

const useDebounce = (fun, debounceDelay)=>{
    const timerRef= useRef(null)

    useEffect(()=>{
        
        return () => {
            if(timerRef.current){
                clearTimeout(timerRef.current)
            }
        }
    },[])


    return function (){
        if(timerRef.current){
            clearTimeout(timerRef.current)
        }
        timerRef.current = setTimeout(()=>{
            fun(...arguments)
        },debounceDelay)
    }
}

export default useDebounce