import { styled} from '@mui/material/styles'
import VideoPlayer from 'react-video-js-player';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import homePagePicture from '../pictures/homepageJA.jpg'
import book from '../pictures/bookAccueil.jpg';
import React from 'react'
import atelierArfi from '../videos/atelierArfi.mp4'
import TitlePartChoice from '../title/titleDifferentsPartsJA';

const useStyles = makeStyles(() => ({
    root: {
        height: "50vh",
        backgroundImage: `url(${homePagePicture})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
    }
}))
const TextPart = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('sm')]: {
        marginRight: "10%",
        marginLeft: "5%"
    },
    [theme.breakpoints.down('sm')]: {
        marginRight: "70%",
        width: "80%",
        marginLeft: "10%"
    },
    [theme.breakpoints.up('md')]: {
        marginLeft: "5%"
    },
    [theme.breakpoints.up('xl')]: {
        marginTop:'10em',
        marginLeft: '40em',
        marginBottom: "10em"
    }
}))
const PicturePart = styled('div')(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        width: "80%"
    },
}))
const VideoPart = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('xs')]: {
        marginLeft: "5%",
    },
    [theme.breakpoints.up('sm')]: {
        marginLeft: "30%",
        marginBottom: "20%",
    },
    [theme.breakpoints.up('md')]: {
        marginTop: "5%",
    },
}))
const Root = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        marginBottom: '16em'
    },
    [theme.breakpoints.up('xl')]: {
        marginBottom: '3em'
    },
    [theme.breakpoints.down('sm')]: {
        marginBottom: "5em"
    },
}))
const Accueil = () => {
    const classes= useStyles();

    return (
    <div>
        <TitlePartChoice title="Accueil"/>
        <Root>
            <Grid container>
                <Grid item>
                    <TextPart>
                        Je sculpte et je peins des gens de tous les jours. <br/> <br/> 
                        Mes personnages sont ancrés dans leur réalité,  porteurs de leur particularité,
                        ils ont en commun d’être en marge des choses formatées, 
                        codifiées de nos sociétés, alors parfois ils s'envolent dans leurs rêves… <br/> <br/> 
                        Parce que la vie est trop belle pour s'ennuyer, non ?
                    </TextPart>
                </Grid>

                <Grid item md={6} sm={12}>
                    <PicturePart>
                        <div id="divOfPicture">
                            <img className={classes.root} alt='book de sculptures en bronze, en terre, en argile et peintures en style figuratif et ligne claire' src={book}/>
                        </div>
                    </PicturePart>
                </Grid>

                <Grid item md={6} sm={12}>
                    <VideoPart>
                            <VideoPlayer
                                src = {atelierArfi}
                                poster="https://www.youtube.com/watch?v=z5Oe-WxPfjU"
                                width="300"
                                height="250"
                            />
                    </VideoPart>  
                </Grid>         
            </Grid>
           </Root>
           </div>
    )
}

export default Accueil;



