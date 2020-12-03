import React, { Fragment } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

function Book({heading, text}) {
    return(
        <Fragment>
            <Box p={8} boxSizing='border-box' border='1px solid #293239' color='white' cursor='pointer' layerStyle='effectBox'>
                <Heading fontSize='2xl'>{heading}</Heading>
                <Text opacity='.9' mt='3%'>{text}</Text>
            </Box>
        </Fragment>
    )
}

function TitleBook({heading}) {
    return(
        <Fragment>
            <Heading fontSize='1xl' color='white'>{heading}</Heading>
        </Fragment>
    )
}

export {Book, TitleBook};