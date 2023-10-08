import { useEffect } from "react";
import HouseDetails from "../components/PropertyDetails/HouseDetails";

const PropertyDetails = () => {
  useEffect(()=>{
    scrollTo(0, 0);
  })
  return (
    <>      
      <HouseDetails />
    </>
  )
}

export default PropertyDetails