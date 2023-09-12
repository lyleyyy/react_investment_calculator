import React, { useState } from "react";
import styles from "./CalculateForm.module.css";

const CalculateForm = (props) => {
  const [currentSavings, setCurrentSavings] = useState("");
  const [yearlyContribution, setYearlyContribution] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [duration, setDuration] = useState("");

  const currentSavingsChangeHandler = (e) => {
    setCurrentSavings(e.target.value);
  };

  const yearlyContributionChangehandler = (e) => {
    setYearlyContribution(e.target.value);
  };

  const expectedReturnChangeHandler = (e) => {
    setExpectedReturn(e.target.value);
  };

  const durationChangeHandler = (e) => {
    setDuration(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const userInput = {
      currentSavings: currentSavings,
      yearlyContribution: yearlyContribution,
      expectedReturn: expectedReturn,
      duration: duration,
    };

    props.onClickCal(userInput);
    // setCurrentSavings("");
    // setYearlyContribution("");
    // setExpectedReturn("");
    // setDuration("");
  };

  const onClickReset = () => {
    setCurrentSavings("");
    setYearlyContribution("");
    setExpectedReturn("");
    setDuration("");
    props.onClickReset();
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={currentSavingsChangeHandler}
            value={currentSavings}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={yearlyContributionChangehandler}
            value={yearlyContribution}
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={expectedReturnChangeHandler}
            value={expectedReturn}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onChange={durationChangeHandler}
            value={duration}
          />
        </p>
      </div>
      <p className={styles.actions}>
        <button
          type="reset"
          className={styles["buttonAlt"]}
          onClick={onClickReset}
        >
          Reset
        </button>
        <button
          type="submit"
          className={styles["button"]}
          onClick={props.onClickCal}
        >
          Calculate
        </button>
      </p>
    </form>
  );
};

export default CalculateForm;
