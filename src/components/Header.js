import { signOut } from "firebase/auth"
import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { firebaseAuth } from "../utils/firebase"

const Header = () => {
    const isUserLoggedIn = !!useSelector(store => store.user.userData)
    const navigateTo = useNavigate()

    function firebaseSignOut(){
        signOut(firebaseAuth).then(onfulfilled=>{
            navigateTo("/")
        }).catch(err=>{

        })
    }

    function handleLogoClick() {
      navigateTo(isUserLoggedIn ? "/browse" : "/");
    }

    


    return (
      <div className=" flex w-full justify-between bg-gradient-to-t from-black to-gray-600 px-4 py-2 shadow-lg">
        <img
          className="w-14 cursor-pointer"
          onClick={handleLogoClick}
          alt="logo"
          src="/assets/v_logo.png"
        />
        {isUserLoggedIn ? (
          <>
            <div className="flex cursor-pointer" onClick={firebaseSignOut}>
            <button className="border border-white text-white px-4 my-3 rounded-lg mx-2 hover:border-teal-500 hover:text-teal-500" >Search</button>
            <button className="border border-white text-white px-4 my-3 rounded-lg mx-4 hover:border-teal-500 hover:text-teal-500" >Short Videos</button>
              <img
                className="w-14"
                alt="logo"
                src="/assets/default_user_photo.jpg"
              />
              <span className="text-white my-auto ml-2 text-xl  hover:text-teal-500">sign out</span>
            </div>
          </>
        ) : (
          <Link to={"/login"}>
            {" "}
            <button className="border border-white my-3 text-gray-400 px-4 rounded-lg">
              Sign In/Sign up
            </button>{" "}
          </Link>
        )}
      </div>
    );
}

export default Header