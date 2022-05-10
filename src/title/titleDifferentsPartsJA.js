import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    h1: {
        color: "#757575",
        fontSize: "2em",
        fontFamily: "Alegreya Sans SC",
        textAlign: "center",
        marginTop: "2em"
    },
})
const TitlePartChoice = ({title}) => {
    const classes = useStyles();
    return( 
        <h1 fontSize='large' className={classes.h1}>{title}</h1>
    )
}
export default TitlePartChoice;