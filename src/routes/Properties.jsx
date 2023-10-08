import React, { useContext, useEffect, useState } from 'react'
import Search from '../components/Search/Search'
import HouseList from '../components/Houses/HouseList'
import { Box, Button } from '@chakra-ui/react'
import { HouseContext } from '../context/HouseContext';

function Properties() {
    const { isLoading, houses } = useContext(HouseContext);

    const [listLength, setListLength] = useState(6)
    const seeMore = () => {
        setListLength((prev) => (prev) + 3)
    }
    useEffect(()=>{
        scrollTo(0, 0);
      },[])
    return (
        <>
          
            <Search />
            
            <HouseList displayItemCount={listLength} />
            {listLength !== houses.length ? houses.length !== 0 ? houses.length > 6 &&

                <Button display={"flex"} margin={"auto"} bg="pink.900" _hover={{ bg: "#8f4267" }} onClick={seeMore}  >See More Properties</Button>
                : "" : ""
            }
        </>
    )
}

export default Properties
