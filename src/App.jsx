import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [userData,setUserData] = useContext(AuthContext);

  useEffect(() => {              //useeffect is used for performing some task in side stack
    setLocalStorage();                //used to set data in storage 
    getLocalStorage();            // used to get data from storage
  },); 

  // as we want that if we enter admin credentials then admin panel will get open or if we enter employee credentials then employee panel will get open

  const [user, setUser] = useState(null);
  // const [user, setUser] = useState(() => {
  //   const savedUser = localStorage.getItem("loggedInUser");
  //   return savedUser ? JSON.parse(savedUser).role : null;
  // });

  // const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(() => {
    const savedUser = localStorage.getItem("loggedInUser");
    return savedUser ? JSON.parse(savedUser).data : null;
  });

  const [loading, setLoading] = useState(true);  // ✅ Add loading state


  // console.log(authData.employees);
  // console.log(authData.admin)
  // console.log(data);

  //for getting info about who is login

  // useEffect(() => {
  //   if (authData) {
  //     const loggedInUser = localStorage.getItem("loggedInUser");
  //     if (loggedInUser) {
  //       setUser(loggedInUser.role);
  //     }
  //   }
  // }, [authData]);



  // ✅ Ensure that localStorage is checked only once
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    // console.log(loggedInUser);

    if(loggedInUser){
      // console.log("user loggedin hai");
      const userData = JSON.parse(loggedInUser);
      // console.log(userData);
      setUser(userData.role);
      setLoggedInUserData(userData.data)
    }
    setLoading(false); // ✅ Once checked, set loading to false
  },[])




  // ✅ Handle Login
 
  const handleLogin = (email,password) =>{
    if(email == "admin@me.com" && password == "123"){
      localStorage.setItem("loggedInUser",JSON.stringify({role:"admin"}));
      setUser("admin");
    }else if(userData){
      const employee = userData.find((e) => e.email === email && e.password === password)
      if(employee){
        localStorage.setItem("loggedInUser",JSON.stringify({role:"employee",data:employee}));
        setUser("employee");
        setLoggedInUserData(employee);
      }else{
        alert("Invalid Credentials");
      }
    }
    else{
      alert("Invalid Credentials");
    }
  }      

  
  
  if(loading){
    return <h1>Loading...</h1>
  }

  return (
    <>
      {/* agar user nahi hai to login kara do aur agar hai to khali chod do  */}
      {!user ? <Login handleLogin={handleLogin} /> : ""}

      {user == "admin" ? <AdminDashboard changeUser = {setUser} /> : (user == "employee" ? <EmployeeDashboard changeUser = {setUser} data={loggedInUserData} /> : null) }

      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
    </>
  );
};

export default App;





























// const handleLogin = (email, password) => {
//   if (
//     userData 
//   ) {
//     // console.log("This is admin");
//     if(userData.find((e) => email == e.email && password == e.password)){
//       setUser("admin");
//       // console.log(user);
//       localStorage.setItem("loggedInUser",JSON.stringify({role:"admin"}));
//       return;
//     }
//   }
//   if (
//     userData 
//   ) {
//     // console.log("This is user");
//     if(userData.find((e) => email == e.email && password == e.password)){
//       setUser("employee");
//       setLoggedInUserData(userData.find((e) => email == e.email && password == e.password));
//       localStorage.setItem("loggedInUser",JSON.stringify({role:"employee",data:userData.find((e) => email == e.email && password == e.password)}));
//       return;
//     }
//   } 
//   alert("Invalid Credentials");
// };