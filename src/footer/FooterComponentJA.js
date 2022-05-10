import React from 'react'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const FooterComponent = ({choiceTextFooter1, choiceTextFooter2}) => {

    return( 
        
        <Grid item xs={12} sm={4}>
            <Typography variant='h4'>{choiceTextFooter1}</Typography>
            <Typography variant='h4'>{choiceTextFooter2}</Typography>
        </Grid>
    )
}

export default FooterComponent;
