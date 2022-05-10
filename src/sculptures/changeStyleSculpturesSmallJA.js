import Typography from '@mui/material/Typography';
import { styled} from '@mui/material/styles'
import { makeStyles } from '@mui/styles';
import React from 'react';

const CreationDifferentPartSculptureSmall = ({text1,text2,text3,img1}) => {
    const useStyles = makeStyles({
        picturesSculptures: {
            width: "13em",
            height: 'auto',
            borderRadius: "0.5em",
            marginRight: "25%",
            marginLeft: "30%",
        },
        textOneItemSmall: {
            fontSize: "1.2em",
        },
        textTwoItemSmall: {
            fontSize: "0.8em",
        },
        secondPictureOfSmallItems: {
            height: "13em",
            marginRight: "2em",
            marginTop: "5em",
        }
    })
    const StylesForComponentSmallItems = styled('div')(({ theme }) => ({
        [theme.breakpoints.down('md')]: {
            marginBottom: "3em",
            marginTop:"15%",
            height: "14em",
        },
        [theme.breakpoints.down('md')]: {
            marginBottom: "2em",
        },
    }))
    const SmallTextSculptures = styled('div')(({ theme }) => ({
        [theme.breakpoints.down('xl')]: {
            marginLeft: "5em"
        },
    }))
    const classes = useStyles();
        return (
            <StylesForComponentSmallItems>
                    <Typography>
                            <img src={img1} alt={text3} className={classes.picturesSculptures}/> 
            <SmallTextSculptures>
                            <div className={classes.textOneItemSmall}>{text1}</div> 
                            <div className={classes.textTwoItemSmall}>{text2}</div> 
                            </SmallTextSculptures>
                    </Typography>
            </StylesForComponentSmallItems>
        )
}
export default CreationDifferentPartSculptureSmall