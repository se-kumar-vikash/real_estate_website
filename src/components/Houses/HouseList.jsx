import { Button, Center, Grid, Heading, Spinner, Stack } from '@chakra-ui/react';
import { useContext, useState } from "react";
import { Link } from 'react-router-dom';

import { HouseContext } from "../../context/HouseContext";
import HouseItem from './HouseItem';

const HouseList = ({displayItemCount}) => {
  const { houses, isLoading } = useContext(HouseContext);

  if (isLoading) {
    return (
      <Center margin={'50px'}>
        <Spinner align='center' color='pink.700' />
      </Center>
    )
  }

  if (houses.length === 0) {
    return (
      <Stack maxH='400px' pb="100px">
        <Heading size="lg" p={{ base: '6', md: '10' }} align="center">
          Oops... Can try another one?
        </Heading>
      </Stack>
    );
  }
  
  return (
    <>
      <Grid my='3' rowGap='4' gridTemplateColumns='repeat(auto-fit, minmax(300px, 1fr))' mt="30px" mb="30px"   >
        {
          houses.map((item, i) =>
            i + 1 <= displayItemCount &&
            <Link to={`/property-details/${item.id}`} key={item.id}>
              <HouseItem key={item.id} house={item} />
            </Link>
          )
        }
       
      </Grid>


    </>
  )
}

export default HouseList