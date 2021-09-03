import { React } from "react"
import { CustomerList } from "./customers/CustomerList.js"
import { EmployeeList } from "./Employees.js"
import { TicketList } from "./serviceTickets/TicketList.js"

export const Repairs = () => {
        return (
            <>
                <h1>Honey Ray's Repairs</h1>

                <p> Customer List </p>
                <CustomerList />
                
                <p>Employees</p>
                <EmployeeList />

                <p>Service Tickets</p>
                <TicketList />

                
            </>    
    )
}

//html we write will be in JSX which is a slightly modified JS.