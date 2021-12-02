const Star = (props) => {

    const styles = {
        backgroundColor: props.on ? "#222222" : "#cccccc"
    }

    const passToggle = () => {
        return props.toggleMe(props.ida)
    }
    return ( 
        <div>
            <p className="box" style={styles} onClick={passToggle}></p>
        </div>
     );
}

export default Star;
