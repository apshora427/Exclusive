import { createContext, useContext, useState } from "react";
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword  } from "firebase/auth";
import { auth } from '../firebase.config'
import { toast } from "react-toastify";

export const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const emailRegex = /^[a-zA-Z0-9._%-]*\d+[a-zA-Z0-9._%-]*@[a-zA-Z0-9.-]+\.com$/
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])^[a-zA-Z\d!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{6,12}$/
  const nameRegex = /^[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/

  const toastify = (type, massage) => {
    type === "success" && toast.success(massage)
    type === "error" && toast.error(massage)
  }


  function addUser(name, email, password) {
    if (name !== "" && email !== "" && password !== "") {
      if (nameRegex.test(name)) {
        if (emailRegex.test(email)) {
          if (passwordRegex.test(password)) {

            createUserWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                toastify("success", "Successfully acount create")

              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                
               if (errorCode.includes("email-already-in-use")) {
                toastify("error", "email-already-in-used")
               }
              });
          } else {
            toastify("error", "The password must be strong")
          }
        } else {
          toastify("error", "Invalid Email")
        }
      } else {
        toastify("error", "number, empty place are taken as invalid username")
      }
    } else {
      toastify("error", "Please fill up the form fully to sign up in Exclusive")
    }
  }
  function LogInUser (email, password){

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  }
  function googleSignUp() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }
  return (
    <UserContext.Provider value={{ currentUser, addUser, googleSignUp, LogInUser }}>
      {children}
    </UserContext.Provider>
  )
}
export default UserProvider

export const UseUser = () => useContext(UserContext)