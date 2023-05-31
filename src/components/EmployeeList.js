import React, { useContext } from "react";
import { EmployeeContext } from "./EmployeeContext";
import { FaTrash } from "react-icons/fa";

import "./EmployeeList.css";

const EmployeeList = () => {
    const { state, dispatch } = useContext(EmployeeContext);

    return (
        <div>
            <h1>Lista pracowników:</h1>
            {state.length === 0 ? (
                <p>Brak pracowników do wyświetlenia!</p>
            ) : (
                <div>
                    <div className="employee-list">
                        {state.map((employee) => (
                            <div key={employee.id} className="employee-card">
                                <p>Imię: {employee.name}</p>
                                <p>Wiek: {employee.age}</p>
                                <p>Zawód: {employee.occupation}</p>
                                <p>Pensja: {employee.salary}</p>
                                <button onClick={() => dispatch({ type: "REMOVE_EMPLOYEE", payload: employee.id })}>Usuń <FaTrash color="red" /></button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default EmployeeList;