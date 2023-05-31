import React, { useContext, useMemo, useState } from "react";
import { EmployeeContext } from "./EmployeeContext";

const SearchBar = () => {
  const { state } = useContext(EmployeeContext);
  const [search, setSearch] = useState("");

  const filteredEmployees = useMemo(() => {
    if (!search) return state;
    return state.filter((employee) => employee.name.includes(search));
  }, [search, state]);

  return (
    <div>
      <h1>Wyszukiwarka:</h1>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      {filteredEmployees.map((employee) => (
        <div key={employee.id}>
          <p>{employee.name}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchBar;