import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles({
    dateYearsOfSalons: {
        listStyleType: "none",
        textAlign: "left",
        marginTop: "2em",
        fontStyle: "20px",
    },
})
const DateListEventPast = ({date}) => {
    const classes = useStyles();

        return (
            <li className={classes.dateYearsOfSalons}>{date}</li>
        )
    }
export default DateListEventPast