import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import React from 'react';

const CreationDifferentPartFiguratif = ({text1,text2, img1}) => {
    const useStyles = makeStyles({
        picturesFiguratif: {
            width: "6em",
            height: 'auto',
            borderRadius: "0.5em",
        },
    })

const classes = useStyles();
        return (
        <div>
            <Typography variant="picturePartGallery" >
                    <img src={img1} className={classes.picturesFiguratif} alt={text2}/>
            </Typography>
            <Typography variant="h6">
                    {text1}
            </Typography>
        </div>
        )
    }

export default CreationDifferentPartFiguratif