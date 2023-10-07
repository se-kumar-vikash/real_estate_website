import { Textarea, Image, VStack, HStack, Box, Text, Input, Button, Grid, GridItem, Stack, Flex, Heading, Divider, Link } from '@chakra-ui/react'
import emailjs from 'emailjs-com';
import { useState } from 'react';
import { agentData } from '../../data';
import AlertBox from '../AlertBox';
const Form = ({ searchedHouse, source }) => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.email })
    }


    const [submitted, SetSubmitted] = useState(false);
    function sendEmail(e) {
        e.preventDefault();
        //This is important, i'm not sure why, but the email won't send without it
        emailjs.sendForm('service_ep2eeqr', 'template_kfjmxkb', e.target, 'AJzSZMJKayJb2-EuS')
            .then((result) => {
                setTimeout(() => {
                    SetSubmitted(true);
                },3000)
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <>

            {source != "property" ?
                <Grid my='3' rowGap='4' gridTemplateColumns='repeat(auto-fit, minmax(300px, 1fr))' mt="30px" mb="30px"   >
                    {agentData.map((item, index) => (

                        <Flex justify='center' align='center' pb="40px" key={index}>
                            <Stack justify='center' textAlign={"center"} width="250px" bg="white" borderRadius="xl">
                                <Image src={item.img} pt="5px" margin={"auto"} boxSize={"100px"} alt='agent' />
                                <Divider my="2.5" />
                                <VStack p='4' align='left'>

                                    <Heading fontSize="24px" letterSpacing="tight">
                                        {item.name}
                                    </Heading>

                                    <Text fontSize="13px" color="grey">
                                        <Link href={`mailto:${item.email}`}>
                                            {item.email}
                                        </Link>
                                        <br />
                                        <Link href={`tel:${item.phone}`}>
                                            {item.phone}
                                        </Link>
                                    </Text>
                                </VStack>
                            </Stack>
                        </Flex>


                    ))}
                </Grid>
                : ""}
            <VStack border='1px' borderColor='pink.100' boxShadow='md' px='5' py='6' mx="50px">
                {source == "property" ?

                    <HStack>
                        <Image borderRadius='full' boxSize='75px' src={searchedHouse.agent.image} />
                        <Box>
                            <Text mb='-3px' fontWeight='extrabold' fontSize='15px'>{searchedHouse.agent.name}</Text>
                            <Text style={{ fontSize: '12px' }}>+{searchedHouse.agent.phone}</Text>
                        </Box>
                    </HStack> :
                    ""
                }
                {
                    submitted && <AlertBox />
                }
                <VStack my='3px' spacing='2px' >
                    <form onSubmit={sendEmail}>
                        <Input mt='3' mb='2' placeholder="Name*" onChange={handleChange} name="name"
                            _focusVisible={{
                                borderColor: '#8f4267', boxShadow: '0 0 0 1px #8f4267'
                            }} />
                        <Input placeholder="Email*" onChange={handleChange} name="email" _focusVisible={{
                            borderColor: '#8f4267', boxShadow: '0 0 0 1px #8f4267'
                        }} />
                        <Input my='2' placeholder="Phone*" onChange={handleChange} name="phone" _focusVisible={{
                            borderColor: '#8f4267', boxShadow: '0 0 0 1px #8f4267'
                        }} />
                        <Textarea my='2' placeholder='Message*' onChange={handleChange} name="message" size='sm' defaultValue='Hello, I am interested in [Modern apartment]' _focusVisible={{
                            borderColor: '#8f4267', boxShadow: '0 0 0 1px #8f4267'
                        }}
                            borderRadius={"8px"}
                        />
                        <HStack my='2'>
                            <Button w='full' _hover={{ bg: "#8f4267" }} whiteSpace={"normal"} type='submit' px='4' bg="pink.900"  >Send Message</Button>
                            <Button w={{ base: 'full', md: '50%' }} variant='outline' borderColor={"#8f4267"} color={"#8f4267"}
                                _active={{
                                    background: '#bb8897',
                                    color: 'white'
                                }}
                                _hover={{
                                    background: '#bb8897',
                                    color: 'white'
                                }}
                            >Call</Button>
                        </HStack>
                    </form>
                </VStack>

            </VStack>


        </>
    )
}

export default Form