import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import { styled} from '@mui/material/styles'
import Grid from '@mui/material/Grid';
import React, { useState } from 'react';
import TitlePartChoice from '../title/titleDifferentsPartsJA';
import { ThemeProvider, createTheme  } from '@mui/material/styles';
import CreationDifferentPartClear from './changeStyleClaireJA';
import '../css/differentsPartCss.css'
import { makeStyles } from '@mui/styles';
import CreationDifferentPartClearSmall from './changeStyleClaireSmallJA';
import onTheRoad from '../pictures/peintures/claire/OnTheRoad.jpg';
import invictus from '../pictures/peintures/claire/Invictus.jpg';
import theRdv from '../pictures/peintures/claire/TheRdv.jpg';
import weCan from '../pictures/peintures/claire/WeCan.jpg';
import lui from '../pictures/peintures/claire/Lui.jpg';
import getAway from '../pictures/peintures/claire/GetAway.jpg';
import capucine from '../pictures/peintures/claire/Capucine.jpg';
import youAreNotAlone from '../pictures/peintures/claire/YouAreNotAlone.jpg';
import elle from '../pictures/peintures/claire/Elle.jpg';
import julienEtJuliette from '../pictures/peintures/claire/JulienEtJuliette.jpg';
import musicos from '../pictures/peintures/claire/Musicos.jpg';
import danse from '../pictures/peintures/claire/Danse.jpg';

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
    [theme.breakpoints.up('xl')]: {
        marginBottom: "65em"
    },
    [theme.breakpoints.up('lg')]: {
        marginBottom: "15em"
    },
    [theme.breakpoints.up('md')]: {
        marginBottom: "18em"
    },
}))
const SmallFiguratif = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        display: 'none',
    },
    [theme.breakpoints.down('md')]: {   
        paddingLeft: "5em"
    },
    [theme.breakpoints.down('sm')]: {
        width: "50%",
        marginLeft:"3.5em",
    },
    [theme.breakpoints.up('sm')]: {
        width: "50%",
        marginLeft:"7.5em"
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
    var [srcPicture, changeSrcPicture] = useState(getAway);
    var [sizeClear, setSizeClear] = useState('42 x 55 x 12 cm # 23 kg')
    var [legend, setLegend] = useState('Get away')
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

    <TitlePartChoice title="Ligne Claire"/>

    <BigFiguratif>

        <Grid container md={12}>
            <Grid item md={3} marginTop="3em" >
                <Grid container md={12}>

                    <div className="changingPictureBySlideFunction active">
                    
                        <Grid item md={6} marginLeft="2.5em">
                    
                            <div onClick={() => {setLegend('On the road'); changeSrcPicture(onTheRoad); setSizeClear('80 x 80 cm')}}>
                                <CreationDifferentPartClear 
                                    text1="On the road"
                                    img1={onTheRoad}
                                    text2="photo de peinture style ligne claire du nom de 'on the road' "
                            />
                            </div>

                            <div onClick={() => {setLegend('Invictus'); changeSrcPicture(invictus); setSizeClear('50 x 50 cm')}}>
                                <CreationDifferentPartClear 
                                    text1= "Invictus"
                                    img1={invictus}
                                    text2="photo de peinture style ligne claire du nom de 'invictus' "
                            />
                            </div>

                            <div onClick={() => {setLegend('Lui'); changeSrcPicture(lui); setSizeClear('50 x 50 cm')}}>
                                <CreationDifferentPartClear 
                                    text1= "Lui"
                                    img1={lui}
                                    text2="photo de peinture style ligne claire du nom de 'lui' "
                            />
                            </div>

                        </Grid>

                        <Grid item md={6} marginLeft="2.5em">

                            <div onClick={() => {setLegend('Get away'); changeSrcPicture(getAway); setSizeClear('80 x 80 cm')}}>
                                <CreationDifferentPartClear 
                                    text1= "Get away"
                                    img1={getAway}
                                    text2="photo de peinture style ligne claire du nom de 'get away' "
                            />
                            </div>

                            <div onClick={() => {setLegend('We can'); changeSrcPicture(weCan); setSizeClear('80 x 80 cm')}}>
                                <CreationDifferentPartClear
                                    text1="We can"
                                    img1={weCan}
                                    text2="photo de peinture style ligne claire du nom de 'we can' "
                            />
                            </div>

                            <div onClick={() => {setLegend('The rendez-vous'); changeSrcPicture(theRdv); setSizeClear('50 x 50 cm')}}>
                                <CreationDifferentPartClear 
                                    text1= "The rendez-vous"
                                    img1={theRdv}
                                    text2="photo de peinture style ligne claire du nom de 'the rendez-vous' "
                            />
                            </div>

                        </Grid>

                    </div>

                    <div className="changingPictureBySlideFunction">
                        
                        <Grid item md={6} marginLeft="2.5em">

                           <div onClick={() => {setLegend('Elle'); changeSrcPicture(elle); setSizeClear('50 x 50 cm')}}>
                                <CreationDifferentPartClear 
                                    text1="Elle"
                                    img1={elle}
                                    text2="photo de peinture style ligne claire du nom de 'elle' "
                            />
                            </div>

                            <div onClick={() => {setLegend("Julien & Juliette"); changeSrcPicture(julienEtJuliette); setSizeClear('50 x 50 cm')}}>
                                <CreationDifferentPartClear 
                                    text1= "Julien & Juliette"
                                    img1={julienEtJuliette}
                                    text2="photo de peinture style ligne claire du nom de 'julien et juliette' "
                            />
                            </div>

                            <div onClick={() => {setLegend('Musicos'); changeSrcPicture(musicos); setSizeClear('73 x 50 cm')}}>
                                <CreationDifferentPartClear 
                                    text1="Musicos"
                                    img1={musicos}
                                    text2="photo de peinture style ligne claire du nom de 'musicos' "
                                />
                            </div>

                        </Grid>

                        <Grid item md={6} marginLeft="2.5em">

                            <div onClick={() => {setLegend('Danse'); changeSrcPicture(danse); setSizeClear('50 x 50 cm')}}>
                                <CreationDifferentPartClear
                                    text1="Danse"
                                    img1={danse}
                                    text2="photo de peinture style ligne claire du nom de 'danse' "
                            />
                            </div>
                            
                            <div onClick={() => {setLegend('Capucine'); changeSrcPicture(capucine); setSizeClear('80 x 120 cm')}}>
                                <CreationDifferentPartClear
                                    text1="Capucine"
                                    img1={capucine}
                                    text2="photo de peinture style ligne claire du nom de 'capucine' "
                            />
                            </div>

                            <div onClick={() => {setLegend('You are not alone'); changeSrcPicture(youAreNotAlone); setSizeClear('50 x 50 cm')}}>
                                <CreationDifferentPartClear 
                                    text1="You are not alone"
                                    img1={youAreNotAlone}
                                    text2="photo de peinture style ligne claire du nom de 'you are not alone' "
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
                        <img src={srcPicture} alt='peinture style ligne claire du nom de "get away'  className={classes.picturesChangeFiguratif}/>
                        <TextUnderBigPicture>
                            <div className={classes.legendOfTheBigPicture}>{legend}</div> 
                            <div className={classes.theSizeOfTheFiguratif}>  <br/>{sizeClear}</div>
                        </TextUnderBigPicture>
                    </Typography>
                </Root>
            </Grid>
        </Grid>
    
        </BigFiguratif>

        <SmallFiguratif>
            
        <CreationDifferentPartClearSmall 
                text1="On the road"
                text2="80 x 80 cm"
                img1={onTheRoad} 
                text3="photo de peinture style ligne claire version mobile du nom de 'on the road' "
            />

            <CreationDifferentPartClearSmall 
                text1="Invictus"
                text2="50 x 50 cm"
                img1={invictus} 
                text3="photo de peinture style ligne claire version mobile du nom de 'invictus' "
            />

            <CreationDifferentPartClearSmall 
                text1="The rendez-vous"
                text2="50 x 50 cm"
                img1={theRdv} 
                text3="photo de peinture style ligne claire version mobile du nom de 'the rendez-vous' "
            />

            <CreationDifferentPartClearSmall 
                text1="Julien & Juliette"
                text2="50 x 50 cm"
                img1={julienEtJuliette} 
                text3="photo de peinture style ligne claire version mobile du nom de 'julien et juliette' "
            />

            <CreationDifferentPartClearSmall 
                text1="We can"
                text2="80 x 80 cm"
                img1={weCan} 
                text3="photo de peinture style ligne claire version mobile du nom de 'we can' "
            />

            <CreationDifferentPartClearSmall 
                text1="Lui"
                text2="50 x 50 cm"
                img1={lui} 
                text3="photo de peinture style ligne claire version mobile du nom de 'lui' "
            />

            <CreationDifferentPartClearSmall 
                text1="Get away"
                text2="80 x 80 cm"
                img1={getAway} 
                text3="photo de peinture style ligne claire version mobile du nom de 'get away' "
            />

            <CreationDifferentPartClearSmall 
                text1="Capucine"
                text2="80 x 120 cm"
                img1={capucine} 
                text3="photo de peinture style ligne claire version mobile du nom de 'capucine' "
            />

            <CreationDifferentPartClearSmall 
                text1="You are not alone"
                text2="50 x 50 cm"
                img1={youAreNotAlone} 
                text3="photo de peinture style ligne claire version mobile du nom de 'you are not alone' "
            />

            <CreationDifferentPartClearSmall 
                text1="Elle"
                text2="50 x 50 cm"
                img1={elle} 
                text3="photo de peinture style ligne claire version mobile du nom de 'elle' "
            />

            <CreationDifferentPartClearSmall 
                text1="Musicos"
                text2="73 x 50 cm"
                img1={musicos} 
                text3="photo de peinture style ligne claire version mobile du nom de 'musicos' "
            />

            <CreationDifferentPartClearSmall 
                text1="Danse"
                text2="50 x 50 cm"
                img1={danse} 
                text3="photo de peinture style ligne claire version mobile du nom de 'danse' "
            />
        </SmallFiguratif>
    </ThemeProvider>
  )
}

export default Figuratif;
