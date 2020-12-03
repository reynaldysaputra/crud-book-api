import React, { Fragment } from 'react';
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';

function Home() {
    return(
        <Fragment>
            <Box w='full' h={['auto','auto','100vh','100vh']} >
                <SimpleGrid column={1} boxSize='full'  justifyContent='center' alignContent={{xl:'center', lg:'center'}} color='#F6FBFD'>
                    <Heading mt={['3%','','','']} fontSize={['2xl']}>Hello and Welcome to my book</Heading>
                </SimpleGrid>
            </Box>
        </Fragment>
    )
}

export default Home;