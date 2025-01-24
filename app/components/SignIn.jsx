"use client"

import { useRef, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";


const SignIn = ({type}) => {
    const userName=useRef()
    const email =useRef()
    const password=useRef()
    const [NameErr, setNameErr] = useState(false);
    const [EmailEmp, setEmailEmp] = useState(false);
    const [EmailErr, setEmailErr] = useState(false);
    const [PassEmp, setPassEmp] = useState(false);
    const [PassErr, setPassErr] = useState(false);
    const router=useRouter()
    
  
 const validateEmail = (email) => {
   const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   return re.test(String(email).toLowerCase());
 };
  const navigateToPage = (pathname) => {
    // Navigate to the '/about' page with query parameters
    router.push(pathname);
  };

 const handleSubmit =async (event) => {
   event.preventDefault();
   const userNameValue = userName.current?.value;
   const emailValue = email.current.value;
   const passwordValue = password.current.value;

   let valid = true;
   if(type=='Sign Up'){
     if (!userNameValue) {
       setNameErr(true);
       valid = false;
     } else {
       setNameErr(false);
     }
   }
  

   if (!emailValue) {
     setEmailEmp(true);
     valid = false;
   } else {
     setEmailEmp(false);
   }

   if (emailValue && !validateEmail(emailValue)) {
     setEmailErr(true);
     valid = false;
   } else {
     setEmailErr(false);
   }

   if (!passwordValue) {
     setPassEmp(true);
     valid = false;
   } else {
     setPassEmp(false);
   }
     if (type == "Sign Up") {
       if (passwordValue && passwordValue.length <= 5) {
         setPassErr(true);
         valid = false;
       } else {
         setPassErr(false);
       }

     }
  
   if (valid) {
    //  // All validations passed
    //  console.log("Form Submitted", {
    //    userName: userNameValue,
    //    email: emailValue,
    //    password: passwordValue,
    //  });
     // Perform further actions like submitting to server
     if(type=='Sign Up'){
       console.log("started");
        let data = await axios.post("http://localhost:3000/api/user/signIn", {
          username: userNameValue,
          email: emailValue,
          password: passwordValue,
        });
        let data2 = data.data;
        data2 = data2.user;

        alert(type);
     }
     else{
        console.log("started");
        let data = await axios.post("http://localhost:3000/api/user/login", {
          email: emailValue,
          password: passwordValue,
        });
        let data2 = data.data;
        data2 = data2.user; 
        console.log(data2._id);
        alert("success");
        navigateToPage("/")
     }
     

   }
 };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-200 border-solid border-black border-2 w-1/3 p-4 flex flex-col"
    >
      {type == "Sign Up" ? <h2>Sign Up</h2> : <h2>Login</h2>}
      {type == "Sign Up" && (
        <div className="my-1 flex flex-col">
          <span className="my-1">Username</span>
          <input ref={userName}></input>
          {NameErr && (
            <small className="text-red-600 text-[1rem] ">
              Please enter the name
            </small>
          )}
        </div>
      )}

      <div className="my-1 flex flex-col">
        <span className="my-1">email</span>
        <input ref={email}></input>
        {EmailEmp && (
          <small className="text-red-600 text-[1rem] ">
            Please enter the email
          </small>
        )}
        {EmailErr && (
          <small className="text-red-600 text-[1rem] ">Invalid email.</small>
        )}
      </div>
      <div className="my-1 flex flex-col">
        <span className="my-1">password</span>
        <input ref={password}></input>
        {PassEmp && (
          <small className="text-red-600 text-[1rem] ">
            Please enter the password
          </small>
        )}
        {PassErr &&
          (type === "Sign Up" ? (
            <small className="text-red-600 text-[1rem]">
              Password must have at least 6 characters
            </small>
          ) : (
            <small className="text-red-600 text-[1rem]">
              Incorrect password
            </small>
          ))}
      </div>
      <div className="my-1 flex justify-end">
        <button className="bg-[#151515] text-white px-2 py-1" type="submit">
          {type}
        </button>
      </div>
      <div>
        {type == "Sign Up" ? (
          <span>
            Already have an account ?{" "}
            <span
              onClick={() => {
                navigateToPage("/login");
              }}
            >
              Log In
            </span>
          </span>
        ) : (
          <span>
            Don't have an account ?{" "}
            <span
              onClick={() => {
                navigateToPage("/signIn");
              }}
            >
              Log In
            </span>
          </span>
        )}
      </div>
    </form>
  );
}

export default SignIn
