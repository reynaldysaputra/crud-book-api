import React, { Fragment } from 'react';
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';

function Home() {
    return(
        <Fragment>
            <Box w='full' h='100vh' >
                <SimpleGrid column={1} boxSize='full'  justifyContent='center' alignContent='center' color='#F6FBFD'>
                    <Heading>Hello and Welcome to my book</Heading>
                </SimpleGrid>
            </Box>
        </Fragment>
    )
}

export default Home;