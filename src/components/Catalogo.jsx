import React, { useEffect, useState, createContext } from "react";

export const DataContext = createContext();

export const AppContext = ({children}) => {
    const [data, setData] = useState([]);

useEffect(() => {
    fetch('public/featured-movies.json')
        .then(response => response.json())
        .then(datos => setData(datos))
        .catch(error => console.error('Error fetching data: ', error))
}, [])

    return (
    <DataContext.Provider value={{data, setData}}>
        {children}
    </DataContext.Provider>
    )

}

export default AppContext