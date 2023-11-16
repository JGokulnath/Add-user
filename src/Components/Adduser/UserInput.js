import React, { useState } from "react";
import Wrapper from "../Helper/Wrapper";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModule from "../UI/ErrorModule";
import classes from "./Adduser.module.css";
const UserInput = (props) => {
  const [enteredusername, setEnteredUsername] = useState("");
  const [enteredage, setEnteredAge] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState();
  const nameHandler = (event) => {
    setEnteredUsername(event.target.value);
    if (event.target.value.length >= 6) {
      setDisabled(false);
    } else {
      setDisabled(true);
      setError({
        title: "Invalid input",
        message: "Please enter a valid name",
      });
    }
  };
  const ageHandler = (event) => {
    if (event.target.value < 0) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age",
      });
    }
    setEnteredAge(event.target.value);
  };
  const submithandler = (event) => {
    event.preventDefault();
    if (enteredusername.trim().length === 0 || enteredage.trim().length === 0) {
      return;
    }
    const enteredData = {
      id: Math.random().toString(),
      username: enteredusername,
      age: enteredage,
    };
    props.onSaveData(enteredData);
    setEnteredUsername("");
    setEnteredAge("");
    setDisabled(true);
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <Wrapper>
      {error && (
        <ErrorModule
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={submithandler}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={enteredusername}
              onChange={nameHandler}
            />
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <input
              id="age"
              type="number"
              min="0"
              max="200"
              value={enteredage}
              onChange={ageHandler}
            />
          </div>
          <Button type="submit" disabled={disabled}>
            Add user
          </Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default UserInput;
