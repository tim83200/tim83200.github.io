import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { grey } from '@mui/material/colors'
import { ThemeProvider, styled, createTheme  } from '@mui/material/styles'
import {Link} from 'react-router-dom'
import { Button } from '@mui/material';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../css/navBarJA.css'

const Root = styled('div')(({ theme }) => ({
        fontSize: "2em"
}))
const AccordionButton = styled(Button)({
    color: 'gray',
    marginTop: '-7em',
    fontFamily: "hubballi",
})
const MakeAccordionStyle = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        display: 'none',
    },
}))
const MakeNavBarStyle = styled('div')(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        display: 'none',
    },
}))
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({}));
const themeNavbar = createTheme({
    typography: {
        button: {
            fontFamily: "hubballi",
            fontSize: ".8em",
            marginTop: "1em",
            background: 'transparent',
            spaccing: "2em",
        },
    },
    palette: {
        primary: {
            main: grey[900]
        }
    }
})

export default function SimpleAccordion() {
    return (
        
        <div>
            <MakeAccordionStyle>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Menu</Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                        <Root>
                            <Typography>
                                <Link to="/Accueil">
                                    <AccordionButton>Accueil</AccordionButton>
                                </Link>
                            </Typography>
                        </Root>

                        <Root>
                            <Typography variant="MakeAccordionStyle">
                                <Link to="/Bronzes">
                                    <AccordionButton >Bronzes</AccordionButton>
                                </Link>
                            </Typography>
                        </Root>

                        <Root>
                            <Typography variant="MakeAccordionStyle">
                                <Link to="/Sculptures">
                                    <AccordionButton>Sculptures</AccordionButton>
                                </Link>
                            </Typography>
                        </Root>

                        <Root>
                            <Typography variant="MakeAccordionStyle">
                                <Link to="/Figuratif">
                                    <AccordionButton>Figuratif</AccordionButton>
                                </Link>
                            </Typography>
                        </Root>

                        <Root>
                            <Typography variant="MakeAccordionStyle">
                                <Link to="/LigneClaire">
                                    <AccordionButton>Ligne Claire</AccordionButton>
                                </Link>
                            </Typography>
                        </Root>

                        <Root>
                            <Typography variant="MakeAccordionStyle">
                                <Link to="/InSitu">
                                    <AccordionButton>In Situ</AccordionButton>
                                </Link>
                            </Typography>
                        </Root>

                        <Root>
                            <Typography variant="MakeAccordionStyle">
                                <Link to="/Salons">
                                    <AccordionButton>Salons & Galeries</AccordionButton>
                                </Link>
                            </Typography>
                        </Root>

                        <Root>
                            <Typography variant="MakeAccordionStyle">
                                <Link to="/Contacts">
                                    <AccordionButton>Contacts</AccordionButton>
                                </Link>
                            </Typography>
                        </Root>
                    </AccordionDetails>
                </Accordion>
            </MakeAccordionStyle>

            <MakeNavBarStyle>
                <ThemeProvider theme={themeNavbar}>

                    <Link to="/Accueil">
                        <Button>Accueil</Button>
                    </Link>

                    <Link to="/Bronzes">
                        <Button>Bronzes</Button>
                    </Link>

                    <Link to="/Sculptures">
                        <Button>Sculptures</Button>
                    </Link>

                    <Link to="/Figuratif">
                        <Button>Figuratif</Button>
                    </Link>

                    <Link to="/LigneClaire">
                        <Button>Ligne Claire</Button>
                    </Link>

                    <Link to="/Insitu">
                        <Button>In Situ</Button>
                    </Link>

                    <Link to="/Salons">
                        <Button>Salons & Galeries</Button>
                    </Link>

                    <Link to="/Contacts">
                        <Button>Contacts</Button>
                    </Link>

                </ThemeProvider>
            </MakeNavBarStyle>
    </div>
  );
}