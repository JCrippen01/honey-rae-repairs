import React, { useEffect, useState } from "react"

export const EmployeeList = () => {
    const [employees, changeEmployee] = useState([])
    const [specialties, setSpecial] = useState("")

    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then(res => res.json())
                .then((employeesFromAPI) => {
                    changeEmployee(employeesFromAPI)
                })
        },
        []
    )
//event listener, only watching employee state
    useEffect(() => {
        const justSpecialities = employees.map(emp => emp.specialty)
        setSpecial(justSpecialities.join(", "))
    }, [employees])//watching data change in employees

    

        return (
            <>
                <div>Specialties: { specialties }</div>
                {
                    employees.map(
                        (employeeObject) => { 
                            return<p key={`employee--${employeeObject.id}`}>{employeeObject.name}</p>
                        }
                                      
                    )
                }
            </>    
    )
}



//html we write will be in JSX which is a slightly modified JS.