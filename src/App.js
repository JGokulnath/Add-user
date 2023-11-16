import React, { useState } from "react";
import "./App.css";
// import Home from "./Components/sample/Home";
import "bootstrap/dist/css/bootstrap.min.css";
// import Showflight from "./Components/sample/Showflight";
import UserInput from "./Components/Adduser/UserInput";
import UserList from "./Components/Adduser/UserList";
function App() {
  const [usersList, setUsersList] = useState([]);
  const addNewUser = (enteredData) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, enteredData];
    });
  };
  return (
    <>
      <UserInput onSaveData={addNewUser} />
      <UserList users={usersList} />
      {/* <Home />
      <Showflight /> */}
    </>
  );
}

export default App;
