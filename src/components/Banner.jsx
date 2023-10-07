import {
  HStack,
  VStack,
  Button,
  Text,
  Heading,
  Stack,
  Box,
  Image,
  Grid,
  Flex,
  GridItem,
  Container,
} from "@chakra-ui/react";
import { BiPlus } from "react-icons/bi";

import { bannerData } from "../data";
import Apartment1Lg from "../assets/images/apartments/a1lg.png";
import Apartment6Lg from "../assets/images/apartments/a6lg.png";
import { useNavigate } from "react-router-dom";
import Carousel from "./Slider/Carousel";

const Banner = () => {
  const navigate = useNavigate();
  const goToProperties = () => {
    navigate("/properties");
  }
  return (
    <>
      <Container m={"0"} p={"0"}  maxW={'none'}>
        
        <Box h='100%' display={{ base: "block", xl: "block" }} style={{ marginTop: '0px' }}>
          {/* <Image
            src={Apartment6Lg}
            alt="house"
            style={{ height: '100%', width: '100%', objectFit: 'contain' }}
          /> */}
          <Carousel/>
          
        </Box>
      </Container>

      <Grid my='3'
        rowGap='2' gridTemplateColumns='repeat(auto-fit, minmax(300px, 1fr))' mt="30px" mb="30px"
      >

        <GridItem justify='center' align='center' pb="40px" mr="8px">

          <VStack
            flexGrow='1'
            // px={{ sm: "6", md: "10" }}
            // py={{ sm: '8', md: "16" }}
            bg="pink.400"
            height={"100%"}
            justifyContent="center"
            textAlign="left"
            borderRadius="xl"
            p={"12px"}
          >
            <Heading fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}>
              Find Real Estate That Suits You.
            </Heading>
            <Text fontSize="sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
              fugit illo? Delectus, voluptas unde quae cupiditate at amet beatae
              totam!
            </Text>
            <Box pt="3" pb="8">
              <Button onClick={goToProperties}>Get Started</Button>
            </Box>

            <HStack spacing="3">
              {bannerData.map((item, index) => (
                <VStack
                  key={index}
                  bg="pink.200"
                  p="4"
                  borderRadius="md"
                  align="left"
                  pr="3"
                >
                  <HStack>
                    <Text fontSize={{ sm: '14px', md: 'md' }} fontWeight="extrabold" mr="-2">
                      {Object.keys(item)}
                    </Text>{" "}
                    <BiPlus style={{ color: "#ED64A6" }} />
                  </HStack>
                  <Text fontSize={{ sm: '12px', md: 'sm' }}>{Object.values(item)}</Text>
                </VStack>
              ))}
            </HStack>
          </VStack>
        </GridItem>
        <GridItem justify='center' align='center' my={"8px"} pb="40px">
          <VStack justify='center'>
            <Box h='50%' display={{ base: "block", xl: "block" }} >
              <Image
                src={Apartment1Lg}
                alt="house"
                style={{ height: '100%', width: '100%', objectFit: 'contain' }}
              />
            </Box>
            <Box h='50%' display={{ base: "block", xl: "block" }} style={{ marginTop: '0px' }}>
              <Image
                src={Apartment6Lg}
                alt="house"
                style={{ height: '100%', width: '100%', objectFit: 'contain' }}
              />
            </Box>
          </VStack>
        </GridItem>
      </Grid>

    </>
  );
};

export default Banner;
