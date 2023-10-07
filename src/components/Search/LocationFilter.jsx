import { Select } from '@chakra-ui/react'
import { useContext } from 'react';
import { HouseContext } from '../../context/HouseContext';

const LocationFilter = () => {

  const { setCountry, countries } = useContext(HouseContext);

  const locationHandler = (event) => {
    setCountry(event.target.value);
  }

  return (
    <Select placeholder='select country' onChange={locationHandler} _focusVisible={{
      borderColor: '#8f4267', boxShadow: '0 0 0 1px #8f4267'
    }}>
      {
        countries.map((country, index) =>
          <option key={index}>{country}</option>
        )
      }
    </Select>
  );
};

export default LocationFilter;