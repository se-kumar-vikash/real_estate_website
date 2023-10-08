import { Textarea, Image, VStack, HStack, Box, Text, Input, Button, Grid, GridItem, Stack, Flex, Heading, Divider, Link } from '@chakra-ui/react'
import emailjs from 'emailjs-com';
import { useRef, useState } from 'react';
import { agentData } from '../../data';
import AlertBox from '../AlertBox';
import { useForm } from 'react-hook-form';
const Form = ({ searchedHouse, source }) => {


    const { register, handleSubmit, formState: { errors } } = useForm();


    const [submitted, SetSubmitted] = useState(false);
    const formRef=useRef(null);
    function sendEmail(e) {
        // console.log(formRef.current); return false;
        // e.preventDefault();
        //This is important, i'm not sure why, but the email won't send without it
        emailjs.sendForm('service_ep2eeqr', 'template_kfjmxkb', formRef, 'AJzSZMJKayJb2-EuS')
            .then((result) => {
                setTimeout(() => {
                    SetSubmitted(true);
                }, 3000)
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
            <VStack border='1px' borderColor='pink.100' boxShadow='md' px='5' py='6' mx="20px">
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
                    <form onSubmit={handleSubmit(sendEmail)} ref={formRef}>
                        <Input mt='3' mb='2' placeholder="Name*" name="name"
                            {...register("name",
                                {
                                    required: "Name is required.",
                                    minLength: {
                                        value: 3,
                                        message: "Please enter minimun 3 characters."
                                    },
                                    maxLength: {
                                        value: 50,
                                        message: "Please enter maximum 50 characters."
                                    }
                                })}
                            _focusVisible={{
                                borderColor: '#8f4267', boxShadow: '0 0 0 1px #8f4267'
                            }} />

                        {errors?.name &&
                            <label className='error'>{errors.name.message}</label>
                        }
                        <Input placeholder="Email*" name="email"
                            {...register("email",
                                {
                                    required: "Email is required.",
                                    pattern: {
                                        value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message: "Please Enter Valid Email."
                                    },
                                    maxLength: {
                                        value: 50,
                                        message: "Please enter maximum 50 characters."
                                    }
                                })}

                            _focusVisible={{
                                borderColor: '#8f4267', boxShadow: '0 0 0 1px #8f4267'
                            }} />
                        {errors?.email &&
                            <label className='error'>{errors.email.message}</label>
                        }
                        <Input my='2' placeholder="Phone*" name="phone"

                            {...register("phone",
                                {
                                    required: "Phone Number is required.",
                                    pattern: {
                                        value: /^\d+$/,
                                        message: "Please Enter Valid Phone Number."
                                    },
                                    maxLength: {
                                        value: 10,
                                        message: "Please enter Valid Phone Numbers."
                                    },
                                    minLength: {
                                        value: 10,
                                        message: "Please enter Valid Phone Numbers."
                                    }
                                })}

                            maxLength={"10"}
                            _focusVisible={{
                                borderColor: '#8f4267', boxShadow: '0 0 0 1px #8f4267'
                            }} />
                        {errors?.phone &&
                            <label className='error'>{errors.phone.message}</label>
                        }

                        <Textarea my='2' placeholder='Message*' name="message" size='sm'
                         defaultValue={`${searchedHouse ? `Hello, I am interested in : ${searchedHouse.name} which is located in ${searchedHouse.address}`:""}`}
                         {...register("message",
                         {
                             required: "Message is required.",
                            
                             maxLength: {
                                 value: 500,
                                 message: "Please enter maximum 500 characters."
                             },
                             minLength: {
                                 value: 5,
                                 message: "Please enter minimum 5 characters."
                             }
                         })}

                        _focusVisible={{
                            borderColor: '#8f4267', boxShadow: '0 0 0 1px #8f4267'
                        }}
                            borderRadius={"8px"}
                        />

                        {errors?.message &&
                            <label className='error'>{errors.message.message}</label>
                        }
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