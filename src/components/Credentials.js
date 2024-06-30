import React, { useRef, useState } from 'react'
import validateFields from '../utils/validateFields'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { firebaseAuth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUserDetails } from '../utils/store/userSlice'
import { useNavigate } from 'react-router-dom'
import { setSessionStorage } from '../utils/browserStorageMethods'

const Credentials = () => {

    const [showSigninForm, setShowSigninForm] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)
    const [showLoading, setShowLoading] = useState(false)
    const navigateTo = useNavigate()
    const dispatch = useDispatch()
    const fullName = useRef(null)
    const email = useRef(null)
    const password = useRef(null)

    function handleFormSubmission(event){
        event.preventDefault();
        setErrorMessage(null)
        const validationResult = validateFields(email.current.value,password.current.value)
        if(validationResult){
            setErrorMessage(validationResult)
        } else{
            // firebase register
            setShowLoading(true)
            if(showSigninForm){
                firebaseSignIn()
            } else{
                firebaseSignUp()

            }
        }
    }

    function firebaseSignUp(){
        createUserWithEmailAndPassword(
          firebaseAuth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            onSuccessAuthentication(userCredential.user)
          })
          .catch((err) => {
            setShowLoading(false);
            setErrorMessage(err.message);
          });
    }

    function firebaseSignIn() {
      signInWithEmailAndPassword(
        firebaseAuth,
        email.current.value,
        password.current.value
      )
        .then(userCredential => {
            onSuccessAuthentication(userCredential.user)
        })
        .catch(err => {
          setShowLoading(false);
          setErrorMessage(err.message)
        });
    }

    function onSuccessAuthentication(respUserData){
        const {email, accessToken, photoURL, providerId, uid, reloadUserInfo} = respUserData
        const userDisplayName = fullName.current?.value ?? "Default User"
        const userUpdatedDetails = {email, accessToken, photoURL, providerId, uid, reloadUserInfo, userDisplayName}
        setSessionStorage("userData",userUpdatedDetails)
        dispatch(addUserDetails(userUpdatedDetails))
        navigateTo("/browse")
    }


  return (
    <div className=' w-1/3 absolute ml-8 mt-12 p-8 bg-gray-900 rounded-lg' >
      <form onSubmit={handleFormSubmission} className='ml-8' >
        <p className='text-3xl text-white mb-4' >Sign {!showSigninForm?' Up':' In'}</p>
        { !showSigninForm && <input ref={fullName} className='w-3/4 mt-4 p-3 bg-gray-600 text-white rounded' placeholder='Full Name' type='text' />}        
        <input ref={email} className='w-3/4 mt-4 p-3 bg-gray-600 text-white rounded' placeholder='Email' type='text' />
        <input ref={password} className='w-3/4 mt-4 p-3 bg-gray-600 text-white rounded' placeholder='Password' type='password' />
        {errorMessage && <p className='text-red-600 mt-2' >{errorMessage}</p> }
        <button type='submit' className='w-3/4 mt-4 bg-teal-400 py-1 text-2xl font-semibold text-black rounded' >{ showLoading ? 'Loading...' : ('Sign' + (!showSigninForm?' Up':' In'))}</button>
        <p className='text-white mt-8' > {showSigninForm?'Already a User':'New User'}?  <span className='underline ml-2 cursor-pointer' onClick={()=>{setShowSigninForm(!showSigninForm)}}  > Sign {showSigninForm?' Up':' In'} </span> </p>
      </form>
    </div>
  )
}

export default Credentials
