import React, { Fragment } from 'react';
import { Box, Heading,Text, SimpleGrid } from '@chakra-ui/react';
import {Book} from '../component/book';

function Blog() {
    return(
        <Fragment>
            <SimpleGrid columns={[1,1,2,2]} gap={5} px={10}>
            <Book 
                    heading='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, temporibus!'  
                    text='lorem ipsum dolor ss...'
                />
                <Book 
                    heading='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, temporibus!'  
                    text='lorem ipsum dolor ss...'
                />
            </SimpleGrid>
        </Fragment>
    )
}

export default Blog;