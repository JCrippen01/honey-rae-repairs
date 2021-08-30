import React, { useEffect, useState} from "react"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([]) //returns an array, gives intital value (empty array) (HOOK)
    const [totalCustomerMessage, updateMessage] = useState("")
    useEffect(
        () => {   //runs code when certain state changes (event listener)
            fetch("http://localhost:8088/customers")
                .then(res => res.json())
                .then((customerArray) => {
                    setCustomers(customerArray)
                })
        }, //runs code when certain state changes (event listener)
        [] //only want this code to run the first time. 

    )
    useEffect(
        () => { 
            if (customers.length === 1) {
                updateMessage(`You have 1 customer`)

            } 
            else {
                updateMessage(`You have a total of ${customers.length} customers`)
            }
        },
        [customers]
    )

        return (
            <>
                <div>{totalCustomerMessage}</div>
                {
                    customers.slice(0, 5).map(
                        (customerObject) => {
                            return<p key={`customer--${customerObject.id}`}>{customerObject.name}</p>
                        }
                    )
                }
            </>    
    )
}



//html we write will be in JSX which is a slightly modified JS.