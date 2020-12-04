import React, { Fragment } from 'react';
import { Box, Text, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import {TitleBook} from '../component/book';
import usePost from '../hook/usePost';

function PageUpdateBook({match}) {
    const {data:dataBook, isLoading} = usePost(['dataBook', match.params.id]);

    if(isLoading) return null;

    return(
        <Fragment>
            <Box pt='20px'>
                {console.log(dataBook)}
                <TitleBook heading={dataBook.find(item => item.id === parseInt(match.params.id)).title} />
                <Text my='2%' fontSize='1xl' color='fontColorFirst' fontWeight='bold' cursor='pointer'>View Post</Text>
            </Box>

            <FormControl id="first-name" isRequired mt='2%'>
                <FormLabel color='white' opacity='.8'>Title</FormLabel>
                <Input layerStyle='inputStyle' />

                <FormLabel color='white' opacity='.8' mt='2%' htmlFor='author'>Author</FormLabel>
                <Input layerStyle='inputStyle' id='author' /><br/>

                <Button mt='3%' bg='#161E20' color='white' opacity='.8' _hover={{background : '#28373F'}}>Save Book</Button> <br/>
                <Button mt={['3%','3%','1%','1%']} bg='#161E20' color='white' opacity='.8' _hover={{background : '#28373F'}}>Delete Book</Button>
            </FormControl>
        </Fragment>
    )
}

export default PageUpdateBook;