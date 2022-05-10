import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import React from 'react';

const CreationDifferentPartSculptures = ({text1,text2,img1}) => {
    const useStyles = makeStyles({
        picturesSculptures: {
            width: "8em",
            height: 'auto',
            borderRadius: "0.5em",
        },
    })

const classes = useStyles();
    return (
    <div>
        <Typography variant="picturePartGallery" >
                <img src={img1} alt={text2} className={classes.picturesSculptures}/>
        </Typography>
        <Typography variant="h6">
                {text1}
        </Typography>
    </div>
    )
}
export default CreationDifferentPartSculptures