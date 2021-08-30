import { React } from "react"
import { CustomerList } from "./customers/CustomerList.js"
import { EmployeeList } from "./Employees.js"

export const Repairs = () => {
        return (
            <>
                <h1>Honey Ray's Repairs</h1>

                <p> Customer List </p>
                <CustomerList />
                
                <p>Employees</p>
                <EmployeeList />

                
            </>    
    )
}

//html we write will be in JSX which is a slightly modified JS.