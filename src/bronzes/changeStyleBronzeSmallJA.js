import Typography from '@mui/material/Typography';
import { styled} from '@mui/material/styles'
import { makeStyles } from '@mui/styles';
import React from 'react';

const CreationDifferentPartBronzeSmall = ({text1,text2,text3,img1}) => {
    const useStyles = makeStyles({
        picturesBronze: {
            width: "15em",
            height: 'auto',
            borderRadius: "0.5em",
            marginRight: "25%",
            marginLeft: "20%"
        },
        textOneItemSmall: {
            fontSize: "1.2em"
        },
        textTwoItemSmall: {
            fontSize: "0.8em"
        },
    })
    const StylesForComponentSmallItems = styled('div')(({ theme }) => ({
        [theme.breakpoints.down('md')]: {
            marginBottom: "8em",
            height: "14em",
        },
    }))
    const RootSmall = styled('div')(({ theme }) => ({
        [theme.breakpoints.down('sm')]: {
            marginLeft:"5em"
        },
    }))
    const classes = useStyles();
    
    return (

        <StylesForComponentSmallItems>
            <Typography>
                <div className={classes.globalItemAndLegendSizeSmall}>
                    <img src={img1} alt={text3} className={classes.picturesBronze}/> 
                    <RootSmall>
                        <div className={classes.textOneItemSmall}>{text1}</div> 
                        <div className={classes.textTwoItemSmall}>{text2}</div> 
                    </RootSmall>
                </div>
            </Typography>
        </StylesForComponentSmallItems>
    )
}


export default CreationDifferentPartBronzeSmall