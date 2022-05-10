import ReCAPTCHA from "react-google-recaptcha";
import { makeStyles } from '@mui/styles';
import emailjs from '@emailjs/browser';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid';
import PictureContacts from '../pictures/pictureContacts.jpg';
import React, { useState } from 'react';

const TextContactsDescriptions = styled('div')(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        marginTop: "1em",
        marginLeft: "8em",
        textAlign: "left",
    },
    [theme.breakpoints.up('sm')]: {
        marginTop: "2em",
    },
    [theme.breakpoints.up('md')]: {
        fontSize: "1.5em",
        marginLeft: "5em"
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: "1.8em",
        marginRight: "5em",
        marginTop: "-1em",
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: "1.8em",
        marginRight: "25em",
        marginTop: "-1em",
    },
}))
const ImgContactsArfi = styled('div')(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        width: "15em",
        marginLeft: "8em",
    },
    [theme.breakpoints.up('sm')]: {
        width: "auto",
        height: "15em",
        marginLeft: "2em",
        marginBottom: "3em"
    },
    [theme.breakpoints.up('md')]: {
        width: "30em",
        marginLeft: "5em",
        marginBottom: "10em"
    },
    [theme.breakpoints.up('lg')]: {
        width: "30em",
        marginLeft: "20em",
        marginBottom: "5em",
        marginTop: "-5em",
    },
    [theme.breakpoints.up('xl')]: {
        width: "40em",
        marginLeft: "50em",
        marginBottom: "15em",
        marginTop: "-5em",
    },
}))
const FormContactsArfi = styled('div')(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        marginTop: "2em",
        marginLeft: "2em"
    },
    [theme.breakpoints.up('sm')]: {
        marginLeft: "60%",
        width: "20em",
        marginTop: "2em",
        marginBottom: "2em",
    },
    [theme.breakpoints.up('md')]: {
        width: "50em",
        marginLeft: "5em",
        marginBottom: "10em",
    },
    [theme.breakpoints.up('lg')]: {
        width: "50em",
        marginBottom: "43em",
        marginLeft: "18em",
        height: "10em",
        marginTop: "6em",
    },
    [theme.breakpoints.up('xl')]: {
        width: "50em",
        marginBottom: "78em",
        marginLeft: "58em",
        height: "10em",
        marginTop: "6em",
    },
}))
const CaptchaResponsiv = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        marginLeft: "15.5em"
    },
}))
const useStyles = makeStyles({
    formInput: {
        height: "1em",
        marginTop: "1em",
        backgroundColor: "#f5f5f5",
        border: "1px solid black"
    },
    textArea: {
        height: "10em",
        width: '20em',
        backgroundColor: "#f5f5f5",
        marginTop: "1em",
    },
})

const Contacts = () => {
    var [isVerified, setIsVerified] = useState(true)

    const onChange = (value) => {
        console.log("Captcha value:", value)
        setIsVerified(false);
    }

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_fojlsbs', 'template_e7af76l', e.target, 'bWGd1rd0nGkHhyRPM')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    const classes = useStyles();

    return (
    <div>
        <Grid container md={12} marginTop="15%">
            <Grid item xs={5} md={5} sm={6} xl={6}>
                    <ImgContactsArfi>
                        <ImageList
                            xs={{ width: '10%', height: '10%' }}
                            sm={{ width: '50%', height: '50%' }}
                            md={{ width: '70%', height: '70%' }}
                            xl={{ width: '80%', height: '80%'}}>
                            <ImageListItem key={PictureContacts}>
                                <img
                                    src={PictureContacts}
                                    srcSet={PictureContacts}
                                    alt={PictureContacts}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        </ImageList>
                    </ImgContactsArfi>
            </Grid>

            <Grid item md={6} sm={6} xs={12}>
                <TextContactsDescriptions>
                    158 chemin des fours à chaux <br /><br />
                    La Ginestière <br /> <br />
                    83200 TOULON <br /> <br />
                    +33 6 11 45 08 80
                </TextContactsDescriptions>
            </Grid>

            <Grid item md={6} sm={6}>

                    <FormContactsArfi>
                        <form onSubmit={sendEmail}>

                            <input className={classes.formInput} placeholder="Nom" type="text" name="name" /> <br />
                            <input className={classes.formInput} placeholder="Mél" type="email" name="email" /> <br />
                            <textarea className={classes.textArea} placeholder="Message" name="message" /> <br />

                            <CaptchaResponsiv>
                                <ReCAPTCHA
                                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                                    onChange={onChange}
                                />
                            </CaptchaResponsiv>

                            <input type="submit" value="Envoyer" disabled={isVerified} />
                        </form>
                    </FormContactsArfi>
            </Grid>
        </Grid>
    </div>
    )
}

export default Contacts;