import React, { useEffect, useState} from "react"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([]) //returns an array, gives intital value (empty array) (HOOK)

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


        return (
            <>
                {
                    customers.map(
                        (customerObject) => {
                            return<p key={`customer--${customerObject.id}`}>{customerObject.name}</p>
                        }
                    )
                }
            </>    
    )
}



//html we write will be in JSX which is a slightly modified JS.