import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { styled} from '@mui/material/styles'
import Grid from '@mui/material/Grid';
import React, { useState } from 'react';
import TitlePartChoice from '../title/titleDifferentsPartsJA';
import { ThemeProvider, createTheme  } from '@mui/material/styles';
import CreationDifferentPartBronze from './changeStyleBronzeJA';
import { makeStyles } from '@mui/styles';
import CreationDifferentPartBronzeSmall from './changeStyleBronzeSmallJA';
import jacobBig from '../pictures/bronzes/JacobBig.jpg';
import jacobSmall from '../pictures/bronzes/JacobSmall.jpg';
import anoukBig from '../pictures/bronzes/AnoukBig.jpg';
import anoukSmall from '../pictures/bronzes/AnoukSmall.jpg';
import balthazarBig from '../pictures/bronzes/BalthazarBig.jpg';
import balthazarSmall from '../pictures/bronzes/BalthazarSmall.jpg';
import leonSmall from '../pictures/bronzes/LeonSmall.jpg';
import leonBig from '../pictures/bronzes/LeonBig.jpg';
import williamSmall from '../pictures/bronzes/WilliamSmall.jpg';
import williamBig from '../pictures/bronzes/WilliamBig.jpg';
import pommeSmall from '../pictures/bronzes/PommeSmall.jpg';
import pommeBig from '../pictures/bronzes/PommeBig.jpg';
import gustaveSmall from '../pictures/bronzes/GustaveSmall.jpg';
import gustaveBig from '../pictures/bronzes/GustaveBig.jpg';

const themeBronzeJA = createTheme({
    typography: {
      h6: {
        color: "black",
        fontFamily: "Fredoka",
        fontSize: '1em',
        textAlign: 'center',
        marginBottom: "1em",
      },
      button: {
        color: "black", 
        fontSize: "0.8em",
      },
    }
})
const ChangePagination = styled('div')(({ theme }) => ({
    [theme.breakpoints.down('lg')]: {
    display: "flex",
    paddingLeft:"1em",
    },
    [theme.breakpoints.down('xl')]: {
    display: "flex",
    marginLeft: "0.2em"
    },
    [theme.breakpoints.up('xl')]: {
        display: "flex",
        marginTop: "4em",
    },
    [theme.breakpoints.up('lg')]: {
        display: "flex",
        marginTop: "5em",
        marginLeft: "-3em",
    }
}))
const BigPictureRightPart = styled('div')(({ theme }) => ({
    [theme.breakpoints.down('lg')]: {
        marginRight: "0",
        marginLeft: "-10em"
    },
}))
const Root = styled('div')(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
        marginLeft: "3em",
        borderRadius: "0.5em",
    },
    [theme.breakpoints.up('md')]: {
        width: "40%",
        marginRight: "-10em",
    },
    [theme.breakpoints.up('xl')]: {
        marginLeft: "25em",
        marginRight:"20em",
        border:"2px solid pink"
    },
}))
const BigBronzes = styled('div')(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        display: 'none'
    },
    [theme.breakpoints.up('md')]: {
        marginBottom: "15em",
        marginRight: "-10em",
        marginLeft:"0em",
    }
}))
const SmallBronzes = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        display: 'none',
    },
    [theme.breakpoints.down('sm')]: {
        width: '100%',
        marginRight: "0em",
        marginLeft: "-2em",
    }
}))
const LeftPart = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('xl')]: {
        border:"2px solid purple",
        paddingTop: "30em",
        marginLeft: "0",
        width: "20%",
        marginRight: "0"
    },
    [theme.breakpoints.down('lg')]: {
        marginTop: "4em",
        marginRight: "-15em",
    },
    [theme.breakpoints.up('lg')]: {
        marginRight: "-10em",
        marginLeft: "5em",
        paddingTop: "3em",
        marginBottom: "22em",
    },
    [theme.breakpoints.up('md')]: {
        marginTop: "2em",
        marginRight: "0em"
    }
}))
const ArrowsNumbersPagesSlide = styled('div')(({ theme }) => ({
    [theme.breakpoints.down('lg')]: {
        marginRight: "3em"
    },
    [theme.breakpoints.up('lg')]: {
        marginLeft: "2em",
    }
}))
const NumbersPagesSlide = styled('div')(({ theme }) => ({
    [theme.breakpoints.down('xl')]: {
        marginLeft: "3em",
        display: "flex"
    },
    [theme.breakpoints.down('lg')]: {
        marginLeft: "0em",
    },
    [theme.breakpoints.up('xl')]: {
        display: "flex",
        marginTop: "-0.5em"
    },
}))


const TextUnderBigPicture = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('lg')] : {
        width: "30%",
        marginTop: "10em",
        marginLeft: "5em"
    },
    [theme.breakpoints.down('lg')] : {
        width: "50%",
        marginTop: "7em",

    },
    [theme.breakpoints.up('xl')] : {
        width: "50%",
        marginTop: "8em",
        marginLeft: "4em"

    },
}))
const useStyles = makeStyles({
        picturesChangeBronze: {
            width: "auto",
            height: '45vh',
            marginTop: '3em',
            borderRadius: "0.5em",
            marginBottom: "-6em"
        },
        legendOfTheBigPicture: {
            width: "150%",
            marginTop: "15%",
            fontSize: "1.5em",
        },
        theSizeOfTheBronze: {
            fontSize: "1em",
            width: "150%",
        },
        completePartSwapBigPicture: {
            display: "flex",
            textAlign: "center"
        },
        partFacesPictures: {
            display:"flex",
            width:"100%"
        }
    })

const Bronzes = () => {

    var [srcPicture, changeSrcPicture] = useState(jacobBig);
    var [sizeBronze, setSizeBronze] = useState('12 x 8 x 32 cm # 3,1 kg')
    var [legend, setLegend] = useState('Jacob')
    var [keyOfSlidingItems, setKeyOfSlidingItems] = useState(0)
    var slideItems = document.getElementsByClassName('changingPictureBySlideFunction');
    var etape = 0 ;
    let slideItemsLength = slideItems.length;

    const removeOpacity = () => {
        for (let i = 0 ; i < slideItems.length; i++) {
            slideItems[i].classList.remove('active')
        }
    }
    const addActiveClassToItems = () => {
        removeOpacity();
        slideItems[keyOfSlidingItems].classList.add('active')
    }
    const changeSlideItemNext = () => {
        etape++;
        if (etape >= slideItemsLength) {
            etape = 0;
        }
        removeOpacity();
        slideItems[etape].classList.add('active')
    }
    const changeSlideItemBefore = () => {
        etape--;
        if (etape < 0) {
            etape = slideItemsLength -1;
        }
        removeOpacity();
            slideItems[etape].classList.add('active')
    }

    const classes = useStyles();

    return (

    <ThemeProvider theme={themeBronzeJA}>

    <TitlePartChoice title="Bronzes"/>

    <BigBronzes>

        <Grid container md={12}>

            <LeftPart>

            <Grid item md={3} marginTop="3em" >

                <Grid container md={12}>

                    <div className="changingPictureBySlideFunction active">
                    
                    <Grid item md={6} marginLeft="2.5em">
                    
                        <div onClick={() => {setLegend('Jacob'); changeSrcPicture(jacobBig); setSizeBronze('12 x 8 x 32 cm # 3.1 kg')}}>
                            <CreationDifferentPartBronze 
                                text1="Jacob"
                                img1={jacobSmall}
                                text2="sculpture en bronze du nom de 'jacob' "
                        />
                        </div>

                        <div onClick={() => {setLegend('Anouk'); changeSrcPicture(anoukBig); setSizeBronze('8 x 9 x 33 cm # 3 kg')}}>
                            <CreationDifferentPartBronze 
                                text1= "Anouk"
                                img1={anoukSmall}
                                text2="sculpture en bronze du nom de 'anouk' "
                        />
                        </div>

                        <div onClick={() => {setLegend('Léon'); changeSrcPicture(leonBig); setSizeBronze('17 x 11 x 33 cm # 3,8 kg')}}>        
                            <CreationDifferentPartBronze 
                                text1="Léon"
                                img1={leonSmall}
                                text2="sculpture en bronze du nom de 'leon' "
                        />
                        </div>

                    </Grid>

                    <Grid item md={6} marginLeft="2.5em">

                        <div onClick={() => {setLegend('Balthazar'); changeSrcPicture(balthazarBig); setSizeBronze('8 x 12 x 31 cm # 2.9 kg')}}>
                            <CreationDifferentPartBronze 
                                text1="Balthazar"
                                img1={balthazarSmall}
                                text2="sculpture en bronze du nom de 'balthazar' "
                        />
                        </div>
                        
                        <div onClick={() => {setLegend('Pomme'); changeSrcPicture(pommeBig); setSizeBronze('11 x 17 x 36 cm # 3,5 kg')}}>
                            <CreationDifferentPartBronze
                                text1="Pomme"
                                img1={pommeSmall}
                                text2="sculpture en bronze du nom de 'pomme' "
                        />
                        </div>
                        
                        <div onClick={() => {setLegend('William'); changeSrcPicture(williamBig); setSizeBronze('11 x 7 x 29 cm # 2,3 kg')}}>
                            <CreationDifferentPartBronze 
                                text1="William"
                                img1={williamSmall}
                                text2="sculpture en bronze du nom de 'william' "
                        />
                        </div>

                    </Grid>

                </div>    

                <div className="changingPictureBySlideFunction">

                    <Grid item md={6} marginLeft="2.5em">

                        <div onClick={() => {setLegend('Gustave'); changeSrcPicture(gustaveBig); setSizeBronze('9 x 16 x 30 cm # 3,6 kg')}}>
                            <CreationDifferentPartBronze 
                                text1="Gustave"
                                img1={gustaveSmall}
                                text2="sculpture en bronze du nom de 'gustave' "
                        />
                        </div>

                    </Grid>

                </div>
                <ChangePagination>
                    <Grid item lg={2} md={2} xl={6}>
                        <ArrowsNumbersPagesSlide>
                            <div id="previous">
                            <Button className={classes.buttonArrowBack} onClick={() => {changeSlideItemBefore()}}><ArrowBackIcon color="action"/></Button>
                            </div>
                        </ArrowsNumbersPagesSlide>
                    </Grid>

                    <NumbersPagesSlide>
                        <Button variant="buttonNumber" onClick={() => {addActiveClassToItems(setKeyOfSlidingItems(0))}}>1</Button>
                        <span>...</span>
                        <Button variant="buttonNumber" onClick={() => {addActiveClassToItems(setKeyOfSlidingItems(3))}}>4</Button>
                    </NumbersPagesSlide>

                    <Grid item lg={2} md={1}>
                        <ArrowsNumbersPagesSlide>
                            <div id="following">
                                <Button className={classes.buttonArrowNext} onClick={() => {changeSlideItemNext()}}><ArrowForwardIcon color="action"/></Button>
                            </div>  
                        </ArrowsNumbersPagesSlide>
                    </Grid>           

                </ChangePagination>

               </Grid>
            </Grid>

            </LeftPart>

            <Grid item md={5}>
                <Root>
                    <BigPictureRightPart>
                        <img src={srcPicture} alt='sculpture en bronze du nom de jacob'  className={classes.picturesChangeBronze}/>
                        </BigPictureRightPart>
                        <TextUnderBigPicture>
                        <div className={classes.legendOfTheBigPicture}>{legend}</div> 
                        <div className={classes.theSizeOfTheBronze}>  <br/>{sizeBronze}</div>
                        </TextUnderBigPicture>
                </Root>
            </Grid>
        </Grid>
    
        </BigBronzes>

        <SmallBronzes>
            
        <CreationDifferentPartBronzeSmall 
                text1="Jacob"
                text2="12 x 8 x 32 cm # 3,1 kg"
                img1={jacobBig} 
                text3="sculpture en bronze version mobile du nom de 'jacob' "
            />

            <CreationDifferentPartBronzeSmall 
                text1="Anouk"
                text2="8 x 9 x 33cm # 3 kg"
                img1={anoukBig} 
                text3="sculpture en bronze version mobile du nom de 'anouk' "
            />

            <CreationDifferentPartBronzeSmall 
                text1="Balthazar"
                text2="8 x 12 x 32 cm # 2,9 kg"
                img1={balthazarBig} 
                text3="sculpture en bronze version mobile du nom de 'balthazar' "
            />

            <CreationDifferentPartBronzeSmall 
                text1="Pomme"
                text2="11 x 17 x 36 cm # 3,5 kg"
                img1={pommeBig} 
                text3="sculpture en bronze version mobile du nom de 'pomme' "
            />

            <CreationDifferentPartBronzeSmall 
                text1="Léon"
                text2="17 x 11 x 33 cm # 3,8 kg"
                img1={leonBig} 
                text3="sculpture en bronze version mobile du nom de 'leon' "
            />

             <CreationDifferentPartBronzeSmall 
                text1="William"
                text2="11 x 7 x 29 cm # 2,3 kg"
                img1={williamBig} 
                text3="sculpture en bronze version mobile du nom de 'william' "
            />
              <CreationDifferentPartBronzeSmall 
                text1="Gustave"
                text2="9 x 16 x 30 cm # 3,6 kg"
                img1={gustaveBig} 
                text3="sculpture en bronze version mobile du nom de 'gustave' "
            />
            
        </SmallBronzes>

    </ThemeProvider>
  )
}

export default Bronzes;
