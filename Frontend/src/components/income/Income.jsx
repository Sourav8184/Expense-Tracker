import React, { useEffect } from "react";
import "./Income.scss";
import { useGlobalContext } from "../../context/GlobalContexts";
import Form from "../form/Form";
import IncomeItem from "../incomeItem/IncomeItem";

function Income() {
  const { incomes, getIncomes, deleteIncome, totalIncome } = useGlobalContext();
  console.log(incomes);

  useEffect(() => {
    getIncomes();
  }, []);

  return (
    <div className="income-container">
      <div className="inner-income-container">
        <h1>Incomes</h1>
        <h2 className="total-income">
          Total Income: <span>${totalIncome()}</span>
        </h2>
        <div className="income-content">
          <div className="form-container">
            <Form />
          </div>
          <div className="incomes">
            {incomes.map((income) => {
              const { _id, title, amount, date, category, description, type } =
                income;
              return (
                <IncomeItem
                  key={_id}
                  id={_id}
                  title={title}
                  description={description}
                  amount={amount}
                  date={date}
                  type={type}
                  category={category}
                  deleteItem={deleteIncome}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Income;
