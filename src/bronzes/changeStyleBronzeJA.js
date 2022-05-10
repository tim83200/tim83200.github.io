import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import React from 'react';

const CreationDifferentPartBronze = ({text1,text2, img1}) => {
    const useStyles = makeStyles({
        picturesBronze: {
            width: "5em",
            height: 'auto',
            borderRadius: "0.5em",
        },
    })

    const classes = useStyles();
    
    return (
    <div>
        <Typography variant="picturePartGallery">
                <img src={img1} className={classes.picturesBronze} alt={text2}/>
        </Typography>
        <Typography variant="h6">
                {text1}
        </Typography>
    </div>
    )
}
export default CreationDifferentPartBronze