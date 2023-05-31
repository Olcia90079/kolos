import React, { useContext, useEffect, useState } from "react";
import { EmployeeContext } from "./EmployeeContext";

const Statistics = () => {
    const { state } = useContext(EmployeeContext);
    const [averageSalary, setAverageSalary] = useState(0);
    const [averageAge, setAverageAge] = useState(0);

    useEffect(() => {
        const totalSalary = state.reduce((acc, curr) => acc + curr.salary, 0);
        const totalAge = state.reduce((acc, curr) => acc + curr.age, 0);

        setAverageSalary(totalSalary / state.length);
        setAverageAge(totalAge / state.length);
    }, [state]);

    return (
        <div>
            <h1>Statystyki:</h1>
            <p>Średnia pensja: {averageSalary.toFixed(2)}</p>
            <p>Średni wiek: {averageAge.toFixed(2)}</p>
            <hr />
        </div>
    );
};

export default Statistics;