import "../Styling/Meme.css"
import localData from "../memeData.js"
import { useState } from "react"
import Star from "./Star"
import boxes from "../boxes.js"


const Meme = () => {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemeImages, setAllMemeImages] = useState(localData)

    //GETS A RANDOM IMG FROM A LOCAL DATABASE MEMEDATA.JS --> BUTTON
    const getRandomImage = (e) => {
        e.preventDefault()
        const allData = allMemeImages.data.memes
        const randomNumber = (Math.floor(Math.random() * allData.length))
        const randomData = allData[randomNumber]
        const randomImage = randomData.url
        setMeme((prevValue) => {
            return {
                ...prevValue,
                randomImage: randomImage
            }
        })
    }

    //GETS A NEW VALUE OF INPUTS --> FORM INPUT
    const handleChange = (e) => {
        setMeme((prev) => {
            const {name, value} = e.target
            return {
                ...prev,
                [name]: value
                //[E.TARGET.NAME]: E.TARGET.VALUE
            }
        })
    }
    console.log(meme)

    return ( 
        <section>
            <form action="">
                <div className="form--inputs">
                    <input 
                        type="text" 
                        placeholder="Top Text" 
                        name="topText" 
                        value={meme.topText} 
                        onChange={handleChange}
                    />
                    <input 
                        type="text"
                        placeholder="Bottom Text" 
                        name="bottomText" 
                        value={meme.bottomText} 
                        onChange={handleChange}
                    />
                </div>
                <button onClick={getRandomImage}>Get a new meme image</button>
            </form>
            <div className="meme">
                <img src={meme.randomImage} className="meme-image" alt="meme"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </section>
     );
}
 
export default Meme;

