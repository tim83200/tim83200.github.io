import { makeStyles } from '@mui/styles';
import React from 'react';

const ListEventPast = ({dateLocation}) => {
    const useStyles = makeStyles({
        eventList: {
            listStyleType: "none",
            textAlign: "left",
        },
    })

const classes = useStyles();
        return (
            <li className={classes.eventList}>{dateLocation} </li>
        )
}

export default ListEventPast