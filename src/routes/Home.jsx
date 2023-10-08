import { useEffect } from 'react';
import Banner from '../components/Banner'
import PopupModal from '../components/Modal/PopupModal';
import Search from '../components/Search/Search'
import Properties from './Properties';

const Home = () => {
  useEffect(()=>{
    scrollTo(0, 0);
  })
  return (
    <>
    <PopupModal/>
      <Banner />
      <Properties />
    </>
  )
}

export default Home;