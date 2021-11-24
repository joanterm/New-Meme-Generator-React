import "../Styling/Meme.css"
import localData from "../memeData.js"
import { useState } from "react"

const Meme = () => {

    const [memeImage, setMemeImage] = useState("")

    const getRandomImage = (e) => {
        e.preventDefault()
        const allData = localData.data.memes
        const randomNumber = (Math.floor(Math.random() * allData.length))
        const randomData = allData[randomNumber]
        const randomImage = randomData.url
        setMemeImage(randomImage)
        console.log(randomImage)
    } 

    return ( 
        <section>
            <form action="">
                <div className="form--inputs">
                    <input type="text" placeholder="Top Text"></input>
                    <input type="text"placeholder="Bottom Text"></input>
                </div>
                <button onClick={getRandomImage}>Get a new meme image</button>
            </form>
            <img src={memeImage} className="meme-image" alt=""/>
        </section>
     );
}
 
export default Meme;