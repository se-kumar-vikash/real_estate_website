import { Button, Flex, Heading } from '@chakra-ui/react'
import { useContext } from "react";
import { HouseContext } from '../../context/HouseContext';

import LocationFilter from "./LocationFilter";
import PriceFilter from "./PriceFilter";
import PropertyTypeFilter from "./PropertyTypeFilter";

const Search = () => {

  const { searchHandler } = useContext(HouseContext);

  return (
    <Flex my='3' direction='column' borderRadius='md' bg='#fff' boxShadow='md' p='5'>

      <Heading py='2' size={{ base: 'sm', md: 'md' }}>Filter what you are looking for</Heading>

      <Flex gap={{ base: 3, md: 2 }} direction={{ base: 'column', md: 'row' }} borderRadius='30'>
        <LocationFilter />
        <PropertyTypeFilter />
        <PriceFilter />
        <Button onClick={searchHandler} p={{ base: 3, md: 2 }} bg="pink.900" size="100%" _hover={{ bg: "#8f4267" }} >Search</Button>
      </Flex>
    </Flex>
  )
}

export default Search