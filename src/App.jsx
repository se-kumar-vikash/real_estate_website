import { Routes, Route } from 'react-router-dom';
import { Container } from '@chakra-ui/react'

import Header from './components/Header/Header';
import Home from './routes/Home';
import PropertyDetails from './routes/PropertyDetails';
import Footer from './components/Footer'
import HouseProvider from './context/HouseContext';
import HouseDetails from './components/PropertyDetails/HouseDetails';
import Properties from './routes/Properties';
import Contact from './components/Contact';

const App = () => {
  return (
    <HouseProvider>
      <Container className='app' maxW='container.lg' px='6' minHeight={"87.5vh"}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/properties' element={< Properties />} />
          <Route path='property-details' element={<PropertyDetails />} >
            <Route path=":propertyId" element={<HouseDetails />} />
          </Route>
          <Route path="*"
            element={<main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
            }
          />
        </Routes>
      </Container>
      <Footer />
    </HouseProvider>
  )
}

export default App