import React, { useState } from 'react'
import {
    Box,
    IconButton,
    useBreakpointValue,
    Stack,
    Heading,
    Text,
    Container,
    Image,
} from '@chakra-ui/react'
// Here we have used react-icons package for the icons
import { BiDownArrowAlt, BiDownArrowCircle, BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import Apartment1 from '../../assets/images/apartments/a1.png';
import Apartment2 from '../../assets/images/apartments/a2.png';

import House1Lg from '../../assets/images/houses/house1lg.png';
import House2Lg from '../../assets/images/houses/house2lg.png';
import House3Lg from '../../assets/images/houses/house3lg.png';


function Carousel( {source, data}) {

    // Settings for the slider
    const settings = {
        dots: true,
        arrows: false,
        fade: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    const [slider, setSlider] = useState(0)

    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = useBreakpointValue({ base: '90%', md: '50%' })
    const side = useBreakpointValue({ base: '30%', md: '40px' })

    // This list contains all the data for carousels
    // This can be static or loaded from a server
    const cards = [
        {
            title: 'Design Projects 1',
            text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
            image: House3Lg
        },
        {
            title: 'Design Projects 2',
            text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
            image: House2Lg
        },
        {
            title: 'Design Projects 3',
            text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
            image: House1Lg
        },
    ]
const [sliderContent, setSliderContent] = useState(data?data:cards)
    return (
        <Box position={'relative'}  className="carousel" height={'600px'} width={'full'} overflow={'hidden'}>
            {/* CSS files for react-slick */}
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            {/* Left Icon */}
            <IconButton
                aria-label="left-arrow"
                variant="ghost"
                position="absolute"
                left={side}
                top={top}
                className='left-arrow'
                transform={'translate(0%, -50%)'}
                zIndex={2}
                color={"#521B41"}
                onClick={() => slider?.slickPrev()}>
                <BiLeftArrowAlt size="40px" />
            </IconButton>
            {/* Right Icon */}
            <IconButton
                aria-label="right-arrow"
                variant="ghost"
                position="absolute"
                right={side}
                top={top}
                className='right-arrow'
                transform={'translate(0%, -50%)'}
                zIndex={2}
                color={'#521B41'}
                onClick={() => slider?.slickNext()}>
                <BiRightArrowAlt size="40px" />
            </IconButton>
            {/* Slider */}
            <Slider {...settings} ref={(slider) => setSlider(slider)} >
                
                {cards.map((card, index) => (
                    <Box
                        key={index}
                        // height={'100vh'}
                        // width={'100%'}
                        position="relative"
                        // backgroundPosition="center"
                        // backgroundRepeat="no-repeat"
                        // backgroundSize="cover"
                        // backgroundImage={`url(${card.image})`}
                                                
                        >
                            <Image src={card.image} width={"100%"}  maxH={600}/>
                        {/* This is the block you need to change, to customize the caption */}
                        {
                            source !="propertiesDetail" &&
                            <Container size="container.lg" height="600px"  >
                            <Stack
                            className='slider_text'
                                spacing={6}
                                w={'full'}
                                maxW={'lg'}
                                position="absolute"
                                top="20%"
                                
                                transform="translate(0, -50%)">
                                <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                                    {card.title}
                                </Heading>
                                <Text fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
                                    {card.text}
                                </Text>
                            </Stack>
                            <div class="bounce">
                                <BiDownArrowAlt />
                            </div>
                        </Container>                            
                        }

                    </Box>
                ))}
            </Slider>
        </Box>
    )
}

export default Carousel
