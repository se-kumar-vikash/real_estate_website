import { Stack, VStack, Heading, Text, Box, HStack, Image, Input, Textarea, Button } from "@chakra-ui/react"
import { BiBed, BiBath, BiArea, BiArrowBack } from "react-icons/bi";

import { useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { HouseContext } from "../../context/HouseContext";
import Form from "./Form";
import Carousel from "../Slider/Carousel";

const HouseDetails = () => {

  const { propertyId } = useParams();
  const { houses } = useContext(HouseContext);

  const searchedHouse = houses.find(house => house.id == propertyId)


  return (
    <>

      <Stack direction={{ base: 'column', md: 'row' }} px="10px" justify='space-between' align={{ md: 'center' }} my='28px'>
        <Link to="/">
          <Button bg="pink.800" width={"50px"} height={"50px"} display={"flex"} justifyContent={"center"}
            borderRadius={"50px"}
            _hover={{ bg: "#8f4267" }}
            fontSize={"20px"}
            fontWeight={"bold"}
            alignItems={"center"} textAlign={"center"}>

            <BiArrowBack color="#fff" />
          </Button>
        </Link>
        <Box>
          <Heading fontSize='22px'>{searchedHouse.name}</Heading>
          <Text fontSize='15px'>{searchedHouse.address}</Text>
        </Box>

        <HStack>
          <Text px='3' borderRadius='full' bg='#f49494' color={"#fff"} fontWeight={"bold"}>{searchedHouse.type}</Text>
          <Text px='3' borderRadius='full' bg='#d3689eba' color={"#fff"} fontWeight={"bold"}>{searchedHouse.country}</Text>
        </HStack>

        <Text fontWeight="extrabold" fontSize="20px" color="pink.500">Rs. {searchedHouse.price}</Text>
      </Stack>

      <Stack direction={{ base: 'column', lg: 'row' }} px="10px" gap='6' align='flex-start'>
        <VStack align='left' width={'100%'}>
          {/* <Image src={searchedHouse.imageLg} alt='house' /> */}
          <Carousel source="propertiesDetail" data={searchedHouse.carouselImage}/>
          <Stack py='10px' spacing={{ sm: '3', md: '5' }} direction={{ base: 'column', md: 'row' }}>
            <HStack>
              <BiBed style={{ color: "#D53F8C" }} />
              <Text fontSize="14px">{searchedHouse.bedrooms} Bedrooms</Text>
            </HStack>

            <HStack>
              <BiBath style={{ color: "#D53F8C" }} />
              <Text fontSize="14px">{searchedHouse.bathrooms} Bathrooms</Text>
            </HStack>

            <HStack>
              <BiArea style={{ color: "#D53F8C" }} />
              <Text fontSize="14px">{searchedHouse.surface}</Text>
            </HStack>
          </Stack>

          <Text fontSize='15px'>{searchedHouse.description}</Text>

        </VStack>

      </Stack>
      <Stack mt={20}>
        <HStack mx={'auto'} maxW={"400px"}>
        <Form searchedHouse={searchedHouse} source={"property"} />
        </HStack>
        </Stack>
    </>
  )
}

export default HouseDetails;