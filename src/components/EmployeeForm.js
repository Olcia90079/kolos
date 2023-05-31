import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { v4 as uuidv4 } from 'uuid';
import { EmployeeContext } from "./EmployeeContext";
import { FaCalendarPlus } from "react-icons/fa";

const validate = values => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Required';
    }

    if (!values.age) {
        errors.age = 'Required';
    } else if (isNaN(values.age)) {
        errors.age = 'Must be a number';
    } else if (values.age <= 0) {
        errors.age = 'Must be greater than 0';
    }

    if (!values.occupation) {
        errors.occupation = 'Required';
    }

    if (!values.salary) {
        errors.salary = 'Required';
    } else if (isNaN(values.salary)) {
        errors.salary = 'Must be a number';
    } else if (values.salary <= 0) {
        errors.salary = 'Must be greater than 0';
    }

    return errors;
}

const EmployeeForm = () => {
    const { dispatch } = useContext(EmployeeContext);

    return (
        <div>
            <h1>Dodaj pracownika:</h1>
            <Formik
                initialValues={{ name: "", age: "", occupation: "", salary: "" }}
                validate={validate}
                onSubmit={(values) => {
                    dispatch({ type: "ADD_EMPLOYEE", payload: { id: uuidv4(), ...values } });
                }}
            >
                {() => (
                    <Form>
                        <Field name="name" placeholder="Imię..." />
                        <ErrorMessage name="name" component="div" />
                        <Field name="age" type="number" placeholder="Wiek..." />
                        <ErrorMessage name="age" component="div" />
                        <Field name="occupation" placeholder="Zawód..." />
                        <ErrorMessage name="occupation" component="div" />
                        <Field name="salary" type="number" placeholder="Zarobki..." />
                        <ErrorMessage name="salary" component="div" />
                        <button type="submit">Dodaj pracownika <FaCalendarPlus /></button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default EmployeeForm;