import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button, CloseButton, useDisclosure } from '@chakra-ui/react'
import React from 'react'

function AlertBox() {
    const {
        isOpen: isVisible,
        onClose,
        onOpen,
    } = useDisclosure({ defaultIsOpen: true })

    return isVisible && (
        <Alert status='success' borderRadius={"10px"}>
            <AlertIcon />
            <Box>
                <AlertTitle>Success!</AlertTitle>
                <AlertDescription>
                    Your Message has been received. We will review your Message
                    and respond within the next 48 hours.
                </AlertDescription>
            </Box>
            <CloseButton
                alignSelf='flex-start'
                position='relative'
                right={-1}
                top={-1}
                onClick={onClose}
            />
        </Alert>
    )
}

export default AlertBox
