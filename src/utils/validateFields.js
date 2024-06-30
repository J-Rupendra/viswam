const validateFields = (email, password) => {
    if(!(email && password)){
        return "Please enter email and password to proceed"
    }
    const emailValidationRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const passwordValidationRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/  // anything can be present befor but password should include one capital, one small and one digit
    if(!emailValidationRegex.test(email)){
        return "Please enter correct email"
    }
    if(!passwordValidationRegex.test(password)){
        return "Password validation failed"
    }
    return null
}

export default validateFields