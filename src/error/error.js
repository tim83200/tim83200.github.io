import { styled} from '@mui/material/styles'
import {Link} from 'react-router-dom'
import { makeStyles } from '@mui/styles';
import '../css/inSitu.css'
import errorGollum from '../pictures/error/errorGollum.jpg'
import React from 'react';

const useStyles = makeStyles({
    gollumPicture: {
        height: "auto",
        width: "20em",
        marginTop: '2em'
    }
})
const Root = styled('div')(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        marginTop: "3em",
        marginBottom: "40em"
    },
    [theme.breakpoints.down('sm')]: {
        marginBottom:"30em"
    },
    [theme.breakpoints.down('lg')]: {
        marginBottom: "40em"
    },
    [theme.breakpoints.down('xl')]: {
        marginBottom: "35em"
    },
    [theme.breakpoints.up('xl')]: {
        marginBottom: "30em",
        marginTop: '5em'
    },
}))
const ErrorPart = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('xl')]: {
        marginTop: "5em"
    },
    [theme.breakpoints.down('xl')]: {
        marginTop: "5em"
    },
}))

const Error = () => {
    const classes = useStyles();
    return (
    <div>
        <div>
            <ErrorPart>
            <h1>Page Non Trouvée ! </h1>
            <Link to="/Accueil">
                Retour au site...
            </Link>
            </ErrorPart>
        </div>  
        <Root>
            <img src={errorGollum} alt="gollum qui dit que c'est la page erreur" className={classes.gollumPicture}/>
        </Root>
    </div>
    )
}

export default Error;

