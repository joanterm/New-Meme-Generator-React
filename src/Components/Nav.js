import meme from "../Images/meme.png"
import "../Styling/Nav.css"

const Nav = (props) => { 
    return ( 
        //NEED TO PASS PROPS TO NAV TO CHANGE COLORS OF THE TOGGLER AND ITS CIRCLE
        <nav className={props.darkMode ? "dark" : "light"}>
            <img src={meme} alt="meme"/>
            <h1>Meme Generator</h1>
            <div className="toggler">
                <p className="toggler--light">Light</p>
                <div className="toggler--slider"onClick={props.toggleDarkMode}>
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
            
        </nav>
     );
}
 
export default Nav;