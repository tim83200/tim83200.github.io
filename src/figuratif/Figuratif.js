import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import { styled} from '@mui/material/styles'
import Grid from '@mui/material/Grid';
import React, { useState } from 'react';
import TitlePartChoice from '../title/titleDifferentsPartsJA';
import { ThemeProvider, createTheme  } from '@mui/material/styles';
import CreationDifferentPartFiguratif from './changeStyleFiguratifJA';
import '../css/differentsPartCss.css'
import { makeStyles } from '@mui/styles';
import CreationDifferentPartFiguratifSmall from './changeStyleFiguratifSmallJA';
import adam from '../pictures/peintures/figuratif/Adam.jpg';
import camille from '../pictures/peintures/figuratif/Camille.jpg';
import lucie from '../pictures/peintures/figuratif/Lucie.jpg';
import lucien from '../pictures/peintures/figuratif/Lucien.jpg';
import coquellicots from '../pictures/peintures/figuratif/Coquellicots.jpg';
import pandora from '../pictures/peintures/figuratif/Pandora.jpg';
import raphael from '../pictures/peintures/figuratif/Raphael.jpg';
import sonate from '../pictures/peintures/figuratif/Sonate.jpg';

const themeFiguratifJA = createTheme({
    typography: {
      h6: {
        color: "black",
        fontFamily: "Fredoka",
        fontSize: '1em',
        textAlign: 'center',
        marginBottom: "1em",
      },
    }
})
const Root = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        marginLeft: "7em",
    },

}))
const BigFiguratif = styled('div')(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        display: 'none'
    },
    [theme.breakpoints.up('md')]: {
        marginBottom:"30em"
    },
    [theme.breakpoints.up('lg')]: {
        marginBottom:"25em",
    },
    [theme.breakpoints.up('xl')]: {
        marginBottom:"80em",
    }
}))
const SmallFiguratif = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        display: 'none',
    },
    [theme.breakpoints.down('sm')]: {
        width: "50%",
        marginLeft:"6em",
    },
    [theme.breakpoints.up('sm')]: {
        width: "50%",
        marginLeft:"10em"
    }
}))

const NumbersPagesSlide = styled('div')(({ theme }) => ({
    [theme.breakpoints.down('lg')] : {
        display:"flex",
    },
}))
const ChangePagination = styled('div')(({ theme }) => ({
    [theme.breakpoints.down('lg')] : {
        display:"flex",
        marginLeft:"1.5em",
    },
    [theme.breakpoints.up('lg')] : {
        display:"flex",
        marginLeft: "4em",
    },
    [theme.breakpoints.up('xl')] : {
        marginLeft:"12em"
    },
}))
const TextUnderBigPicture = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('lg')] : {
        width: "20%"
    },
    [theme.breakpoints.down('lg')] : {
        width: "20%"
    }

}))
const useStyles = makeStyles({
        picturesChangeFiguratif: {
            width: "auto",
            height: '50vh',
            marginTop: '3em',
            borderRadius: "0.5em",
            marginRight: "20vh"
        },
        pictureInSitu: {
            width: "7em",
            marginTop: "2%",
            marginLeft: "25%",
            marginRight: "35%"
        },
        legendOfTheBigPicture: {
            width: "150%",
            marginTop: "15%",
            fontSize: "1.5em"
        },
        theSizeOfTheFiguratif: {
            fontSize: "1em",
            width: "150%"
        },
        completePartSwapBigPicture: {
            display: "flex",
            textAlign: "center"
        }
    })

const Figuratif = () => {
    var [srcPicture, changeSrcPicture] = useState(adam);
    var [sizeFiguratif, setSizeFiguratif] = useState('42 x 55 x 12 cm # 23 kg')
    var [legend, setLegend] = useState('Adam')
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

    <ThemeProvider theme={themeFiguratifJA}>

    <TitlePartChoice title="Figuratif"/>

    <BigFiguratif>

        <Grid container md={12}>
            <Grid item md={3} marginTop="3em" >
                <Grid container md={12}>

                    <div className="changingPictureBySlideFunction active">

                        <Grid item md={6} marginLeft="2.5em">
                            
                            <div onClick={() => {setLegend('Adam'); changeSrcPicture(adam); setSizeFiguratif('50 x 50 cm')}}>
                                <CreationDifferentPartFiguratif 
                                    text1="Adam"
                                    img1={adam}
                                    text2="peinture de style figuratif du nom de 'adam' "
                            />
                            </div>

                            <div onClick={() => {setLegend('Camille'); changeSrcPicture(camille); setSizeFiguratif('80 x 80 cm')}}>
                                <CreationDifferentPartFiguratif 
                                    text1= "Camille"
                                    img1={camille}
                                    text2="peinture de style figuratif du nom de 'camille' "

                            />
                            </div>

                            <div onClick={() => {setLegend('Sonate'); changeSrcPicture(sonate); setSizeFiguratif('60 x 60 cm')}}>
                                <CreationDifferentPartFiguratif 
                                    text1= "Sonate"
                                    img1={sonate}
                                    text2="peinture de style figuratif du nom de 'sonate' "
                            />
                            </div>

                        </Grid>

                        <Grid item md={6} marginLeft="2.5em">

                            <div onClick={() => {setLegend('Lucie'); changeSrcPicture(lucie); setSizeFiguratif('100 x 100 cm')}}>
                                <CreationDifferentPartFiguratif 
                                    text1= "Lucie"
                                    img1={lucie}
                                    text2="peinture de style figuratif du nom de 'lucie' "

                            />
                            </div>

                            <div onClick={() => {setLegend('Pandora'); changeSrcPicture(pandora); setSizeFiguratif('60 x 60 cm')}}>
                                <CreationDifferentPartFiguratif
                                    text1="Pandora"
                                    img1={pandora}
                                    text2="peinture de style figuratif du nom de 'pandora' "
                            />
                            </div>

                            <div onClick={() => {setLegend('Raphaël'); changeSrcPicture(raphael); setSizeFiguratif('80 x 80 cm')}}>
                                <CreationDifferentPartFiguratif 
                                    text1= "Raphaël"
                                    img1={raphael}
                                    text2="peinture de style figuratif du nom de 'raphael' "
                            />
                            </div>

                        </Grid>

                    </div>

                    <div className="changingPictureBySlideFunction">
                        
                        <Grid item md={6} marginLeft="2.5em">
                           <div onClick={() => {setLegend('Lucien'); changeSrcPicture(lucien); setSizeFiguratif('80 x 120 cm')}}>
                                <CreationDifferentPartFiguratif 
                                    text1="Lucien"
                                    img1={lucien}
                                    text2="peinture de style figuratif du nom de 'lucien' "
                            />
                            </div>

                        </Grid> 

                        <Grid item md={6} marginLeft="2.5em">
                        
                            <div onClick={() => {setLegend('Coquellicots'); changeSrcPicture(coquellicots); setSizeFiguratif('50 x 50 cm')}}>
                                <CreationDifferentPartFiguratif 
                                    text1= "Coquellicots"
                                    img1={coquellicots}
                                    text2="peinture de style figuratif du nom de 'coquellicots' "
                            />
                            </div>

                        </Grid>

                    </div>

                    <ChangePagination>

                        <div id="previous">
                            <Button className={classes.buttonArrowBack} onClick={() => {changeSlideItemBefore()}}><ArrowBackIcon color="action"/></Button>
                        </div>

                        <NumbersPagesSlide>
                            <Button variant="buttonNumber" onClick={() => {addActiveClassToItems(setKeyOfSlidingItems(0))}}>1</Button>
                            <Button variant="buttonNumber" onClick={() => {addActiveClassToItems(setKeyOfSlidingItems(1))}}>2</Button>
                        </NumbersPagesSlide>

                        <div id="following">
                            <Button className={classes.buttonArrowNext} onClick={() => {changeSlideItemNext()}}><ArrowForwardIcon color="action"/></Button>
                        </div>  

                    </ChangePagination>
        
            </Grid>
        </Grid>

            <Grid item md={9}>
                <Root>
                    <Typography>
                            <img src={srcPicture} alt='peinture style figuratif du nom de "adame" '  className={classes.picturesChangeFiguratif}/>
                        <TextUnderBigPicture>
                            <div className={classes.legendOfTheBigPicture}> {legend} </div> 
                            <div className={classes.theSizeOfTheFiguratif}>  <br/> {sizeFiguratif} </div>
                        </TextUnderBigPicture>
                    </Typography>
                </Root>
            </Grid>
        </Grid>
    
        </BigFiguratif>

        <SmallFiguratif>
            
            <CreationDifferentPartFiguratifSmall 
                text1="Adam"
                text2="50 x 50 cm"
                img1={adam} 
                text3="peinture de style figuratif version mobile du nom de 'adam' "
            />

            <CreationDifferentPartFiguratifSmall 
                text1="Camille"
                text2="80 x 80 cm"
                img1={camille} 
                text3="peinture de style figuratif version mobile du nom de 'camille' "
            />

             <CreationDifferentPartFiguratifSmall 
                text1="Coquellicots"
                text2="50 x 50 cm"
                img1={coquellicots} 
                text3="peinture de style figuratif version mobile du nom de 'coquellicots' "
            />

             <CreationDifferentPartFiguratifSmall 
                text1="Lucie"
                text2="100 x 100 cm"
                img1={lucie} 
                text3="peinture de style figuratif version mobile du nom de 'lucie' "
            />

             <CreationDifferentPartFiguratifSmall 
                text1="Lucien"
                text2="80 x 120 cm"
                img1={lucien} 
                text3="peinture de style figuratif version mobile du nom de 'lucien' "
            />

             <CreationDifferentPartFiguratifSmall 
                text1="Pandora"
                text2="60 x 60 cm"
                img1={pandora} 
                text3="peinture de style figuratif version mobile du nom de 'pandora' "
            />

             <CreationDifferentPartFiguratifSmall 
                text1="Raphaël"
                text2="80 x 80 cm"
                img1={raphael} 
                text3="peinture de style figuratif version mobile du nom de 'raphael' "
            />

             <CreationDifferentPartFiguratifSmall 
                text1="Sonate"
                text2="60 x 60 cm"
                img1={sonate} 
                text3="peinture de style figuratif version mobile du nom de 'sonate' "
            />
        </SmallFiguratif>
    </ThemeProvider>
  )
}

export default Figuratif;
