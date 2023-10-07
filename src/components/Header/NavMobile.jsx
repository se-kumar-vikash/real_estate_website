import { useRef, useState } from 'react';

import { ButtonGroup, VStack, Input, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Button, IconButton, useDisclosure, Center, Heading, HStack } from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from "../../assets/images/logo.png"

const NavMobile = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();
    const { pathname } = useLocation();
    const activePath = pathname.replace("/", "");
    const [activeMenu, setActiveMenu] = useState(activePath == "" ? "home" : activePath);
    const naviagate = useNavigate();
    const naviagatePage = (route) => {
        onClose();
        setActiveMenu(route.toLowerCase())
        if (route.toLowerCase() == "home") {
            naviagate("/")
        } else {
            naviagate(`/${route.toLowerCase()}`)
        }
    }

    return (
        <>
            <IconButton variant='ghost'
                icon={<FiMenu fontSize='1.35rem' />}
                aria-label='Open Menu'
                color={'#521B41'}
                onClick={onOpen} ref={btnRef}
            />
            <Drawer isOpen={isOpen} placement='right' onClose={onClose} finalFocusRef={btnRef}>
                <DrawerOverlay />
                <DrawerContent>
                    <Center>
                        <DrawerHeader>
                        <DrawerCloseButton bg={'none'} _hover={{color:"#521B41"}} />

                            <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
                                <img src={logo} width="100px" /><Heading fontSize='10px' color='pink.800'>UMA Developers.</Heading>
                            </Link>
                        </DrawerHeader>
                    </Center>
                    <DrawerBody px='14' mt='4'>
                        <VStack as='nav' spacing='8' alignItems='center' color='pink.700'>
                            {
                                ['Home', 'Properties', 'About Us', 'Contact'].map((item) => (
                                    <p fontSize='16px'  className={`nav-link ${activeMenu == item.toLowerCase() ? 'active-nav' : ''}`} key={item} onClick={() => naviagatePage(item)}>{item}</p>
                                ))
                            }

                                {/* <Button size='sm' variant='solid' bg='pink.800' _hover={{ bg: '#8f4267' }} onClick={() => naviagatePage("contact")}>Contact</Button> */}

                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default NavMobile