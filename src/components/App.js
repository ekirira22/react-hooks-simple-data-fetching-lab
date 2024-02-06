// create your App component here
import React, {useState, useEffect} from "react";

function App(){
    const [isLoaded, setLoaded] = useState(false)
    const [randomDog, setRandomDog] = useState([])
    useEffect(()=>{
        fetch ("https://dog.ceo/api/breeds/image/random")
            .then(res => res.json())
                .then(res => {
                    setRandomDog(res.message)
                    setLoaded(true)
            })
    },[])

    console.log(randomDog)
    if (!isLoaded) return (<p>Loading...</p>)

    return (
        <>
            <img src={randomDog} alt="A Random Dog"></img>

        </>
    )
}

export default App
