import meme from "../Images/meme.png"
import "../Styling/Nav.css"

const Nav = () => {
    return ( 
        <nav>
            <img src={meme} alt="meme"/>
            <h1>Meme Generator</h1>
        </nav>
     );
}
 
export default Nav;