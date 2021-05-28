import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import "./CourseInput.css";

interface CourseInputProps {
  onAddGoal: (enteredValue: string) => void;
}

const CourseInput: React.FC<CourseInputProps> = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const goalInputChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler: React.FormEventHandler<HTMLFormElement> = (
    event
  ) => {
    event.preventDefault();
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
