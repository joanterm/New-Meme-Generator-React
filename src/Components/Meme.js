import "../Styling/Meme.css"
import { useEffect, useState } from "react"

const Meme = (props) => {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemesData, setAllMemeData] = useState([])


    //FETCH DATA FROM API AND SET UP AS ALLMEMESDATA
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data.data.memes)
            setAllMemeData(data.data.memes)
        })
    }, [])

    //GETS A RANDOM IMG FROM ALLMEMESDATA --> BUTTON
    const getRandomImage = (e) => {
        e.preventDefault()
        const randomNumber = (Math.floor(Math.random() * allMemesData.length))
        const randomData = allMemesData[randomNumber]
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
        <section className={props.darkMode ? "dark" : "light"}>
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

