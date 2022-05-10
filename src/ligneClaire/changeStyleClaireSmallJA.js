import Typography from '@mui/material/Typography';
import { styled} from '@mui/material/styles'
import { makeStyles } from '@mui/styles';
import React from 'react';

const CreationDifferentPartClearSmall = ({text1,text2,text3,img1}) => {
    const useStyles = makeStyles({
        picturesClaires: {
            width: "13em",
            height: 'auto',
            borderRadius: "0.5em",
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

    const classes = useStyles();
        return (
            <StylesForComponentSmallItems>
                    <Typography>
                        <img src={img1} alt={text3} className={classes.picturesClaires}/> 
                        <div className={classes.textOneItemSmall}>{text1}</div> 
                        <div className={classes.textTwoItemSmall}>{text2}</div> 
                    </Typography>
            </StylesForComponentSmallItems>
        )
}


export default CreationDifferentPartClearSmall