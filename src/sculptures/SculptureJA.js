import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { styled} from '@mui/material/styles'
import Grid from '@mui/material/Grid';
import React, { useState } from 'react';
import TitlePartChoice from '../title/titleDifferentsPartsJA';
import { ThemeProvider, createTheme  } from '@mui/material/styles';
import CreationDifferentPartSculptures from './changeStyleSculpturesJA';
import { makeStyles } from '@mui/styles';
import CreationDifferentPartSculptureSmall from './changeStyleSculpturesSmallJA';
import augustin from '../pictures/sculptures/Augustin.jpg'
import valentin from '../pictures/sculptures/Valentin.jpg'
import ulysse from '../pictures/sculptures/Ulysse.jpg'
import charlie from '../pictures/sculptures/Charlie.jpg'
import pierrotUn from '../pictures/sculptures/PierrotUn.jpg'
import pierrotDeux from '../pictures/sculptures/PierrotDeux.jpg'
import pierrotTrois from '../pictures/sculptures/PierrotTrois.jpg'
import pierrotQuatre from '../pictures/sculptures/PierrotQuatre.jpg'
import nicolas from '../pictures/sculptures/Nicolas.jpg'
import oscar from '../pictures/sculptures/Oscar.jpg'
import cramoutcha from '../pictures/sculptures/Cramoutcha.jpg'
import wylliam from '../pictures/sculptures/Wylliam.jpg'
import arturo from '../pictures/sculptures/Arturo.jpg'
import terre from '../pictures/sculptures/Terre.jpg'
import salvador from '../pictures/sculptures/Salvador.jpg'
import zelda from '../pictures/sculptures/Zelda.jpg'
import lily from '../pictures/sculptures/Lily.jpg'
import winnie from '../pictures/sculptures/Winnie.jpg'
import icare from '../pictures/sculptures/Icare.jpg'
import elephant from '../pictures/sculptures/Elephant.jpg'

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
    },
}))
const BigSculptures = styled('div')(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        display: 'none'
    },
    [theme.breakpoints.up('md')]: {
        marginBottom: "15em",
        marginRight: "-10em",
        marginLeft:"0em",
    }
}))
const SmallSculptures = styled('div')(({ theme }) => ({
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
        marginRight: "-15em",
        marginLeft: "10em",
        paddingTop: "3em",
    },
    [theme.breakpoints.up('md')]: {
        marginTop: "2em",
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
            height: '50vh',
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

const Sculptures = () => {

    var [srcPicture, changeSrcPicture] = useState(lily);
    var [sizeSculpture, setSizeSculpture] = useState('42 x 55 x 55 cm # 45 kg')
    var [legend, setLegend] = useState('Lily')
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

    <TitlePartChoice title="Sculptures"/>

    <BigSculptures>

        <Grid container md={12}>
            
            <LeftPart>
            
            <Grid item md={3} marginTop="3em" >

                <Grid container md={12}>

                    <div className="changingPictureBySlideFunction active">

                    <Grid item md={6} marginRight="2em" marginLeft="2.5em">

                        <div onClick={() => {setLegend('Oscar'); changeSrcPicture(oscar); setSizeSculpture('41 x 27 x 86 cm # 19 kg')}}>
                        <CreationDifferentPartSculptures
                            text1="Oscar"
                            img1={oscar}
                            text2="photo de sculpture du nom de 'oscar' "
                        />
                        </div>

                        <div onClick={() => {setLegend('Salvador'); changeSrcPicture(salvador); setSizeSculpture('27 x 52 x 67 cm # 18 kg')}}>
                        <CreationDifferentPartSculptures
                            text1= "Salvador"
                            img1={salvador}
                            text2="photo de sculpture du nom de 'salvador' "
                        />
                        </div>

                        <div onClick={() => {setLegend('Winnie'); changeSrcPicture(winnie); setSizeSculpture('41 x 32 x 77 cm # 14 kg')}}>
                        <CreationDifferentPartSculptures
                            text1="Winnie"
                            img1={winnie}
                            text2="photo de sculpture du nom de 'winnie' "
                        />
                        </div>

                    </Grid>

                    <Grid item md={6} marginLeft="2.5em">

                        <div onClick={() => {setLegend('Augustin'); changeSrcPicture(augustin); setSizeSculpture('30 x 34 x 84 cm # 22 kg')}}>
                            <CreationDifferentPartSculptures
                                text1="Augustin"
                                img1={augustin}
                                text2="photo de sculpture du nom de 'augustin' "
                        />
                        </div>
                            
                        <div onClick={() => {setLegend('Cramoutcha'); changeSrcPicture(cramoutcha); setSizeSculpture('30 x 29 x 80 cm # 18 kg')}}>
                            <CreationDifferentPartSculptures
                                text1="Cramoutcha"
                                img1={cramoutcha}
                                text2="photo de sculpture du nom de 'cramoutcha' "
                        />
                        </div>
                        
                        <div onClick={() => {setLegend('Icare'); changeSrcPicture(icare); setSizeSculpture('45 x 50 x 73 cm # 18 kg')}}>
                            <CreationDifferentPartSculptures
                                text1="Icare"
                                img1={icare}
                                text2="photo de sculpture du nom de 'icare' "
                        />
                        </div>

                    </Grid>

                    </div>    

                    <div className="changingPictureBySlideFunction">

                        <Grid item md={6} marginRight="2em" marginLeft="2.5em">
                            
                            <div onClick={() => {setLegend('Pierrot I'); changeSrcPicture(pierrotUn); setSizeSculpture('35 x 25 x 88 cm # 21 kg')}}>
                                <CreationDifferentPartSculptures
                                    text1="Pierrot I"
                                    img1={pierrotUn}
                                    text2="photo de sculpture du nom de 'pierrot un' "
                            />
                            </div>

                            <div onClick={() => {setLegend('Pierrot III'); changeSrcPicture(pierrotTrois); setSizeSculpture('34 x 20 x 81 cm # 15 kg')}}>
                                <CreationDifferentPartSculptures 
                                    text1="Pierrot III"
                                    img1={pierrotTrois}
                                    text2="photo de sculpture du nom de 'pierrot trois' "
                            />
                            </div>

                            <div onClick={() => {setLegend('Lilly'); changeSrcPicture(lily); setSizeSculpture('42 x 55 x 55 cm # 45 kg')}}>
                                <CreationDifferentPartSculptures 
                                    text1="Lilly"
                                    img1={lily}
                                    text2="photo de sculpture du nom de 'lily' "
                            />
                            </div>

                        </Grid>

                        <Grid item md={6} marginRight="5em" marginLeft="1em">
                            <div onClick={() => {setLegend('Pierrot II'); changeSrcPicture(pierrotDeux); setSizeSculpture('22 x 34 x 84 cm # 15 kg')}}>
                                <CreationDifferentPartSculptures 
                                    text1="Pierrot II"
                                    img1={pierrotDeux}
                                    text2="photo de sculpture du nom de 'pierrot deux' "
                            />
                            </div>

                            <div onClick={() => {setLegend('Pierrot IV'); changeSrcPicture(pierrotQuatre); setSizeSculpture('37 x 37 x 79 cm # 22 kg')}}>
                                <CreationDifferentPartSculptures 
                                    text1="Pierrot IV"
                                    img1={pierrotQuatre}
                                    text2="photo de sculpture du nom de 'pierrot quatre' "
                            />
                            </div>

                            <div onClick={() => {setLegend('Terre'); changeSrcPicture(terre); setSizeSculpture('50 x 65 x 130 cm # 68 kg')}}>
                                <CreationDifferentPartSculptures 
                                    text1="Terre"
                                    img1={terre}
                                    text2="photo de sculpture du nom de 'terre' "
                            />
                            </div>

                        </Grid>

                    </div>

              
                    <div className="changingPictureBySlideFunction">
                        
                        <Grid item md={6} marginRight="2em" marginLeft="2.5em">

                            <div onClick={() => {setLegend('Zelda'); changeSrcPicture(zelda); setSizeSculpture('54 x 27 x 93 cm # 22 kg')}}>
                                <CreationDifferentPartSculptures 
                                    text1="Zelda"
                                    img1={zelda}
                                    text2="photo de sculpture du nom de 'zelda' "
                            />
                            </div>

                            <div onClick={() => {setLegend('Nicolas'); changeSrcPicture(nicolas); setSizeSculpture('20 x 20 x 49 cm # 6 kg')}}>
                                <CreationDifferentPartSculptures 
                                    text1="Nicolas"
                                    img1={nicolas}
                                    text2="photo de sculpture du nom de 'nicolas' "
                            />
                            </div>

                            <div onClick={() => {setLegend('Wylliam'); changeSrcPicture(wylliam); setSizeSculpture('41 x 32 x 77 cm # 14 kg')}}>
                                <CreationDifferentPartSculptures 
                                    text1="Wylliam"
                                    img1={wylliam}
                                    text2="photo de sculpture du nom de 'wylliam' "
                            />
                            </div>

                        </Grid>

                        <Grid item md={6} marginRight="5em" marginLeft="2.5em">

                            <div onClick={() => {setLegend('Charlie'); changeSrcPicture(charlie); setSizeSculpture('36 x 38 x 83 cm # 20 kg')}}>
                                <CreationDifferentPartSculptures 
                                    text1="Charlie"
                                    img1={charlie}
                                    text2="photo de sculpture du nom de 'charlie' "
                            />
                            </div>
                            
                            <div onClick={() => {setLegend('Ulysse'); changeSrcPicture(ulysse); setSizeSculpture('20 x 44 x 84 cm # 17 kg')}}>
                                <CreationDifferentPartSculptures
                                    text1="Ulysse"
                                    img1={ulysse}
                                    text2="photo de sculpture du nom de 'ulysse' "
                            />
                            </div>

                            <div onClick={() => {setLegend('Arturo'); changeSrcPicture(arturo); setSizeSculpture('33 x 37 x 74 cm # 18 kg')}}>
                                <CreationDifferentPartSculptures 
                                    text1="Arturo"
                                    img1={arturo}
                                    text2="photo de sculpture du nom de 'arturo' "
                            />
                            </div>

                        </Grid>

                    </div>

                    <div className="changingPictureBySlideFunction">

                        <Grid item md={6} marginRight="2em" marginLeft="2.5em">

                            <div onClick={() => {setLegend('Valentin'); changeSrcPicture(valentin); setSizeSculpture('25 x 30 x 87 cm # 20 kg')}}>
                                <CreationDifferentPartSculptures 
                                    text1="Valentin"
                                    img1={valentin}
                                    text2="photo de sculpture du nom de 'valentin' "
                            />
                            </div>

                        </Grid>

                        <Grid item md={6} marginRight="5em" marginLeft="2.5em">

                            <div onClick={() => {setLegend('Éléphant'); changeSrcPicture(elephant); setSizeSculpture('40 x 20 x 50 cm # 14 kg')}}>
                                <CreationDifferentPartSculptures 
                                    text1="Éléphant"
                                    img1={elephant}
                                    text2="photo de sculpture du nom de 'elephant' "
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
                        <img src={srcPicture} alt='sculpture d accueil du nom de lily '  className={classes.picturesChangeBronze}/>
                        </BigPictureRightPart>
                        <TextUnderBigPicture>
                        <div className={classes.legendOfTheBigPicture}>{legend}</div> 
                        <div className={classes.theSizeOfTheBronze}>  <br/>{sizeSculpture}</div>
                        </TextUnderBigPicture>
                </Root>
            </Grid>
        </Grid>
    
        </BigSculptures>

        <SmallSculptures>
            
            <CreationDifferentPartSculptureSmall 
                text1="Oscar"
                text2="41 x 27 x 86 cm # 19 kg"
                img1={oscar} 
                text3="photo de sculpture version mobile du nom de 'oscar' "
            />

            <CreationDifferentPartSculptureSmall 
                text1="Salvador"
                text2="27 x 52 x 67 cm # 18 kg"
                img1={salvador} 
                text3="photo de sculpture version mobile du nom de 'salvador' "
            />

            <CreationDifferentPartSculptureSmall 
                text1="Augustin"
                text2="30 x 34 x 84 cm # 22 kg"
                img1={augustin} 
                text3="photo de sculpture version mobile du nom de 'augustin' "
            />

            <CreationDifferentPartSculptureSmall 
                text1="Pierrot I"
                text2="35 x 25 x 88 cm # 21 kg"
                img1={pierrotUn} 
                text3="photo de sculpture version mobile du nom de 'pierrot un' "

            />

            <CreationDifferentPartSculptureSmall 
                text1="Pierrot II"
                text2="22 x 34 x 84 cm # 15 kg"
                img1={pierrotDeux} 
                text3="photo de sculpture version mobile du nom de 'pierrot deux' "
            />

            <CreationDifferentPartSculptureSmall 
                text1="Pierrot III"
                text2="34 x 20 x 81 cm # 15 kg"
                img1={pierrotTrois} 
                text3="photo de sculpture version mobile du nom de 'pierrot trois' "
            />

            <CreationDifferentPartSculptureSmall 
                text1="Pierrot IV"
                text2="37 x 37 x 79 cm # 22 kg"
                img1={pierrotQuatre} 
                text3="photo de sculpture version mobile du nom de 'pierrot quatre' "
            />

            <CreationDifferentPartSculptureSmall 
                text1="Cramoutcha"
                text2="30 x 29 x 80 cm # 18 kg"
                img1={cramoutcha} 
                text3="photo de sculpture version mobile du nom de 'cramoutcha' "
            />

            <CreationDifferentPartSculptureSmall 
                text1="Terre"
                text2="50 x 65 x 130 cm # 68 kg"
                img1={terre} 
                text3="photo de sculpture version mobile du nom de 'terre' "
            />

            <CreationDifferentPartSculptureSmall 
                text1="Winnie"
                text2="41 x 32 x 77 cm # 14 kg"
                img1={winnie} 
                text3="photo de sculpture version mobile du nom de 'winnie' "
            />

            <CreationDifferentPartSculptureSmall 
                text1="Lilly"
                text2="42 x 55 x 55 cm # 45 kg"
                img1={lily} 
                text3="photo de sculpture version mobile du nom de 'lily' "
            />

            <CreationDifferentPartSculptureSmall 
                text1="Icare"
                text2="45 x 50 x 73 cm # 18 kg"
                img1={icare} 
                text3="photo de sculpture version mobile du nom de 'icare' "
            />

            <CreationDifferentPartSculptureSmall 
                text1="Zelda"
                text2="54 x 27 x 93 cm # 22 kg"
                img1={zelda} 
                text3="photo de sculpture version mobile du nom de 'zelda' "
            />

            <CreationDifferentPartSculptureSmall 
                text1="Nicolas"
                text2="20 x 20 x 49 cm # 6 kg"
                img1={nicolas} 
                text3="photo de sculpture version mobile du nom de 'nicolas' "
            />

            <CreationDifferentPartSculptureSmall 
                text1="Charlie"
                text2="36 x 38 x 83 cm # 20 kg"
                img1={charlie}  
                text3="photo de sculpture version mobile du nom de 'charlie' "
            />

            <CreationDifferentPartSculptureSmall 
                text1="Ulysse"
                text2="20 x 44 x 84 cm # 17 kg"
                img1={ulysse} 
                text3="photo de sculpture version mobile du nom de 'ulysse' "
            />

            <CreationDifferentPartSculptureSmall 
                text1="Valentin"
                text2="25 x 30 x 87 cm # 20 kg"
                img1={valentin} 
                text3="photo de sculpture version mobile du nom de 'valentin' "
            />

            <CreationDifferentPartSculptureSmall 
                text1="Arturo"
                text2="33 x 37 x 74 cm # 18 kg"
                img1={arturo} 
                text3="photo de sculpture version mobile du nom de 'arturo' "
            />

            <CreationDifferentPartSculptureSmall 
                text1="Wylliam"
                text2="41 x 32 x 77 cm # 14 kg"
                img1={wylliam} 
                text3="photo de sculpture version mobile du nom de 'wylliam' "
            />

             <CreationDifferentPartSculptureSmall 
                text1="Éléphant"
                text2="40 x 20 x 50 cm # 14 kg"
                img1={elephant} 
                text3="photo de sculpture version mobile du nom de 'elephant' "
            />
            
        </SmallSculptures>

    </ThemeProvider>
  )
}

export default Sculptures;
