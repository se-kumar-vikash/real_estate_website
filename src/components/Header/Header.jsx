import { Flex, Heading, Button, HStack, chakra, ButtonGroup, useBreakpointValue, Divider } from '@chakra-ui/react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import NavMobile from './NavMobile';
import logo from "../../assets/images/logo.png"
import { useState } from 'react';
const Header = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const {pathname}=useLocation();
  const activePath=pathname.replace("/", "");
  const [activeMenu, setActiveMenu] = useState(activePath==""?"home":activePath);
  const naviagate = useNavigate();

  const naviagatePage = (route) => {

    setActiveMenu(route.toLowerCase())
    if (route.toLowerCase() == "home") {
      naviagate("/")
    } else {
      naviagate(`/${route.toLowerCase()}`)
    }
  }

  return (
    <chakra.header id="header" borderBottom='1px solid rgb(0,0,0,0.3)' px={"10px"} position={"relative"} bg={"#fff5f7b5"} width={"100%"}>
      <Flex w='100%' py='3' align='center' justify='space-between'>
        <Link to='/' style={{ display: 'flex', alignItems: 'center' }} className='brand'>
          <img src={logo} width="100px" /><Heading fontSize='3xl' className='brand_title' color='pink.800'>UMA Developers.</Heading>
        </Link>
        {
          isDesktop ? (
            <>
              <ButtonGroup as='nav' variant='link' spacing='5' mr="20px"> 
                {
                  ['Home', 'Properties', 'About Us', 'Contact'].map((item) => (
                    <Button fontSize='16px' color='pink.700' className={`${activeMenu == item.toLowerCase() ? 'active-nav' : ''}`} key={item} onClick={() => naviagatePage(item)}>{item}</Button>
                  ))
                }
              </ButtonGroup>

            </>
          ) : (
            <NavMobile />
          )
        }
      </Flex>
      {/* <Divider color='pink.800' w={}='20px' />  */}
    </chakra.header>
  )
}

export default Header