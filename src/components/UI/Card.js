import './Card.css'

// CONTAINER AS A SHELL
function Card(props) {
    // IMPORTANT SPACE AFTER 'CARD ' MUCHO OCCHIO
     const classes = 'card ' + props.className
    return(
        <div className={classes}>{props.children}</div>
    )
}

export default Card;