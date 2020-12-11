import React from 'react';
import {SimpleGrid, Spinner} from '@chakra-ui/react';

function Loading(){
    return(
        <SimpleGrid columns={1} justifyItems='flex-end' pr={10} w='100%'>
            <Spinner color='gray.300' />
        </SimpleGrid>
    )
}
export default Loading;