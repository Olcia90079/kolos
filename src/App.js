import React from "react";
import { EmployeeProvider } from "./components/EmployeeContext";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import SearchBar from "./components/SearchBar";
import Statistics from "./components/Statistics";

function App() {
  return (
    <EmployeeProvider>
      <Statistics />
      <EmployeeForm />
      <EmployeeList />
      <hr />
      <SearchBar />
    </EmployeeProvider>
  );
}

export default App;