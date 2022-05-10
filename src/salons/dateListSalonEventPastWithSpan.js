import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles({
    listEvent: {
        listStyleType: "none",
        textAlign: "left",
    },
    expositionName: {
        fontFamily: "bold",
        fontSize: "1.2em"
    }
})

const DateListEventPastWithSpan = ({date, salonName, salonLocation}) => {
    const classes = useStyles();
        return (
            <li className={classes.listEvent}>{date} 
            <span className={classes.expositionName}> {salonName} </span>
            {salonLocation}</li>
        )
}

export default DateListEventPastWithSpan