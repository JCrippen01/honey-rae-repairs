import React, { useEffect, useState} from "react"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([]) //returns an array, gives intital value (empty array) (HOOK)

    useEffect(
        () => {   //runs code when certain state changes (event listener)
            fetch("http://localhost:8088/employees")
                .then(res => res.json())
                .then((employeeArray) => {
                    setEmployees(employeeArray)
                })
        }, //runs code when certain state changes (event listener)
        [] //only want this code to run the first time. 

    )


        return (
            <>
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