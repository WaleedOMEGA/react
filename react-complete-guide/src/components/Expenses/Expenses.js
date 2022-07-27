import Card from "../UI/Card";

import './Expenses.css';
import { useState } from "react";
import ExpensesFilter from "./ExpenseFilter";
import ExpesesList from "./ExpensesList";
const Expenses=(props)=> {
    const [filteredYear, setFilteredYear] = useState('2020');

		const filterChangeHandler = (selectedYear) => {
			setFilteredYear(selectedYear);
	};
	

	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	return (
		<li>
			<Card className="expenses">
				<ExpensesFilter
					selected={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>
				<ExpesesList expenses={filteredExpenses} />
			</Card>
		</li>
	);
}
export default Expenses;