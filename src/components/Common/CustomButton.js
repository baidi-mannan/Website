import React from 'react';
import { Button, makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
    btn: {
        borderRadius:"30px",
        backgroundColor : "#ffd54f",
        fontSize : "15px",
        fontWeight : "bold",
    },
    primary : {
        backgroundColor : "#ffd54f",
        color : "black",
    },
    secondary : {
        backgroundColor : "#4D4D4D",
        color:"white",
        border : "2px solid #4D4D4D"
    },
    large : {
        maxWidth: "220px",
        width: "40vw"
    },
    medium : {
        maxWidth: "180px",
        width: "32.7vw",
        minWidth: "130px"
    },
    small : {
        maxWidth: "140px",
        width: "25.45vw"
    },
    xsmall : {
        maxWidth: "30px",
        width: "5.45vw"
    },
    outline : {
        width:"fit-content",
        padding:"2px",
        borderRadius:"30px",
        border : "2px solid #ffd54f",
    }
})
const CustomButton = ({ children, outline, size, color, onClick}) => {
    const classes = useStyles();
    return(
        <div className={outline?classes.outline:null}>
            <Button className={`${classes.btn} ${classes[color]} ${classes[size]}`} >
                {children}
            </Button>
        </div>
    )
}

export default CustomButton;