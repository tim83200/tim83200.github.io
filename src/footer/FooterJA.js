import React from 'react'
import { ThemeProvider, createTheme  } from '@mui/material/styles'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'
import FooterComponent from './FooterComponentJA'

const themeFooter = createTheme({
    typography: {
        h4: {
            fontFamily: "hubballi",
            fontSize: "0.7em",
            marginTop: "1em",
            justifyContent: 'flex-start',
            marginBottom: '-5px',
        }
    },
})

const Footer = () => {
    return (
        <ThemeProvider theme={themeFooter}>
            <Box textAlign='center'>
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        
                        <FooterComponent
                            choiceTextFooter1="Joël Arfi"
                            choiceTextFooter2="Site réalisé par 'Studio Arfils' "
                        />

                        <FooterComponent
                            choiceTextFooter1="Sources Photographiques : créations personnelles"
                            choiceTextFooter2="All right reserved &#xA9;"
                        />

                        <FooterComponent
                            choiceTextFooter1="Location : Pézenas (34120)"
                            choiceTextFooter2="Disponibilité internationale"
                        />

                    </Grid>
                </Container>
            </Box>
        </ThemeProvider>
    )
}

export default Footer