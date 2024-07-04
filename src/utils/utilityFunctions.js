export const addDebounce = (fun, debounceDelay)=>{
    let timerRef=null
    return function (){
        clearTimeout(timerRef)
        timerRef = setTimeout(()=>{
            fun(...arguments)
        },debounceDelay)
    }
}

export const addhrottling = (fun, throttleDelay) =>{
    let acceptFunctionCall = true
    return function(){
        if(acceptFunctionCall){
            acceptFunctionCall = false
            fun(...arguments)
            setTimeout(()=>{
                acceptFunctionCall = true
            },throttleDelay)
        }
    }
}