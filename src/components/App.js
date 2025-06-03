// create your App component here
import React, {useState, useEffect} from "react";
import { data } from "../mocks/data";
// import { handlers } from "../mocks/handlers";
// import { server } from "../mocks/server";
// import { worker } from "../mocks/worker";


function App() {

    const[dog, setDog] = useState(null)

    const[isLoading, setIsLoading] = useState(true)

  
    
    useEffect(() => {
        setIsLoading(true)
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(res => {
                console.log(res)
                return res.json()
            })
            .then(data => {
                console.log(data)
                setDog(data.message)
                setIsLoading(false)
            })
       
    }, [])

    return(
        <div>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <img src={dog} alt="A Random Dog" />
            )}
        </div>
    )
}

export default App;
