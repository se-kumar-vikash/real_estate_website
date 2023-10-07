import { Select } from '@chakra-ui/react'
import { useContext } from 'react';
import { HouseContext } from '../../context/HouseContext';

const PropertyTypeFilter = () => {

  const { setProperty, properties } = useContext(HouseContext);

  const propertyTypeHandler = (event) => {
    setProperty(event.target.value);
  }

  return (
    <Select placeholder='select type' onChange={propertyTypeHandler}
      _focusVisible={{
        borderColor: '#8f4267', boxShadow: '0 0 0 1px #8f4267'
      }}
    >
      {
        properties.map((type, index) =>
          <option key={index}>{type}</option>
        )
      }
    </Select>
  );
};

export default PropertyTypeFilter;