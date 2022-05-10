import { makeStyles } from '@mui/styles';
import { styled} from '@mui/material/styles'
import TitlePartChoice from '../title/titleDifferentsPartsJA';
import Grid from '@mui/material/Grid';
import '../css/salonsCss.css'
import React, {useEffect } from 'react';
import banne from '../pictures/salons/banne.jpg'
import gardeFreinet from '../pictures/salons/gardeFreinet.jpg'
import ArtContemporain from '../pictures/salons/internationalArtContemporain.jpg'
import CreationLiPartSalons from '../salons/salonLiJA'
import ListEventPast from './listSalonEventPast';
import DateListEventPast from './dateListSalonEventPast';
import DateListEventPastWithSpan from './dateListSalonEventPastWithSpan';
import ListGaleriesSalons from './listGaleriesSalon';


const useStyles = makeStyles({
    titleOfFirstPartOfSalons: {
    textAlign: "left",
    marginLeft: "10%",
    marginBottom: "2%",
    display: "flex",
    },
    thePresentaitonOfEachSalons: {
        textAlign: "left",
        marginLeft: "5%",
    },
    upComingExpositions: {
        paddingLeft: "25%",
        textAlign: "center",
    },
    namesOfGaleries: {
        listStyleType: "none",
        marginBottom: "4.4em",
        textAlign: "left",
    },
    namesCollections: {
        listStyleType: "none",
        textAlign: "left",
        marginTop: "5%",
    },
    titleGalerie: {
        marginBottom: "2em"
    }
})
const Root = styled('div')(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        marginBottom:"2em"
    },
    [theme.breakpoints.down('lg')]: {
        marginBottom:"2em"
    },
    [theme.breakpoints.down('xl')]: {
        marginBottom:"2em"
    },
    [theme.breakpoints.up('xl')]: {
        marginBottom:"75em"
    },
}))
const Salons = () => {
    var pictureForDifferentsSalonsUpComing = document.getElementsByClassName('picturesOfDifferentsSalonsUpComing')
    var planningFor2002Expositions = document.getElementsByClassName('planningOf2022ExpositionsUpComingWithPictures')

    useEffect(() => {
    const removeOpacity = () => {
        for (let i = 0 ; i < pictureForDifferentsSalonsUpComing.length; i++) {
            pictureForDifferentsSalonsUpComing[i].classList.remove('active')
        }
    }
    var etape = 0;
    const setUpInterVal = setInterval(() => {
        etape++;
        if (etape >= pictureForDifferentsSalonsUpComing.length) {
            etape = 0;
        }
        removeOpacity();
        pictureForDifferentsSalonsUpComing[etape].classList.add('active')
    }, 5000);
    return () => clearInterval(setUpInterVal)
    },)

    useEffect(() => {
    const removeActiveFromDate = () => {
        for (let i = 0 ; i < planningFor2002Expositions.length; i++) {
            planningFor2002Expositions[i].classList.remove('active')
        }
    }
    var step = 0;
        const setUpInterValSecond = setInterval(() => {
        step++;
        if (step >= planningFor2002Expositions.length) {
            step = 0
        }
        removeActiveFromDate();
        planningFor2002Expositions[step].classList.add('active')
        }, 5000);
        return () => clearInterval(setUpInterValSecond)
    },)

    const ListCollectionAndGalerie = styled('div')(({ theme }) => ({
        [theme.breakpoints.down('md')]: {
            textAlign: 'left',
            borderRadius: "0.5em",
        },
        [theme.breakpoints.down('sm')]: {
            textAlign: 'left',
            marginRight: "1em",
            borderRadius: "0.5em",
        },
    }))

const classes = useStyles();
    return (
    <div> 

        <TitlePartChoice title="Salons & Galeries"/>
        
        <Root>

        <Grid container md={12}>
            <Grid item md={6}>
             
                <div className={classes.thePresentaitonOfEachSalons}>
                    2022... 
                </div>

                <div className={classes.titleOfFirstPartOfSalons}>
                    <ul>
                        <CreationLiPartSalons 
                            classNameOfObject = 'planningOf2022ExpositionsUpComingWithPictures active'
                            date="Du 11 au 14 mars :"
                            nameOfExposition = "SIAC"
                            location = "Marseille"
                        />

                        <CreationLiPartSalons 
                            classNameOfObject = 'planningOf2022ExpositionsUpComing'
                            date="Le 22 Mai:"
                            nameOfExposition =  "Domaine de l'Enregado"
                            location = "Ollioules"
                        />

                        <CreationLiPartSalons 
                            classNameOfObject = 'planningOf2022ExpositionsUpComing'
                            date="Du 17 juillet au 21 août :"
                            nameOfExposition = "Salon d'art"
                            location = "Seignosse"
                        />

                        <CreationLiPartSalons 
                            classNameOfObject = 'planningOf2022ExpositionsUpComingWithPictures'
                            date="Du 23 au 24 juillet : "
                            nameOfExposition = "Art & Matières"
                            location = "La Garde Freinet"
                        />
                        
                        <CreationLiPartSalons 
                            classNameOfObject = 'planningOf2022ExpositionsUpComingWithPictures'
                            date="Du 21 au 23 août :"
                            nameOfExposition = "Banne"
                            location = "Ardèche"
                        />

                    </ul>
                </div>

            </Grid>

            <Grid item md={6}>

                <div className={classes.upComingExpositions}>
                    <img className="picturesOfDifferentsSalonsUpComing active" alt='flyer du salon d/`art le siac ' src={ArtContemporain}/>
                    <img className="picturesOfDifferentsSalonsUpComing" alt='flyer de lexposition à la garde freinet ' src={gardeFreinet}/>
                    <img className="picturesOfDifferentsSalonsUpComing" alt='flyer de l exposition à banne en ardeche' src={banne}/>
                </div>

            </Grid>

        </Grid>

        <Grid container md={12}>
        <Grid item md={6}>
            <h3>Salons</h3>
                <ul>
                    <DateListEventPast date= "2021"/>
                        <ListEventPast dateLocation= "Du 1 au 24 juillet : Galerie Cravéro - Pradet"/>
                        <ListEventPast dateLocation= "Du 23 au 24 juillet : Art & Matières - La Garde Freinet"/>
                        <ListEventPast dateLocation= "Du 21 au 23 aout : Banne - Ardèche"/>
                        <DateListEventPastWithSpan date="Du 22 au 24 octobre : Salon International d'Art Contemporain" salonName="ART3F" salonLocation="Marseille"/> 

                    <DateListEventPast date= "2020"/>
                        <DateListEventPastWithSpan date="Mars : Salon International d'Art Contemporain" salonName="SIAC" salonLocation="Marseille"/> 
                        <ListEventPast dateLocation= "Juillet : Banne - Ardèche"/>
                        <DateListEventPastWithSpan date="Septembre :" salonName="Regain Art'Lyon" salonLocation="Lyon"/> 
                        <DateListEventPastWithSpan date="Octobre : " salonName="Art Home Expo" salonLocation="Chatou - Paris"/> 

                    <DateListEventPast date= "2019"/>
                        <DateListEventPastWithSpan date="Salon International d'Art Contemporain : " salonName="SIAC" salonLocation="Marseille"/> 
                        <DateListEventPastWithSpan date="Salon International d'Art Contemporain : " salonName="ART3F" salonLocation="Marseille"/> 
                        <DateListEventPastWithSpan date="Salon Méditerranéen d'Art Contemporain" salonName="SMART" salonLocation="Aix-en-Provence"/> 

                    <DateListEventPast date= "2018"/>
                        <DateListEventPastWithSpan date="Salon International d'art Contemporain" salonName="SIAC" salonLocation="Marseille"/> 
                        <DateListEventPastWithSpan date="Salon Méditerranéen d'Art Contemporain" salonName="SMART" salonLocation="Aix-en-Provence"/> 
                        <DateListEventPastWithSpan date="Salon d'Art Contemporain" salonName="EXPO4ART" salonLocation="Lille"/> 
                    
                    <DateListEventPast date= "2017"/>
                        <DateListEventPastWithSpan date="Salon International d'Art Contemporain" salonName="SIAC" salonLocation="Marseille"/>
                        <DateListEventPastWithSpan date="Grand Marché d'Art Contemporain" salonName="GMAC" salonLocation="Bastille - Paris"/>
                        <DateListEventPastWithSpan date="Salon Méditerranéen d'Art Contemporain" salonName="SMART" salonLocation="Aix-en-Provence"/>
                        <ListEventPast dateLocation= "Attention, culture fraîche - Gap"/>
                        <ListEventPast dateLocation= "Les Folies de Flo' - Martigues"/>

                    <DateListEventPast date= "2016"/>
                        <ListEventPast dateLocation= "Salon International d'Art Contemporain - Marseille"/>
                        <ListEventPast dateLocation= "Grand Marché d'Art Contemporain - Bastille - Paris"/>
                        
                    <DateListEventPast date= "2015"/>
                        <ListEventPast dateLocation= "Salon International d'Art Contemporain - Marseille"/>
                        <ListEventPast dateLocation= "Grand Marché d'Art Contemporain - Bastille - Paris"/>
                        <ListEventPast dateLocation= "Galerie d'Art Espace Culturel Leclerc - Gap"/>

                    <DateListEventPast date= "2014"/>
                        <ListEventPast dateLocation= "Salon International d'Art Contemporain - Marseille"/>

                    <DateListEventPast date= "2013"/>
                        <ListEventPast  dateLocation= "`Domaine de la Garenne` - Aix-en-Provence"/>
                        
                    <DateListEventPast date= "2012"/>
                        <ListEventPast dateLocation= "Galerie `Juste à côté` - Castellet (var)"/>
            </ul>
        </Grid>

        <Grid item md={6}>
            <h3 className={classes.titleGalerie}>Galeries</h3>

            <ul className={classes.namesOfGaleries}>
                <ListGaleriesSalons galerieLocation="Aigues Mortes" galerieName="Galerie Flo" phoneNumber="06 61 87 23 49"/>
                <ListGaleriesSalons galerieLocation="Valence" galerieName="Galerie Bost" phoneNumber="06 50 45 87 77"/>
                <ListGaleriesSalons galerieLocation="Avignon" galerieName="Galerie Perrier" phoneNumber="06 63 15 00 12"/>
            </ul>


            <h3 id="collectionneursTitle">Collectionneurs</h3>
                <ListCollectionAndGalerie>
                    <ul className={classes.namesCollections}>
                        <li>France - Allemagne - Espagne</li>
                        <li>États Unis - Portugal - Belgique</li>
                    </ul>
                </ListCollectionAndGalerie>
        </Grid>

        </Grid>
        
        </Root>

        </div>
    )   
}

export default Salons;