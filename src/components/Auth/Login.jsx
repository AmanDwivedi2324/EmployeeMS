import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  
  //used for two way binding
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const submitHandler = (e) => {

    //prevent the default feature of form to be rerender
    e.preventDefault();
    handleLogin(email, password);

    // console.log("Email is ", email);
    // console.log("Password is ", password);

    setemail("");
    setpassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20 ">
        <form onSubmit={(e) => {
            submitHandler(e);
          }}className="flex flex-col items-center justify-center">

          <input value={email} onChange={(e) => {
              setemail(e.target.value);
            }}required className="outline-none bg-transparent border-2 border-emerald-600 font-medium py-2 px-6 text-lg text-white rounded-full placeholder:text-gray-400" type="email" placeholder="Enter your email"/>

          <input value={password} onChange={(e) => {
              setpassword(e.target.value);
            }} required className="outline-none bg-transparent border-2 border-emerald-600 mt-3 font-medium py-2 px-6 text-lg text-white rounded-full placeholder:text-gray-400" type="password" placeholder="Enter password" />

          <button className="w-full mt-7 hover:bg-emerald-700 bg-emerald-600 py-2 px-8 border-none text-xl text-white outline-none rounded-full placeholder:text-white"> Log In </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
