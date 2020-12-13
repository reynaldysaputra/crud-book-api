import React, { Fragment } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

function Book({heading, text, id}) {
    const historyPage = useHistory();

    return(
        <Fragment>
            <Box p={8} boxSizing='border-box' border='1px solid #293239' color='white' cursor='pointer' layerStyle='effectBox' onClick={() => historyPage.push(`/blog/${id}`)}>
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