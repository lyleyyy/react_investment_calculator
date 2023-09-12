import React from "react";
import styles from "./Result.module.css";

const Result = (props) => {
  const resultForDisplay = props.calculateResult;
  const arr = [];
  let ttlInterest = 0;

  // use like this:
  // formatter.format(yourValue);
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  for (const result of resultForDisplay) {
    ttlInterest =
      ttlInterest + parseFloat(parseFloat(result.yearlyInterest).toFixed(2));
    const display = {
      key: result.year.toString(),
      year: result.year.toString(),
      totalSavings: formatter.format(result.savingsEndOfYear.toFixed(2)),
      interest: formatter.format(result.yearlyInterest.toFixed(2)),
      totalInterest: formatter.format(ttlInterest.toFixed(2)),
      capital: formatter.format(
        Math.floor(parseFloat(result.savingsEndOfYear) - ttlInterest).toFixed(2)
      ),
    };
    arr.push(display);
    console.log(display);
  }

  return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>YEAR NUMBER</td>
          <td>TOTAL SAVINGS END OF YEAR</td>
          <td>INTEREST GAINED IN YEAR</td>
          <td>TOTAL INTEREST GAINED</td>
          <td>TOTAL INVESTED CAPITAL</td>
        </tr>
        {arr.map((item) => {
          return (
            <tr>
              <td>{item.year}</td>
              <td>{item.totalSavings}</td>
              <td>{item.interest}</td>
              <td>{item.totalInterest}</td>
              <td>{item.capital}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Result;
