import React, { Fragment } from 'react';
import { Box, Divider, Heading, ListItem, UnorderedList, VStack, FormControl, Input, FormLabel, Button } from '@chakra-ui/react';
import {useHistory} from 'react-router-dom';

function Admin() {
    const pageHistory = useHistory();

    const handlePage = () => pageHistory.push('/blog/123');

    return(
        <Fragment>
            <Box p='20px'>
                <Box pb={['10%','10%','3%','3%']}>
                    <UnorderedList color='fontColorFirst' fontWeight='bold' spacing={1} cursor='pointer'>
                        <ListItem layerStyle='effectLineBottom' onClick={handlePage}>Lorem ipsum dolor sit amet</ListItem>
                        <ListItem layerStyle='effectLineBottom'>Consectetur adipiscing elit</ListItem>
                        <ListItem layerStyle='effectLineBottom'>Integer molestie lorem at massa</ListItem>
                        <ListItem layerStyle='effectLineBottom'>Facilisis in pretium nisl aliquet</ListItem>
                    </UnorderedList>
                </Box>

                <VStack justify='flex-start'><Divider boxSize='100%'/></VStack>

                <Box py='3%'>
                    <Heading color='white' fontSize='2xl' my={['5%','5%',null,null]}>Create new book</Heading>

                    <FormControl id="first-name" isRequired mt='2%'>
                        <FormLabel color='white' opacity='.8'>Title</FormLabel>
                        <Input layerStyle='inputStyle' />

                        <FormLabel color='white' opacity='.8' mt='2%' htmlFor='author'>Author</FormLabel>
                        <Input layerStyle='inputStyle' id='author' /> <br/>

                        <Button mt={['8%','8%','3%','3%']} bg='#161E20' color='white' opacity='.8' _hover={{background : '#28373F'}}>Create Book</Button>
                    </FormControl>
                </Box>
            </Box>
        </Fragment>
    )
}

export default Admin;