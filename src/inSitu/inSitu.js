import { styled} from '@mui/material/styles'
import Box from '@mui/material/Box';
import React from 'react';
import TitlePartChoice from '../title/titleDifferentsPartsJA';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import oscarInSitu from '../pictures/book/OscarInSitu.jpg';
import anoukInSitu from '../pictures/book/AnoukInSitu.jpg';
import arthurInSitu from '../pictures/book/ArthurInSitu.jpg';
import atelierInSitu from '../pictures/book/AtelierInSitu.jpg';
import bilboquetDeuxInSitu from '../pictures/book/BilboquetDeuxInSitu.jpg';
import williamInSitu from '../pictures/book/WilliamInSitu.jpg';
import felicienInSitu from '../pictures/book/FelicienInSitu.jpg';
import reunionInSitu from '../pictures/book/ReunionInSitu.jpg';
import pommeInSitu from '../pictures/book/PommeInSitu.jpg';
import pierrotDeuxInSitu from '../pictures/book/PierrotDeuxInSitu.jpg';
import lePrinceInSitu from '../pictures/book/LePrinceInSitu.jpg';
import leonInSitu from '../pictures/book/LeonInSitu.jpg';
import jacobInSitu from '../pictures/book/JacobInSitu.jpg';
import icareInSitu from '../pictures/book/IcareInSitu.jpg';
import gustaveInSitu from '../pictures/book/GustaveInSitu.jpg';
import gastonInSitu from '../pictures/book/GastonInSitu.jpg';
import crocDurInSitu from '../pictures/book/CrocDurInSitu.jpg';
import christopheInSitu from '../pictures/book/ChristopheInSitu.jpg';
import '../css/inSitu.css'


const BoxOfAllPictures = styled('div')(({ theme }) => ({
    [theme.breakpoints.down('lg')]: {
      marginLeft:"6em",
      marginBottom: "7em"
    },
    [theme.breakpoints.up('lg')]: {
      marginLeft:"18em",
      marginBottom: "8em"
    },
    [theme.breakpoints.up('xl')]: {
      marginLeft:"55em",
      marginBottom: "15em",
      marginTop: "10em"
    },
    [theme.breakpoints.down('sm')]: {
      marginRight: "-20em",
      marginBottom: "15em",
      marginTop: "10em"
    }
}))
const BigPart = styled('div')(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
      display: "none"
    },
}))
const SmallPart = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
      display: "none"
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: "5em"
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: "2em"
    },
}))

const InSitu = () => {
  
  const itemData = [
    {
      img: oscarInSitu,
      alt: 'sculpture en bronze et en terre du nom de "oscar" '
    },
    {
      img: crocDurInSitu,
      alt: 'sculpture en bronze et en terre du nom de "croc dur" '
    },
    {
      img: anoukInSitu,
      alt: 'sculpture en bronze et en terre du nom de "anouk" '

    },
    {
      img: arthurInSitu,
      alt: 'sculpture en bronze et en terre du nom de "arthur" '

    },
    {
      img: gastonInSitu,
      alt: 'sculpture en bronze et en terre du nom de "gaston" '

    },
  
    {
      img: atelierInSitu,
      alt: 'sculpture en bronze et en terre du nom de "atelier" '

    },
    {
      img: bilboquetDeuxInSitu,
      alt: 'sculpture en bronze et en terre du nom de "bilboquet" '

    },
    {
      img: icareInSitu,
      alt: 'sculpture en bronze et en terre du nom de "icare" '

    },
    {
      img: williamInSitu,
      alt: 'sculpture en bronze et en terre du nom de "william" '

    },
    {
      img: felicienInSitu,
      alt: 'sculpture en bronze et en terre du nom de "felicien" '

    },
    {
      img: reunionInSitu,
      alt: 'sculpture en bronze et en terre du nom de "reunion" '

    },
    {
      img: pommeInSitu,
      alt: 'sculpture en bronze et en terre du nom de "pomme" '

    },
    {
      img: pierrotDeuxInSitu,
      alt: 'sculpture en bronze et en terre du nom de "pierrot deux" '

    },
    {
      img: lePrinceInSitu,
      alt: 'sculpture en bronze et en terre du nom de "le prince" '

    },
    {
      img: christopheInSitu,
      alt: 'sculpture en bronze et en terre du nom de "christophe" '

    },
    {
      img: jacobInSitu,
      alt: 'sculpture en bronze et en terre du nom de "jacob" '

    },
    {
      img: gustaveInSitu,
      alt: 'sculpture en bronze et en terre du nom de "gustave" '

    },
    {
      img: leonInSitu,
      alt: 'sculpture en bronze et en terre du nom de "leon" '

    },
  ];

    return (
    <div>
        <TitlePartChoice title="In Situ"/>

        <BigPart>
            <BoxOfAllPictures>
                <Box sx={{ width: 800, height: 1200, overflowY: 'scroll' }}>
                    <ImageList variant="masonry" cols={3} gap={8}>
                        {itemData.map((item) => (
                            <ImageListItem key={item.img}>
                                <img className="inSituPicturesPart"
                                  src={item.img}
                                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                  alt={item.alt}
                                  loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>
            </BoxOfAllPictures>
        </BigPart>

        <SmallPart>
            <Box sx={{ width: 600, height: 1200, overflowY: 'scroll' }}>
                <ImageList variant="masonry" cols={2} gap={6}>
                    {itemData.map((item) => (
                      <ImageListItem key={item.img}>
                          <img className="inSituPicturesPart"
                            src={item.img}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                          />
                      </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </SmallPart>
    </div>
    )
}
        
export default InSitu;

