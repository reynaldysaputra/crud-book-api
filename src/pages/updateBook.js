import React, { Fragment } from 'react';
import { Box, Text, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import {TitleBook} from '../component/book';

function PageUpdateBook() {
    return(
        <Fragment>
            <Box pt='20px'>
                <TitleBook heading='lorem ipsum dolior dada' />
                <Text my='2%' fontSize='1xl' color='fontColorFirst' fontWeight='bold' cursor='pointer'>View Post</Text>
            </Box>

            <FormControl id="first-name" isRequired mt='2%'>
                <FormLabel color='white' opacity='.8'>Title</FormLabel>
                <Input layerStyle='inputStyle' />

                <FormLabel color='white' opacity='.8' mt='2%' htmlFor='author'>Author</FormLabel>
                <Input layerStyle='inputStyle' id='author' />

                <Button mt='3%' bg='#161E20' color='white' opacity='.8' _hover={{background : '#28373F'}}>Save Book</Button> <br/>
                <Button mt='1%' bg='#161E20' color='white' opacity='.8' _hover={{background : '#28373F'}}>Delete Book</Button>
            </FormControl>
        </Fragment>
    )
}

export default PageUpdateBook;