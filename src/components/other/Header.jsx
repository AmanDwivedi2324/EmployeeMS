import React from "react";

const Header = (props) => {
  // console.log(data);


  // //log out handling
  // const logOutUser = ()=>{
  //   localStorage.setItem("loggedInUser", "");
  //   props.changeUser("");
  //   // window.location.reload();
  // }   

  const logOutUser = () => {
    localStorage.removeItem("loggedInUser"); // ✅ Remove user data from localStorage
    props.changeUser(null); // ✅ Reset the user state to null
  };  

  return (
    <div className="flex items-end justify-between">
        <h2 className="text-2xl font-medium">Hello <br /> <span className="text-3xl font-semibold">{props.data.firstName} 👋</span></h2>
        <button onClick={logOutUser} className="text-white bg-red-600 font-medium px-5 py-2 rounded-sm">Log Out</button>
    </div>
  );
};
 
export default Header;


