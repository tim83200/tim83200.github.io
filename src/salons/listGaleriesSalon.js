import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles({
    expositionNameSpan: {
        fontFamily: "bold",
        fontSize: "1.2em",
    },
})
const ListGaleriesSalons = ({galerieLocation, galerieName, phoneNumber}) => {
    const classes = useStyles();
        return (
            <li> {galerieLocation} - <span className={classes.expositionNameSpan}>{galerieName}</span> {phoneNumber}</li>
        )
}

export default ListGaleriesSalons